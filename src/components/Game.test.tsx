import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Game } from './Game'
import '@testing-library/jest-dom'

describe('Game Component', () => {
    it('shakes the row when Enter is pressed with an empty guess', () => {
        render(<Game solution="valid" />)
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' })
        const row = screen.getByTestId('row-0')
        expect(row).toHaveClass('animate-shake')
    })

    it('shakes the row when on-screen Enter is clicked with an empty guess', () => {
        render(<Game solution="valid" />)
        const row = screen.getByTestId('row-0')
        const enterKey = screen.getByRole('button', { name: /enter/i })
        fireEvent.click(enterKey)
        expect(row).toHaveClass('animate-shake')
    })

    it('does not shake the row when a valid guess is entered and Enter is pressed', () => {
        render(<Game solution="VALID" />)
        const row = screen.getByTestId('row-0')
        for (const key of 'VALID') {
            fireEvent.keyDown(document, { key, code: `Key${key}` })
        }
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' })
        expect(row).not.toHaveClass('animate-shake')
    })
})