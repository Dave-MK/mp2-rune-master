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
        <div className={classNames("flex gap-1", { ['animate-shake']: shake })}>
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
                {
                    // Empty tile
                    ["default-tile-text"]: !letter,
                    // Animate pop when letter appears
                    ["default-tile-text animate-pop"]: !!letter && state === 'default',
                    // Animate flip when state changes (e.g., after guess is checked)
                    ["default-tile-text animate-flip"]: state !== 'default' && !!letter,
                    // State backgrounds
                    ["default-tile-text2"]: state === 'default',
                    ["bg-[url(/src/assets/images/correct.png)] bg-center bg-contain bg-no-repeat bg-transparent correct-tile-text"]: state === 'correct' && revealColour,
                    ["bg-[url(/src/assets/images/wrong.png)] bg-center bg-contain bg-no-repeat bg-transparent incorrect-tile-text"]: state === 'incorrect' && revealColour,
                    ["bg-[url(/src/assets/images/oop.png)] bg-center bg-contain bg-no-repeat bg-transparent oop-tile-text"]: state === 'outofplace' && revealColour,
                },
                'w-10 h-14 flex justify-center items-center text-4xl font-bold transition-all duration-200'
            )}
        >
            {letter}
        </div>
    );
};