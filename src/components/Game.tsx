import { useCallback, useEffect, useRef, useState } from "react";
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
    const [toastText, setToastText] = useState<string>("");
    const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [shakeCurrentRow, setShakeCurrentRow] = useState<boolean>(false);
    const shakeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const setGuessesCallback = useCallback(
        (guesses: Array<string>) => {
            setGuesses(guesses);
            setStoredGameState(guesses);
        },
        [setGuesses, setStoredGameState]
    );

    const showToast = useCallback((text: string) => {
        // Clear any existing timeout
        if (toastTimeout.current) {
            clearTimeout(toastTimeout.current);
        }

        setToastText(text);

        toastTimeout.current = setTimeout(() => {
            setToastText('');
        }, 2000);
    }, [setToastText, toastTimeout]);

    const shakeCurrentGuess = useCallback(() => {
        // Clear any existing timeout
        if (shakeTimeout.current) {
            clearTimeout(shakeTimeout.current);
        }

        setShakeCurrentRow(true);

        shakeTimeout.current = setTimeout(() => {
            setShakeCurrentRow(false);
        }, 1000);
    }, [shakeTimeout]);

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
            setTimeout(() => {
                showToast("You truly are the Rune Master!");
            }, 1500)
            return;
        }
        if (guesses.length + 1 === GAME_ROUNDS) {
            setGameCompletion("lost");
            setTimeout(() => {
                showToast(
                    `Ha, Still just a mere Apprentice!
                    The word was ${solution}!`);
            }, 5000)
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
        <div className="w-full h-screen flex justify-center">
            {toastText && (
                <div
                    className="z-10 max-w-xs flex justify-center animate-fade-in absolute font-bold bg-slate-600 p-4 mt-4 rounded-md"
                >
                    <span className="text-xl font-bold text-center">{toastText}</span>
                </div>
            )}
            <div className="w-full max-w-lg flex flex-col items-center justify-around py-4 max-h-[625px]">
                <div className="flex flex-col gap-1 mb-[5px]">
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
