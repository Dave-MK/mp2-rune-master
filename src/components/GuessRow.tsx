import classNames from "classnames";
import { GAME_WORD_LENGTH, LetterState } from "../constants";
import { useEffect, useState } from "react";

type Props = {
    guess: string | undefined;
    letterStates: Array<LetterState>;
    shake: boolean;
    'data-testid'?: string; // <-- allow forwarding test id
};

/**
 * GuessRow component renders a row of tiles for the current guess.
 */
export const GuessRow = ({ guess, letterStates, shake, 'data-testid': dataTestId }: Props) => (
    <div
        className={classNames("flex gap-[1px]", { 'animate-shake': shake })}
        role="row"
        aria-rowindex={1}
        data-testid={dataTestId} // <-- apply test id to row container
    >
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
            role="gridcell"
            aria-label={letter ? `Letter ${letter}, ${state}` : "Empty tile"}
            aria-selected={!!letter}
        >
            {letter}
        </div>
    );
};