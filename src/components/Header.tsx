import { GiGems } from "react-icons/gi"
import { GiScrollUnfurled } from "react-icons/gi"
import { Modal } from "./Modal"
import { useState } from "react"
import { MdFiberNew } from "react-icons/md"

type Props = {}

export const Header = (_props: Props) => {
    const [showModal, setShowModel] = useState<boolean>(false);

    const newGame = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="flex justify-between items-center w-[100vw] h-12 md:h-16 border-b border-teal-600 p-2 bg-teal-900/60">
                <div className="flex">
                    <span className="text-yellow-500 text-3xl md:text-5xl text-shadow-scroll">
                        <GiGems />
                    </span>
                    <div className="w-12 md:w-16"/>
                </div>
                <h1>
                    Rune Master
                </h1>
                <div className="flex">
                    <button className="text-yellow-500 text-3xl md:text-5xl text-shadow-scroll px-2" onClick={newGame}>
                        <MdFiberNew />
                    </button>
                    <button className="text-yellow-500 text-2xl md:text-4xl text-shadow-scroll" onClick={() => setShowModel(true)}>
                        <GiScrollUnfurled />
                    </button>
                </div>
            </div>
            <Modal showModal={showModal} onClose={() => setShowModel(false)} />
        </>
    )
}