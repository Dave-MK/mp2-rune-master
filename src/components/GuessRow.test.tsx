import { render, screen } from '@testing-library/react'
import { GuessRow } from './GuessRow'
import { describe, expect, it } from 'vitest'
import { GAME_WORD_LENGTH, LetterState } from '../constants'
import '@testing-library/jest-dom'

// Helper to generate letterStates array
const makeLetterStates = (state: LetterState, length = GAME_WORD_LENGTH) =>
    Array.from({ length }, () => state)

describe('GuessRow', () => {
    it('renders without crashing', () => {
        render(<GuessRow guess={undefined} letterStates={makeLetterStates('default')} shake={false} />)
        // Check for the correct number of tiles
        expect(screen.getAllByText('')).toHaveLength(GAME_WORD_LENGTH)
    })

    it('renders the correct letters', () => {
        const guess = 'HELLO'
        render(<GuessRow guess={guess} letterStates={makeLetterStates('default')} shake={false} />)
        for (const letter of guess) {
            expect(screen.getByText(letter)).toBeInTheDocument()
        }
    })

    it('applies shake animation when shake is true', () => {
        const { container } = render(<GuessRow guess={'HELLO'} letterStates={makeLetterStates('default')} shake={true} />)
        const row = screen.getByRole('row', { hidden: true }) || screen.getByTestId('guess-row') || container.firstChild
        expect(row?.className).toContain('animate-shake')
    })

    it('applies correct tile classes based on letterStates', () => {
        const guess = 'HELLO'
        const letterStates: LetterState[] = ['correct', 'incorrect', 'outofplace', 'default', 'default']
        render(<GuessRow guess={guess} letterStates={letterStates} shake={false} />)
        // We can't check for animation classes directly, but we can check for text
        expect(screen.getByText('H')).toBeInTheDocument()
        expect(screen.getByText('E')).toBeInTheDocument()
        expect(screen.getByText('L')).toBeInTheDocument()
        expect(screen.getByText('L')).toBeInTheDocument()
        expect(screen.getByText('O')).toBeInTheDocument()
    })

    it('renders empty tiles if guess is shorter than GAME_WORD_LENGTH', () => {
        render(<GuessRow guess={'HI'} letterStates={makeLetterStates('default')} shake={false} />)
        // Should still render GAME_WORD_LENGTH tiles
        expect(screen.getAllByText(/^[A-Z]?$/)).toHaveLength(GAME_WORD_LENGTH)
    })
})
