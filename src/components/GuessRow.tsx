import classNames from "classnames"
import { GAME_WORD_LENGTH, type LetterState } from "../constants"

type Props = {
    guess: string | undefined
    letterStates: Array<LetterState>
}

export const GuessRow = ({ guess, letterStates }: Props) => {
    // const tileStates = getTileStates(solution, guess, isSubmitted)

    return (
        <div className="flex gap-2">
            {Array.from({ length: GAME_WORD_LENGTH }).map((_, idx) => {
                return (
                    <Tile
                        key={idx}
                        letter={guess ? guess[idx] : ''}
                        state={letterStates[idx]} />
                )
            })}
        </div>
    )
}

type TileProps = {
    letter: string | undefined
    state: LetterState
}

export const Tile = ({ letter, state }: TileProps) => {
    return (
        <div
            className={classNames(
                "border w-14 h-14 flex justify-center items-center text-3xl font-bold",
                {
                    ['border-gray-500 bg-[#292929]']: !letter,
                    ['animate-pop']: letter,
                    ['bg-[#242424]']: state === 'default',
                    ['bg-teal-500']: state === 'correct',
                    ['bg-gray-700']: state === 'incorrect',
                    ['bg-teal-800']: state === 'out-of-place'
                }
            )}
        >
            {letter}
        </div>
    )
}