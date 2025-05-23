// Game configuration constants
export const GAME_WORD_LENGTH = 5;
export const GAME_ROUNDS = 6;

// Keyboard keys
export const ENTER = "Enter";
export const BACKSPACE = "Backspace";

/**
 * Represents the possible states of a letter in a word-based puzzle or game.
 * 
 * - "default": The letter has not been evaluated yet.
 * - "incorrect": The letter is not present in the target word.
 * - "correct": The letter is in the correct position in the target word.
 * - "outofplace": The letter exists in the target word but is in the wrong position.
 */
export type LetterState =
    | "default"
    | "incorrect"
    | "correct"
    | "outofplace";
