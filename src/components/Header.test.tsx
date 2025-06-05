import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Header } from "./Header";
import '@testing-library/jest-dom'

describe("Header", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("renders title, logo, and buttons", () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /rune master/i })).toBeInTheDocument();
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByLabelText(/start new game/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open info modal/i)).toBeInTheDocument();
});

    it("reloads the page when new game button is clicked", () => {
        const reloadMock = vi.fn();
        vi.stubGlobal("window", { location: { reload: reloadMock } });
        render(<Header />);
        fireEvent.click(screen.getByLabelText(/start new game/i));
        expect(reloadMock).toHaveBeenCalled();
    });

    it("shows and hides the modal on info button and close", () => {
        render(<Header />);
        // Modal should not be visible initially
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

        // Open modal
        fireEvent.click(screen.getByLabelText(/open info modal/i));
        expect(screen.getByRole("dialog")).toBeInTheDocument();

        // Close modal
        fireEvent.click(screen.getByRole("button", { name: /close/i }));
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});
