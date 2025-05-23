import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Game } from './Game'
import '@testing-library/jest-dom'

describe('Game Component', () => {
    it('renders the game title or instructions', () => {
        render(<Game solution={''} />)
        expect(screen.getByText(/start/i)).toBeInTheDocument()
    })

    it('renders the game with a solution', () => {
        render(<Game solution={'test'} />)
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })

    it('renders the game with an empty solution', () => {
        render(<Game solution={''} />)
        expect(screen.getByText(/start/i)).toBeInTheDocument()
    })

    it('causes the row to shake when solution is empty', () => {
        render(<Game solution={''} />)
        const shakingRow = screen.getByTestId('row-0') // Update test id as per your implementation
        expect(shakingRow).toHaveClass('animate-shake')
    })

    it('renders the game with an invalid solution', () => {
        render(<Game solution={'invalid'} />)
        expect(screen.getByText(/invalid/i)).toBeInTheDocument()
    })

    it('renders the game with a valid solution', () => {
        render(<Game solution={'valid'} />)
        expect(screen.getByText(/valid/i)).toBeInTheDocument()
    })

    it('does not render special characters in the solution', () => {
        render(<Game solution={'!@#$%^&*()'} />)
        expect(screen.queryByText(/!@#\$%\^&\*\(\)/i)).not.toBeInTheDocument()
    })
})
