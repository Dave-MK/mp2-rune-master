import { useReducer } from 'react'
import { GAME_WORD_LENGTH } from '../constants'

type AddLetterAction = {
    type: 'add'
    letter: string
}

type BackspaceAction = {
    type: 'backspace'
}

type ClearAction = {
    type: 'clear'
}

type Action = AddLetterAction | BackspaceAction | ClearAction

const addLetter = (state: string, letter: string): string => {
    if (state.length >= GAME_WORD_LENGTH) return state
    return state + letter
}

const backspace = (state: string): string => {
    if (state.length === 0) return state
    return state.slice(0, -1)
}

const clear = (): string => ''

/**
 * Reducer function to manage the state of the current guess in a word game.
 */
const reducer = (state: string, action: Action): string => {
    switch (action.type) {
        case 'add':
            return addLetter(state, action.letter)
        case 'backspace':
            return backspace(state)
        case 'clear':
            return clear()
        default:
            return state
    }
}

export const useCurrentGuessReducer = () => {
    return useReducer(reducer, '')
}
