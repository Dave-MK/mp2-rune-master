import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Keyboard, Key } from "./Keyboard";
import { ENTER, BACKSPACE, LetterState } from "../constants";

// Mock react-icons
vi.mock("react-icons/bs", () => ({
    BsBackspace: () => <span data-testid="backspace-icon" />,
}));

describe("Keyboard component", () => {
    const mockOnKeyPress = vi.fn();
    const letterToLetterState: Record<string, LetterState> = {
        A: "correct",
        B: "incorrect",
        C: "outofplace",
        D: "default",
        [ENTER]: "default",
        [BACKSPACE]: "default",
    };

    beforeEach(() => {
        mockOnKeyPress.mockClear();
    });

    it("renders all rows and keys", () => {
        render(<Keyboard onKeyPress={mockOnKeyPress} letterToLetterState={{}} />);
        // QWERTYUIOP
        "QWERTYUIOP".split("").forEach((letter) => {
            expect(screen.getByText(letter)).toBeInTheDocument();
        });
        // ASDFGHJKL (with spaces as spacers)
        "ASDFGHJKL".split("").forEach((letter) => {
            expect(screen.getByText(letter)).toBeInTheDocument();
        });
        // ZXCVBNM, ENTER, BACKSPACE
        "ZXCVBNM".split("").forEach((letter) => {
            expect(screen.getByText(letter)).toBeInTheDocument();
        });
        expect(screen.getByText(ENTER)).toBeInTheDocument();
        expect(screen.getByTestId("backspace-icon")).toBeInTheDocument();
    });

    it("calls onKeyPress when a key is clicked", () => {
        render(<Keyboard onKeyPress={mockOnKeyPress} letterToLetterState={{}} />);
        fireEvent.click(screen.getByText("A"));
        expect(mockOnKeyPress).toHaveBeenCalledWith("A");
    });

    it("calls onKeyPress when ENTER is clicked", () => {
        render(<Keyboard onKeyPress={mockOnKeyPress} letterToLetterState={{}} />);
        fireEvent.click(screen.getByText(ENTER));
        expect(mockOnKeyPress).toHaveBeenCalledWith(ENTER);
    });

    it("calls onKeyPress when BACKSPACE is clicked", () => {
        render(<Keyboard onKeyPress={mockOnKeyPress} letterToLetterState={{}} />);
        fireEvent.click(screen.getByTestId("backspace-icon").closest("button")!);
        expect(mockOnKeyPress).toHaveBeenCalledWith(BACKSPACE);
    });

    it("applies correct classes based on letter state", () => {
        render(<Keyboard onKeyPress={mockOnKeyPress} letterToLetterState={letterToLetterState} />);
        const correctKey = screen.getByText("A");
        const incorrectKey = screen.getByText("B");
        const outofplaceKey = screen.getByText("C");
        const defaultKey = screen.getByText("D");

        expect(correctKey.className).toMatch(/correct-tile-text/);
        expect(incorrectKey.className).toMatch(/incorrect-tile-text/);
        expect(outofplaceKey.className).toMatch(/oop-tile-text/);
        expect(defaultKey.className).toMatch(/default-keyboard-tile/);
    });

    it("renders a spacer for space characters", () => {
        const { container } = render(
            <Key letter=" " onKeyPress={mockOnKeyPress} letterState="default" />
        );
        expect(container.firstChild).toHaveClass("flex-[0.5]");
    });

    it("renders backspace icon for BACKSPACE key", () => {
        render(
            <Key letter={BACKSPACE} onKeyPress={mockOnKeyPress} letterState="default" />
        );
        expect(screen.getByTestId("backspace-icon")).toBeInTheDocument();
    });
});