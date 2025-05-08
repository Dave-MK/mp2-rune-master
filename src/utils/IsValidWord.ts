import allowedWords from "../config/allowed_words";

const allowedWordsSet = new Set(allowedWords);

export const IsValidWord = (word: string) => {
    return allowedWordsSet.has(word.toLowerCase());
};
