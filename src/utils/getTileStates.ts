import { GAME_WORD_LENGTH, LetterState } from "../constants";

/**
 * Replaces the character at the specified index in a string with a new character.
 */
export const replaceCharAtIndex = (
    str: string,
    idx: number,
    newChar: string
): string => {
    return str.substring(0, idx) + newChar + str.substring(idx + 1);
};

/**
 * Determines the state of each tile in a word-guessing game based on the user's guess and the solution.
 *
 * @param solution - The correct word to be guessed.
 * @param guess - The user's current guess.
 * @param isSubmitted - Indicates whether the guess has been submitted.
 * @returns An array of `LetterState` representing the state of each tile:
 *   - 'correct' if the letter is in the correct position,
 *   - 'outofplace' if the letter is in the solution but in the wrong position,
 *   - 'incorrect' if the letter is not in the solution,
 *   - 'default' if the guess has not been submitted.
 */
export const getTileStates = (
    solution: string,
    guess: string,
    isSubmitted: boolean
): LetterState[] => {
    // Initialize all tile states to 'default'
    const tileStates: LetterState[] = Array(GAME_WORD_LENGTH).fill('default');

    if (!isSubmitted || !guess) {
        return tileStates;
    }

    // Make a mutable copy of the solution for marking used letters
    let solutionCopy = solution.split('');

    // First pass: mark correct letters
    for (let i = 0; i < GAME_WORD_LENGTH; i++) {
        if (guess[i] === solutionCopy[i]) {
            tileStates[i] = 'correct';
            solutionCopy[i] = ' '; // Mark as used
        }
    }

    // Second pass: mark out-of-place and incorrect letters
    for (let i = 0; i < GAME_WORD_LENGTH; i++) {
        if (tileStates[i] === 'correct') continue;

        const guessChar = guess[i];
        const foundIdx = solutionCopy.indexOf(guessChar);

        if (foundIdx !== -1) {
            tileStates[i] = 'outofplace';
            solutionCopy[foundIdx] = ' '; // Mark as used
        } else {
            tileStates[i] = 'incorrect';
        }
    }

    return tileStates;
};
