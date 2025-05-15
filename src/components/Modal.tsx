import { GiScrollUnfurled } from "react-icons/gi";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";

type propTypes = {
    showModal: boolean;
    onClose: () => void;
};

export const Modal: React.FC<propTypes> = ({ showModal, onClose }) => {
    return (
        <>
            <div
                className={`flex items-center justify-center w-full h-screen fixed inset-0 transition-colors ${showModal ? "visible bg-black/50" : "invisible"
                    }`}
                onClick={onClose}
            >
                <div className="flex flex-col justify-around p-12 max-w-5xl bg-parchment-9-16">
                    <div 
                        className="flex flex-col justify-center items-center max-w-md p-2 px-8"
                    >
                        <div
                        className={`scroll-m-80 flex flex-col items-center w-full p-2 transition-all ${showModal ? "scale-100 opacity-100" : "scale-110 opacity-0"
                            }`}
                        onClick={(e) => e.stopPropagation()}
                        >
                            <span className="text-shadow-scroll text-yellow-950 text-5xl p-2 drop-shadow-md">
                                <GiScrollUnfurled />
                            </span>
                            <button
                                className="hidden"
                                onClick={onClose}
                            >
                                <LiaSkullCrossbonesSolid />
                            </button>
                        </div>
                        <h2 className="text-4xl mb-4">How to Play</h2>
                        <ol className="flex flex-col justify-start overscroll-contain items-center text-center overflow-y-scroll snap-start  w-100 h-110 border-t-1 border-t-amber-800 border-b-1 border-b-amber-800 p-2">
                            <li className="flex flex-col justify-center items-center p-2 mb-3">
                                <h2 className="underline text-2xl">Aim of the Game</h2>
                                <p className="p-2">
                                    To become the Rune Master, you must guess the word that presents five Gold runes.
                                </p>
                                <div className="flex">
                                    <img src="./src/assets/images/correct.webp" className="w-12 m-1" />
                                    <img src="./src/assets/images/correct.webp" className="w-12 m-1" />
                                    <img src="./src/assets/images/correct.webp" className="w-12 m-1"/>
                                    <img src="./src/assets/images/correct.webp" className="w-12 m-1" />
                                    <img src="./src/assets/images/correct.webp" className="w-12 m-1" />
                                </div>
                                <p className="p-2">
                                    If you fail six attempts to collect the five Gold runes, you will be branded a mere apprentice.
                                </p>
                            </li>
                            <li className="flex flex-col justify-center items-center p-2 mb-3">
                                <h2 className="text-2xl underline p-2">Rune Types & Purpose</h2>
                                <h2>Rune of Ivory</h2>
                                <img src="./src/assets/images/tile.webp" className="w-12 mb-3" />
                                <p>
                                    A plain Rune that has not been blessed with an inscription.
                                </p>
                            </li>
                            <li className="flex flex-col justify-center items-center mb-3">
                                <h2>Rune of Weathered Gold</h2>
                                <img src="./src/assets/images/oop.webp" className="w-12 mb-3" />
                                <p>
                                    A Rune whose inscription is within the solution, but is incorrectly positioned.
                                </p>
                            </li>
                            <li className="flex flex-col justify-center items-center mb-3">
                                <h2>Rune of Decay</h2>
                                <img src="./src/assets/images/wrong.webp" className="w-12 mb-3"/>
                                <p>
                                    It's inscription is not within the solution.
                                </p>
                            </li>
                            <li className="flex flex-col justify-center items-center mb-3">
                                <h2>Rune of the Master</h2>
                                <img src="./src/assets/images/correct.webp" className="w-12 mb-3" />
                                <p>
                                    It's inscription is correctly placed. Five of these together brands you the Rune Master.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};
