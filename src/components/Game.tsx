import { use, useCallback, useEffect, useRef, useState } from "react";
import {
    BACKSPACE,
    ENTER,
    GAME_ROUNDS,
    GAME_WORD_LENGTH,
    LetterState,
} from "../constants";
import { GuessRow } from "./GuessRow";
import { Keyboard } from "./Keyboard";
import { useCurrentGuessReducer } from "../hooks/useCurrentGuessReducer";
import { IsValidWord } from "../utils/IsValidWord";
import { getTileStates } from "../utils/getTileStates";
import {
    getStoredGameState,
    setStoredGameState,
} from "../utils/gameStateStorage";

type Props = {
    solution: string;
};

export const Game = ({ solution }: Props) => {
    const [currentGuess, dispatch] = useCurrentGuessReducer();
    const [guesses, setGuesses] = useState<Array<string>>(getStoredGameState());
    const [gameCompletionState, setGameCompletion] = useState<
        "active" | "won" | "lost"
    >("active");
    const [toastText, setToastText] = useState("");
    const toastTimeout = useRef<number>();
    const [shakeCurrentRow, setShakeCurrentRow] = useState<boolean>(false);
    const shakeTimeout = useRef<number>();

    const setGuessesCallback = useCallback(
        (guesses: Array<string>) => {
            setGuesses(guesses);
            setStoredGameState(guesses);
        },
        [setGuesses, setStoredGameState]
    );

    const showToast = useCallback(
        (text: string) => {
            clearTimeout(toastTimeout.current);
            setToastText(text);
            toastTimeout.current = setTimeout(() => {
                setToastText('');
            }, 2000);
            return () => clearTimeout(toastTimeout.current);
        },
        [setToastText, toastTimeout]
    );

    const shakeCurrentGuess = useCallback(() => {
        clearTimeout(shakeTimeout.current)
        setShakeCurrentRow(true);
        shakeTimeout.current = setTimeout(() => {
            setShakeCurrentRow(false);
        }, 1000)
        return () => clearTimeout(shakeTimeout.current);
    }, [shakeTimeout])

    const submitWord = useCallback(() => {
        if (currentGuess.length !== GAME_WORD_LENGTH) {
            showToast("Not enough letters");
            shakeCurrentGuess();
            return;
        }
        if (!IsValidWord(currentGuess)) {
            shakeCurrentGuess();
            return;
        }
        setGuessesCallback([...guesses, currentGuess]);
        dispatch({ type: "clear" });

        if (currentGuess === solution) {
            setGameCompletion("won");
            showToast("You truly are the Rune Master!")
            return;
        }
        if (guesses.length + 1 === GAME_ROUNDS) {
            setGameCompletion("lost");
            showToast("Ha! Still just a mere Apprentice!")
            return;
        }
    }, [currentGuess, guesses, dispatch, setGameCompletion]);

    const onKeyPress = useCallback(
        (key: string) => {
            if (gameCompletionState !== "active") {
                return;
            }
            if (key === BACKSPACE) {
                dispatch({ type: "backspace" });
                return;
            }

            if (key === ENTER) {
                submitWord();
                return;
            }
            if (key.length !== 1 || !/[a-z]|[A-Z]/.test(key)) {
                return;
            }
            dispatch({ type: "add", letter: key.toUpperCase() });
        },
        [dispatch, submitWord]
    );

    const onKeyDownEvt = useCallback(
        (evt: KeyboardEvent) => {
            onKeyPress(evt.key);
        },
        [onKeyPress]
    );

    useEffect(() => {
        window.addEventListener("keydown", onKeyDownEvt);
        return () => window.removeEventListener("keydown", onKeyDownEvt);
    }, [onKeyDownEvt]);

    const guessIdxToTileStates = Array.from({ length: GAME_ROUNDS }).map(
        (_, idx) => {
            const isSubmitted = idx < guesses.length;
            return getTileStates(solution, guesses[idx], isSubmitted);
        }
    );

    const letterToLetterState: { [letter: string]: LetterState } = {};
    guessIdxToTileStates.forEach((tileStates, idx) => {
        const guess = guesses[idx];
        if (!guess) {
            return;
        }
        tileStates.forEach((tileState, letterIdx) => {
            const letter = guess[letterIdx];
            if (
                tileState === "correct" ||
                letterToLetterState[letter] === "correct"
            ) {
                letterToLetterState[letter] = "correct";
                return;
            }
            if (
                tileState === "out-of-place" ||
                letterToLetterState[letter] === "out-of-place"
            ) {
                letterToLetterState[letter] = "out-of-place";
                return;
            }
            if (tileState === "incorrect") {
                letterToLetterState[letter] = "incorrect";
            }
        });
    });

    return (
        <div className="w-full h-full flex justify-center ">
            {toastText && (
                <div
                    className="z-10 animate-fade-in absolute font-bold bg-slate-600 p-4 mt-4 rounded-md"
                >
                    {toastText}
                </div>
            )}
            <div className="w-full max-w-lg flex flex-col items-center justify-between py-4 max-h-[625px]">
                <div className="flex flex-col gap-2">
                    {Array.from({ length: GAME_ROUNDS }).map((_, idx) => {
                        const isCurrentGuess = idx === guesses.length;
                        return (
                            <GuessRow
                                key={idx}
                                guess={isCurrentGuess ? currentGuess : guesses[idx]}
                                letterStates={guessIdxToTileStates[idx]}
                                shake={shakeCurrentRow && isCurrentGuess}
                            />
                        );
                    })}
                </div>
                <Keyboard
                    onKeyPress={onKeyPress}
                    letterToLetterState={letterToLetterState}
                />
            </div>
        </div>
    );
};
