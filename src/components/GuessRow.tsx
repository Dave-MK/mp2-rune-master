import classNames from "classnames";
import { GAME_WORD_LENGTH, LetterState } from "../constants";
import { useEffect, useState } from "react";

type Props = {
    guess: string | undefined;
    letterStates: Array<LetterState>;
    shake: boolean;
};

/**
 * GuessRow component renders a row of tiles for the current guess.
 */
export const GuessRow = ({ guess, letterStates, shake }: Props) => (
    <div className={classNames("flex gap-[1px]", { 'animate-shake': shake })}>
        {Array.from({ length: GAME_WORD_LENGTH }).map((_, idx) => (
            <Tile
                key={idx}
                idx={idx}
                letter={guess ? guess[idx] : ''}
                state={letterStates[idx]}
            />
        ))}
    </div>
);

type TileProps = {
    letter: string;
    state: LetterState;
    idx: number;
};

/**
 * Tile component represents a single letter tile in a guessing game row.
 */
export const Tile = ({ letter, state, idx }: TileProps) => {
    const [revealColour, setRevealColour] = useState(false);
    const animationDelay = idx * 150;

    useEffect(() => {
        if (state !== 'default') {
            const timeout = setTimeout(() => setRevealColour(true), animationDelay + 300);
            return () => clearTimeout(timeout);
        }
    }, [state, animationDelay]);

    const tileClass = classNames(
        {
            "default-tile-text": !letter,
            "default-tile-text animate-pop": !!letter && state === 'default',
            "default-tile-text animate-flip": state !== 'default' && !!letter,
            "default-tile-text2": state === 'default',
            "correct-tile-text": state === 'correct' && revealColour,
            "incorrect-tile-text": state === 'incorrect' && revealColour,
            "oop-tile-text": state === 'outofplace' && revealColour,
        },
        'w-8 h-12 xl:w-10 xl:h-14 flex justify-center items-center transition-all duration-200'
    );

    return (
        <div
            style={{ animationDelay: state === 'default' ? '0ms' : `${animationDelay}ms` }}
            className={tileClass}
        >
            {letter}
        </div>
    );
};
