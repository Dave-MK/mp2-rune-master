import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />)
        expect(screen.getByText(/rune master/i)).toBeInTheDocument()
    })
})

