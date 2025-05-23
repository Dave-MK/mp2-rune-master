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
            <header className="flex justify-between items-center w-[100vw] h-12 border-b border-teal-600 p-2 bg-teal-900/60">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <span className="text-yellow-500 text-3xl md:text-4xl text-shadow-scroll">
                        <GiFireGem />
                    </span>
                    <div className="w-12 md:w-14" />
                </div>

                {/* Center: Title */}
                <h1 className="relative text-2xl md:text-4xl bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600 inline-block text-transparent bg-clip-text">
                    Rune Master
                </h1>

                {/* Right: Action Buttons */}
                <div className="flex items-center">
                    <button
                        className="text-yellow-500 text-3xl md:text-4xl text-shadow-scroll px-2"
                        onClick={handleNewGame}
                        aria-label="Start New Game"
                    >
                        <MdFiberNew />
                    </button>
                    <button
                        className="text-yellow-500 text-2xl md:text-3xl text-shadow-scroll"
                        onClick={handleOpenModal}
                        aria-label="Open Info Modal"
                    >
                        <GiScrollUnfurled />
                    </button>
                </div>
            </header>

            {/* Modal */}
            <Modal showModal={showModal} onClose={handleCloseModal} />
        </>
    );
};