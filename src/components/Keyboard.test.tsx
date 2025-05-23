import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Keyboard, Key } from "./Keyboard";
import { BACKSPACE, ENTER } from "../constants";
import '@testing-library/jest-dom';

describe("Keyboard interactions", () => {
    it("calls onKeyPress with correct letter when a key is clicked", () => {
        const onKeyPress = vi.fn();
        render(<Keyboard onKeyPress={onKeyPress} letterToLetterState={{}} />);
        fireEvent.click(screen.getByText("Q"));
        expect(onKeyPress).toHaveBeenCalledWith("Q");
        fireEvent.click(screen.getByText(ENTER));
        expect(onKeyPress).toHaveBeenCalledWith(ENTER);
    });

    it("calls onKeyPress when Key is clicked", () => {
        const onKeyPress = vi.fn();
        render(<Key letter="B" onKeyPress={onKeyPress} letterState="default" />);
        fireEvent.click(screen.getByText("B"));
        expect(onKeyPress).toHaveBeenCalledWith("B");
    });

    it("calls onKeyPress for BACKSPACE", () => {
        const onKeyPress = vi.fn();
        render(<Key letter={BACKSPACE} onKeyPress={onKeyPress} letterState="default" />);
        fireEvent.click(screen.getByRole("button", { name: "Backspace" }));
        expect(onKeyPress).toHaveBeenCalledWith(BACKSPACE);
    });
});
