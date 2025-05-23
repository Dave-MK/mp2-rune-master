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
import { isValidWord } from "../utils/IsValidWord";
import { getTileStates } from "../utils/getTileStates";
import {
    getStoredGameState,
    setStoredGameState,
} from "../utils/gameStateStorage";

type Props = {
    solution: string;
};

type GameCompletionState = "active" | "won" | "lost";

/**
 * The main game component for the Rune Master word game.
 */
export const Game = ({ solution }: Props) => {
    // State
    const [currentGuess, dispatch] = useCurrentGuessReducer();
    const [guesses, setGuesses] = useState<string[]>(getStoredGameState());
    const [gameCompletionState, setGameCompletion] = useState<GameCompletionState>("active");
    const [toastText, setToastText] = useState<string>("");
    const [shakeCurrentRow, setShakeCurrentRow] = useState<boolean>(false);

    // Refs for timeouts
    const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const shakeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    // --- Utility Callbacks ---

    // Update guesses and persist to storage
    const setGuessesCallback = useCallback(
        (newGuesses: string[]) => {
            setGuesses(newGuesses);
            setStoredGameState(newGuesses);
        },
        []
    );

    // Show toast notification for a limited time
    const showToast = useCallback((text: string) => {
        if (toastTimeout.current) clearTimeout(toastTimeout.current);
        setToastText(text);
        toastTimeout.current = setTimeout(() => setToastText(""), 5000);
    }, []);

    // Trigger shake animation for current guess row
    const shakeCurrentGuess = useCallback(() => {
        if (shakeTimeout.current) clearTimeout(shakeTimeout.current);
        setShakeCurrentRow(true);
        shakeTimeout.current = setTimeout(() => setShakeCurrentRow(false), 1000);
    }, []);

    // --- Game Logic ---

    // Handle guess submission
    const submitWord = useCallback(() => {
        if (currentGuess.length !== GAME_WORD_LENGTH) {
            showToast("Not enough letters");
            shakeCurrentGuess();
            return;
        }
        if (!isValidWord(currentGuess)) {
            shakeCurrentGuess();
            return;
        }
        setGuessesCallback([...guesses, currentGuess]);
        dispatch({ type: "clear" });

        if (currentGuess === solution) {
            setGameCompletion("won");
            setTimeout(() => showToast("You truly are the Rune Master!"), 1500);
            return;
        }
        if (guesses.length + 1 === GAME_ROUNDS) {
            setGameCompletion("lost");
            setTimeout(() => {
                showToast(`You disappoint the Gods.\n${solution} was the word!`);
            }, 1500);
        }
    }, [currentGuess, guesses, dispatch, solution, showToast, shakeCurrentGuess, setGuessesCallback]);

    // Handle key press events
    const onKeyPress = useCallback(
        (key: string) => {
            if (gameCompletionState !== "active") return;

            if (key === BACKSPACE) {
                dispatch({ type: "backspace" });
                return;
            }
            if (key === ENTER) {
                submitWord();
                return;
            }
            if (key.length === 1 && /[a-zA-Z]/.test(key)) {
                dispatch({ type: "add", letter: key.toUpperCase() });
            }
        },
        [gameCompletionState, dispatch, submitWord]
    );

    // Listen for physical keyboard events
    useEffect(() => {
        const onKeyDownEvt = (evt: KeyboardEvent) => onKeyPress(evt.key);
        window.addEventListener("keydown", onKeyDownEvt);
        return () => window.removeEventListener("keydown", onKeyDownEvt);
    }, [onKeyPress]);

    // --- Tile and Keyboard State ---

    // Compute tile states for each guess row
    const guessIdxToTileStates = Array.from({ length: GAME_ROUNDS }, (_, idx) => {
        const isSubmitted = idx < guesses.length;
        return getTileStates(solution, guesses[idx], isSubmitted);
    });

    // Compute keyboard letter states
    const letterToLetterState: Record<string, LetterState> = {};
    guessIdxToTileStates.forEach((tileStates, idx) => {
        const guess = guesses[idx];
        if (!guess) return;
        tileStates.forEach((tileState, letterIdx) => {
            const letter = guess[letterIdx];
            if (tileState === "correct" || letterToLetterState[letter] === "correct") {
                letterToLetterState[letter] = "correct";
            } else if (tileState === "outofplace" || letterToLetterState[letter] === "outofplace") {
                letterToLetterState[letter] = "outofplace";
            } else if (tileState === "incorrect") {
                letterToLetterState[letter] = "incorrect";
            }
        });
    });

    // --- Render ---

    return (
        <div className="flex justify-around items-around">
            {toastText && (
                <div className="bg-parchment z-10 w-xs md:w-lg flex flex-col justify-center items-center animate-fade-in absolute p-2 mt-20">
                    <span className="w-60 md:w-75 text-lg md:text-2xl font-bold text-center">
                        {toastText}
                    </span>
                </div>
            )}
            <div className="flex flex-col items-center justify-start mt-2">
                <div className="flex flex-col m-2">
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
