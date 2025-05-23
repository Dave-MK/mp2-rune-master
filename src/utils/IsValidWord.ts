import allowedWords from "../config/allowed_words";

// Create a Set for efficient lookup of allowed words (case-insensitive)
const allowedWordsSet = new Set(
    allowedWords.map(word => word.toLowerCase())
);

/**
 * Checks if a given word is valid by verifying its presence in the allowed words set.
 *
 * @param word - The word to validate.
 * @returns `true` if the word exists in the allowed words set; otherwise, `false`.
 */
export function isValidWord(word: string): boolean {
    if (!word) return false;
    return allowedWordsSet.has(word.toLowerCase());
}
