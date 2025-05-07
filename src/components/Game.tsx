import { useCallback, useEffect, useState } from "react";
import { BACKSPACE, ENTER, GAME_ROUNDS, GAME_WORD_LENGTH, LetterState } from "../constants";
import { GuessRow } from "./GuessRow";
import { Keyboard } from "./Keyboard";
import { useCurrentGuessReducer } from "../hooks/useCurrentGuessReducer";
import { IsValidWord } from "../utils/IsValidWord";
import { getTileStates } from "../utils/getTileStates";
import { getStoredGameState, setStoredGameState } from "../utils/gameStateStorage";

type Props = {
    solution: string;
};

export const Game = ({ solution }: Props) => {
    const [currentGuess, dispatch] = useCurrentGuessReducer();
    const [guesses, setGuesses] = useState<Array<string>>(getStoredGameState());
    const [gameCompletionState, setGameCompletion] = useState<
        'active' | 'won' | 'lost'
    >('active');

    const setGuessesCallback = (guesses: Array<string>) => {
        setGuesses(guesses);
        setStoredGameState(guesses);
    }

    const submitWord = useCallback(() => {
        if (currentGuess.length !== GAME_WORD_LENGTH) {
            return;
        }
        if (!IsValidWord(currentGuess)) {
            return;
        }
        setGuessesCallback([...guesses, currentGuess]);
        if (currentGuess === solution) {
            setGameCompletion('won');
            return;
        }
        if (guesses.length + 1 === GAME_ROUNDS) {
            setGameCompletion('lost');
            return;
        }

        dispatch({ type: "clear" });
    }, [currentGuess, guesses, dispatch, setGameCompletion])

    const onKeyPress = useCallback(
        (key: string) => {
            console.log(key);
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

    const guessIdxToTileStates = Array.from({ length: GAME_ROUNDS }).map((_, idx) => {
        const isSubmitted = idx < guesses.length;
        return getTileStates(solution, guesses[idx], isSubmitted);
    })

    const letterToLetterState: { [letter: string]: LetterState} = {

    }
    guessIdxToTileStates.forEach((tileStates, idx) => {
        const guess = guesses[idx];
        if (!guess) {
            return;
        }
        tileStates.forEach((tileState, letterIdx) => {
            const letter = guess[letterIdx];
            if (tileState === 'correct' || letterToLetterState[letter] === 'correct') {
                letterToLetterState[letter] = 'correct';
                return;
            }
            if (tileState === 'out-of-place' || letterToLetterState[letter] === 'out-of-place') {
                letterToLetterState[letter] = 'out-of-place';
                return;
            }
            if (tileState === 'incorrect') {
                letterToLetterState[letter] = 'incorrect';
            }
        })
    })

    return (
        <div className="w-full h-full flex justify-center ">
            <div className="w-full max-w-lg flex flex-col items-center justify-between py-4 max-h-[625px]">
                <h1>{gameCompletionState}</h1>
                <div className="flex flex-col gap-2">
                    {Array.from({ length: GAME_ROUNDS }).map((_, idx) => {
                        return (
                            <GuessRow
                                key={idx}
                                guess={idx === guesses.length ? currentGuess : guesses[idx]}
                                letterStates={guessIdxToTileStates[idx]}
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
