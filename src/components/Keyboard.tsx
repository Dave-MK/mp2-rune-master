import classNames from "classnames";
import { BACKSPACE, ENTER, LetterState } from "../constants";

const ROWS = [
    "QWERTYUIOP".split(""),
    " ASDFGHJKL ".split(""),
    [ENTER, ..."ZXCVBNM".split(""), BACKSPACE],
];

type Props = {
    onKeyPress: (key: string) => void;
    letterToLetterState:  { [letter: string]: LetterState };
};

export const Keyboard = ({ onKeyPress, letterToLetterState }: Props) => {
    return (
        <div className="w-98 flex flex-col gap-1">
            {ROWS.map((letters, idx) => {
                return (
                    <div className="w-full flex gap-1" key={idx}>
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
                    ["default-tile-text"]: letter === ENTER || letter === BACKSPACE,
                    ["flex-1"]: letter !== ENTER && letter !== BACKSPACE,
                    ["flex-[2.15]"]: letter === ENTER || letter === BACKSPACE,
                    ["default-tile-text2"]: letterState === 'default' && letter !== ENTER && letter !== BACKSPACE,
                    ["bg-[url(./assets/images/correct.png)] bg-center bg-contain bg-no-repeat bg-transparent correct-tile-text"]: letterState === 'correct',
                    ["bg-[url(./assets/images/wrong.png)] bg-center bg-contain bg-no-repeat bg-transparent incorrect-tile-text"]: letterState === 'incorrect',
                    ["bg-[url(./assets/images/oop.png)] bg-center bg-contain bg-no-repeat bg-transparent oop-tile-text"]: letterState === 'outofplace'
                },
                "flex justify-center items-center font-bold text-2xl rounded-md h-14 active:bg-amber-100"
            )}
            onClick={() => onKeyPress(letter)}
        >
            {letter === BACKSPACE ? (
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    data-testid="icon-backspace"
                    fill="rgb(180, 155, 111)"
                >
                    <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                </svg>
            ) : (
                letter
            )}
        </button>
    );
};
