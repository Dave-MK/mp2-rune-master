import { GAME_WORD_LENGTH } from "../constants"

export const replaceCharAtIndex = (
    str: string,
    idx: number,
    newChar: string
) => {
    return str.substring(0, idx) + newChar + str.substring(idx + 1, str.length);
};

export const getTileStates = (
    solution: string,
    guess: string,
    isSubmitted: boolean
) => {
    const tileStates: Array<TileState> = Array.from<TileState>({
        length: GAME_WORD_LENGTH
    }).fill('default')

    if (!isSubmitted || !guess) {
        return tileStates
    }

    for (let i = 0; i < solution.length; i++) {
        if (guess[i] === solution[i]) {
            tileStates[i] = 'correct'
            solution = replaceCharAtIndex(solution, i, ' ')
        }
    }

    for (let i = 0; i < solution.length; i++) {
        if (tileStates[i] === 'correct') {
            continue;
        }
        if (solution.includes(guess[i])) {
            solution = replaceCharAtIndex(solution, solution.indexOf(guess[i]), ' ')
            tileStates[i] = 'out-of-place'
        } else {
            tileStates[i] = 'incorrect'
        }
    }

    solution.split('').forEach((letter, idx) => {
        if (guess[idx] === letter) {
            tileStates[idx] === 'correct'
        }
    }
    )

    return tileStates;
}
