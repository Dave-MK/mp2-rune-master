import classNames from "classnames";
import { BACKSPACE, ENTER, LetterState } from "../constants";
import { BsBackspace } from "react-icons/bs";

const ROWS = [
    "QWERTYUIOP".split(""),
    " ASDFGHJKL ".split(""),
    [BACKSPACE, ..."ZXCVBNM".split(""), ENTER],
];

type Props = {
    onKeyPress: (key: string) => void;
    letterToLetterState: { [letter: string]: LetterState };
};

export const Keyboard = ({ onKeyPress, letterToLetterState }: Props) => (
    <div
        className="flex flex-col justify-center m-2 items-center"
        role="group"
        aria-label="On-screen keyboard"
    >
        {ROWS.map((row, rowIdx) => (
            <div
                className="w-[95vw] max-w-[400px] flex gap-[0.5px]"
                key={rowIdx}
                role="row"
            >
                {row.map((letter, keyIdx) => (
                    <Key
                        key={keyIdx}
                        letter={letter}
                        onKeyPress={onKeyPress}
                        letterState={letterToLetterState[letter] ?? "default"}
                    />
                ))}
            </div>
        ))}
    </div>
);

type KeyProps = {
    letter: string;
    onKeyPress: (key: string) => void;
    letterState: LetterState;
};

/**
 * Renders a single key for the on-screen keyboard.
 * Returns a spacer for spaces, otherwise a styled button.
 */
export const Key = ({ letter, onKeyPress, letterState }: KeyProps) => {
    if (letter === " ") {
        return <div className="flex-[0.5]" aria-hidden="true" />;
    }

    const isSpecial = letter === ENTER || letter === BACKSPACE;
    const baseClasses =
        "flex w-10 h-14 justify-center items-center font-bold rounded-md active:bg-amber-100";

    let ariaLabel = letter;
    if (letter === ENTER) ariaLabel = "Enter";
    if (letter === BACKSPACE) ariaLabel = "Backspace";

    return (
        <button
            className={classNames(
                baseClasses,
                {
                    "flex-1": !isSpecial,
                    "flex-[2.15]": isSpecial,
                    "default-enter": isSpecial,
                    "default-keyboard-tile": letterState === "default" && !isSpecial,
                    "correct-tile-text": letterState === "correct",
                    "incorrect-tile-text": letterState === "incorrect",
                    "oop-tile-text": letterState === "outofplace",
                }
            )}
            onClick={() => onKeyPress(letter)}
            role="button"
            aria-label={ariaLabel}
            aria-pressed="false"
            tabIndex={0}
        >
            {letter === BACKSPACE ? (
                <BsBackspace className="default-backspace" />
            ) : (
                letter
            )}
        </button>
    );
};
