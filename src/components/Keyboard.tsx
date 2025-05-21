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
    letterToLetterState:  { [letter: string]: LetterState };
};

export const Keyboard = ({ onKeyPress, letterToLetterState }: Props) => {
    return (
        <div className="flex flex-col justify-center m-1 items-center">
            {ROWS.map((letters, idx) => {
                return (
                    <div className="w-[98vw] max-w-[400px] flex gap-[0.5px]" key={idx}>
                        {letters.map((letter, idx) => {
                            return (
                                <Key 
                                    key={idx} 
                                    letter={letter} 
                                    onKeyPress={onKeyPress}
                                    letterState={letterToLetterState[letter] ?? 'default'} 
                                />
                            )
                        })}
                    </div>
                );
            })}
        </div>
    );
};

type KeyProps = {
    letter: string;
    onKeyPress: (key: string) => void;
    letterState: LetterState;
};

export const Key = ({ letter, onKeyPress, letterState }: KeyProps) => {
    if (letter === " ") {
        return <div className="flex-[0.5]" />;
    }

    return (
        <button
            className={classNames(
                {
                    ["default-enter"]: letter === ENTER || letter === BACKSPACE,
                    ["flex-1"]: letter !== ENTER && letter !== BACKSPACE,
                    ["flex-[2.15]"]: letter === ENTER || letter === BACKSPACE,
                    ["default-keyboard-tile"]: letterState === 'default' && letter !== ENTER && letter !== BACKSPACE,
                    ["correct-tile-text"]: letterState === 'correct',
                    ["incorrect-tile-text"]: letterState === 'incorrect',
                    ["oop-tile-text"]: letterState === 'outofplace'
                },
                "flex w-10 h-14 justify-center items-center font-bold rounded-md active:bg-amber-100"
            )}
            onClick={() => onKeyPress(letter)}
        >
            {letter === BACKSPACE ? (
                <BsBackspace className="default-backspace" />
            ) : (
                letter
            )}
        </button>
    );
};
