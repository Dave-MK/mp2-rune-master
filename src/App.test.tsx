import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />)
        expect(screen.getAllByText(/rune master/i).length).toBeGreaterThan(0);
    })
})

