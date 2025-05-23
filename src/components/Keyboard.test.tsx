import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Keyboard, Key } from "./Keyboard";
import { BACKSPACE, ENTER, LetterState } from "../constants";
import '@testing-library/jest-dom';

// Helper to create a mapping for letter states

describe("Keyboard component", () => {
    it("renders all rows and keys", () => {
        render(
            <Keyboard
                onKeyPress={() => {}}
                letterToLetterState={{}}
            />
        );
        // Check for a few representative keys
        expect(screen.getByText("Q")).toBeInTheDocument();
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("Z")).toBeInTheDocument();
        expect(screen.getByText(ENTER)).toBeInTheDocument();
        // Backspace is rendered as an icon, not text
        expect(screen.getByRole("button", { name: "" })).toBeInTheDocument();
    });

    it("calls onKeyPress with correct letter when a key is clicked", () => {
        const onKeyPress = vi.fn();
        render(
            <Keyboard
                onKeyPress={onKeyPress}
                letterToLetterState={{}}
            />
        );
        fireEvent.click(screen.getByText("Q"));
        expect(onKeyPress).toHaveBeenCalledWith("Q");
        fireEvent.click(screen.getByText(ENTER));
        expect(onKeyPress).toHaveBeenCalledWith(ENTER);
    });

    it("applies correct class for letter states", () => {
        const letterToLetterState = {
            Q: "correct",
            W: "incorrect",
            E: "outofplace",
            R: "default",
        } as Record<string, LetterState>;
        render(
            <Keyboard
                onKeyPress={() => {}}
                letterToLetterState={letterToLetterState}
            />
        );
        expect(screen.getByText("Q").className).toMatch(/correct-tile-text/);
        expect(screen.getByText("W").className).toMatch(/incorrect-tile-text/);
        expect(screen.getByText("E").className).toMatch(/oop-tile-text/);
        expect(screen.getByText("R").className).toMatch(/default-keyboard-tile/);
    });

    it("renders a spacer for space characters", () => {
        // The second row has spaces at start and end
        render(
            <Keyboard
                onKeyPress={() => {}}
                letterToLetterState={{}}
            />
        );
        // There should be at least one element with flex-[0.5] (the spacer)
        expect(document.querySelectorAll(".flex-\\[0\\.5\\]").length).toBeGreaterThan(0);
    });
});

describe("Key component", () => {
    it("renders a button for normal keys", () => {
        render(
            <Key letter="A" onKeyPress={() => {}} letterState="default" />
        );
        expect(screen.getByText("A")).toBeInTheDocument();
    });

    it("renders a button with special styling for ENTER and BACKSPACE", () => {
        render(
            <Key letter={ENTER} onKeyPress={() => {}} letterState="default" />
        );
        expect(screen.getByText(ENTER)).toBeInTheDocument();

        render(
            <Key letter={BACKSPACE} onKeyPress={() => {}} letterState="default" />
        );
        // Backspace icon is rendered, not text
        expect(document.querySelector(".default-backspace")).toBeInTheDocument();
    });

    it("renders a spacer for space", () => {
        const { container } = render(
            <Key letter=" " onKeyPress={() => {}} letterState="default" />
        );
        expect(container.firstChild).toHaveClass("flex-[0.5]");
    });

    it("calls onKeyPress when clicked", () => {
        const onKeyPress = vi.fn();
        render(
            <Key letter="B" onKeyPress={onKeyPress} letterState="default" />
        );
        fireEvent.click(screen.getByText("B"));
        expect(onKeyPress).toHaveBeenCalledWith("B");
    });
});