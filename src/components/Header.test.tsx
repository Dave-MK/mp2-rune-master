import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Header } from "./Header";
import '@testing-library/jest-dom'

// Mock Modal to avoid rendering its internals
vi.mock("./Modal", () => ({
    Modal: ({ showModal, onClose }: { showModal: boolean; onClose: () => void }) =>
        showModal ? (
            <div data-testid="modal">
                <button onClick={onClose}>Close</button>
            </div>
        ) : null,
}));

describe("Header", () => {
    beforeEach(() => {
        // Reset mocks before each test
        vi.restoreAllMocks();
    });

    it("renders the title", () => {
        render(<Header />);
        expect(screen.getByText("Rune Master")).toBeInTheDocument();
    });

    it("renders the logo icon", () => {
        render(<Header />);
        expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
    });

    it("renders the new game and info modal buttons", () => {
        render(<Header />);
        expect(screen.getByLabelText("Start New Game")).toBeInTheDocument();
        expect(screen.getByLabelText("Open Info Modal")).toBeInTheDocument();
    });

    it("reloads the page when new game button is clicked", () => {
        const reloadMock = vi.fn();
        vi.stubGlobal("window", { location: { reload: reloadMock } });
        render(<Header />);
        fireEvent.click(screen.getByLabelText("Start New Game"));
        expect(reloadMock).toHaveBeenCalled();
    });

    it("shows the modal when info button is clicked", () => {
        render(<Header />);
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
        fireEvent.click(screen.getByLabelText("Open Info Modal"));
        expect(screen.getByTestId("modal")).toBeInTheDocument();
    });

    it("closes the modal when close button is clicked", () => {
        render(<Header />);
        fireEvent.click(screen.getByLabelText("Open Info Modal"));
        expect(screen.getByTestId("modal")).toBeInTheDocument();
        fireEvent.click(screen.getByText("Close"));
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    });
});

// We recommend installing an extension to run vitest tests.