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
                <div className="flex flex-col justify-between p-10 max-w-5xl bg-parchment">
                    <div
                        className={`scroll-m-80 flex flex-col items-center w-full p-2 transition-all ${showModal ? "scale-100 opacity-100" : "scale-110 opacity-0"
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="text-shadow-scroll text-yellow-950 text-5xl p-2 drop-shadow-md">
                            <GiScrollUnfurled />
                        </span>
                        <h2>Becoming the Rune Master</h2>
                        <button
                            className="hidden"
                            onClick={onClose}
                        >
                            <LiaSkullCrossbonesSolid />
                        </button>
                    </div>
                    <div 
                        className="flex flex-col justify-center max-w-md py-2 px-8 text-sm">
                        <hr className="p-2"/>
                        <h3>Rules</h3>
                        <ol>
                            <li>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                                    accusamus, ullam atque fugit harum rerum hic delectus in aperiam
                                    nemo iusto odit dolore beatae eius ea laudantium eaque deserunt.
                                    Quasi.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                                    accusamus, ullam atque fugit harum rerum hic delectus in aperiam
                                    nemo iusto odit dolore beatae eius ea laudantium eaque deserunt.
                                    Quasi.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                                    accusamus, ullam atque fugit harum rerum hic delectus in aperiam
                                    nemo iusto odit dolore beatae eius ea laudantium eaque deserunt.
                                    Quasi.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};
