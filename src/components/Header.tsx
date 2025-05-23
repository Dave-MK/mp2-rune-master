import { useState } from "react";
import { GiFireGem, GiScrollUnfurled } from "react-icons/gi";
import { MdFiberNew } from "react-icons/md";
import { Modal } from "./Modal";

type Props = {};

/**
 * Header component for the Rune Master application.
 *
 * Renders the top navigation bar with the game title, icons, and action buttons.
 * Includes a button to start a new game (reloads the page) and a button to open a modal.
 *
 * @param _props - Component props (currently unused).
 * @returns The header JSX element with navigation and modal controls.
 */
export const Header = (_props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleNewGame = () => {
        window.location.reload();
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <header
            className="flex justify-between items-center w-[100vw] h-12 border-b border-teal-600 p-2 bg-teal-900/60"
            role="banner"
            aria-label="Main Header"
            >
            {/* Left: Logo */}
            <div className="flex items-center" role="presentation">
                <span
                className="text-yellow-500 text-3xl md:text-4xl text-shadow-scroll"
                aria-hidden="true"
                >
                <GiFireGem />
                </span>
                <div className="w-12 md:w-14" aria-hidden="true" />
            </div>

            {/* Center: Title */}
            <h1
                className="relative text-2xl md:text-4xl bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600 inline-block text-transparent bg-clip-text"
                id="app-title"
            >
                Rune Master
            </h1>

            {/* Right: Action Buttons */}
            <div className="flex items-center" role="group" aria-label="Header Actions">
                <button
                className="text-yellow-500 text-3xl md:text-4xl text-shadow-scroll px-2"
                onClick={handleNewGame}
                aria-label="Start New Game"
                aria-controls="app-title"
                >
                <MdFiberNew aria-hidden="true" />
                </button>
                <button
                className="text-yellow-500 text-2xl md:text-3xl text-shadow-scroll"
                onClick={handleOpenModal}
                aria-label="Open Info Modal"
                aria-haspopup="dialog"
                aria-expanded={showModal}
                aria-controls="info-modal"
                >
                <GiScrollUnfurled aria-hidden="true" />
                </button>
            </div>
            </header>

            {/* Modal */}
            <Modal showModal={showModal} onClose={handleCloseModal} />
        </>
    );
};