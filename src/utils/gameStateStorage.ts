const GAME_STATE_KEY = 'ttwGameState';

type GameState = {
    puzzleDate: string;
    guesses: string[];
};

const getTodayPuzzleDate = (): string => {
    return new Date().toISOString().split('T')[0];
};

/**
 * Retrieves the stored game state from local storage.
 *
 * @returns {string[]} An array of guesses from the stored game state, or an empty array if no valid state is found.
 */
export const getStoredGameState = (): string[] => {
    const gameStateStr = localStorage.getItem(GAME_STATE_KEY);
    if (!gameStateStr) {
        return [];
    }

    const gameState: GameState = JSON.parse(gameStateStr);

    if (gameState.puzzleDate !== getTodayPuzzleDate()) {
        return [];
    }

    // comment out the line below to enable local storage
    return [];
    // return gameState.guesses;
};

export const setStoredGameState = (guesses: string[]): void => {
    const gameState: GameState = {
        puzzleDate: getTodayPuzzleDate(),
        guesses,
    };
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
};
