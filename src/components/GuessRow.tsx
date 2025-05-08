import classNames from "classnames"
import { GAME_WORD_LENGTH, LetterState } from "../constants"
import { useEffect, useState } from "react";

type Props = {
    guess: string | undefined;
    letterStates: Array<LetterState>;
    shake: boolean;
}

export const GuessRow = ({ guess, letterStates, shake }: Props) => {
    // const tileStates = getTileStates(solution, guess, isSubmitted)

    return (
        <div className={classNames("flex gap-2", { ['animate-shake']: shake })}>
            {Array.from({ length: GAME_WORD_LENGTH }).map((_, idx) => {
                return (
                    <Tile
                        key={idx}
                        idx={idx}
                        letter={guess ? guess[idx] : ''}
                        state={letterStates[idx]} 
                    />
                )
            })}
        </div>
    )
}

type TileProps = {
    letter: string;
    state: LetterState;
    idx: number;
}

export const Tile: React.FC<TileProps> = ({ letter, state, idx }) => {
    const [revealColour, setRevealColour] = useState<boolean>(false);
    const animationDelay = idx * 150;

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (state !== 'default') {
            timeout = setTimeout(() => {
                setRevealColour(true);
            }, animationDelay + 300);
        }
        return () => clearTimeout(timeout);
    }, [state])
    return (
        <div
            style={{ animationDelay: state === 'default' ? '0ms' : `${animationDelay}ms`}}
            className={classNames(
                'border w-14 h-14 flex justify-center items-center text-3xl font-bold transition-all duration-200',
                {
                    // Empty tile
                    'border-gray-500 bg-[#292929]': !letter,
                    // Animate pop when letter appears
                    'animate-pop': !!letter && state === 'default',
                    // Animate flip when state changes (e.g., after guess is checked)
                    'animate-flip': state !== 'default' && !!letter,
                    // State backgrounds
                    'bg-[#242424]': state === 'default',
                    'bg-teal-500 text-white': state === 'correct' && revealColour,
                    'bg-gray-700 text-white': state === 'incorrect' && revealColour,
                    'bg-teal-800 text-white': state === 'out-of-place' && revealColour,
                }
            )}
        >
            {letter}
        </div>
    );
};