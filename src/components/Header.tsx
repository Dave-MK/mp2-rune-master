import { GiFireGem } from "react-icons/gi"
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
            <div className="flex justify-between items-center w-[100vw] h-12 border-b border-teal-600 p-2 bg-teal-900/60">
                <div className="flex">
                    <span className="text-yellow-500 text-3xl md:text-4xl text-shadow-scroll">
                        <GiFireGem />
                    </span>
                    <div className="w-12 md:w-14"/>
                </div>
                <h1 className="relative text-2xl md:text-4xl bg-gradient-to-tl from-yellow-600 via-yellow-300 to-yellow-600 inline-block text-transparent bg-clip-text">
                    Rune Master
                </h1>
                <div className="flex">
                    <button className="text-yellow-500 text-3xl md:text-4xl text-shadow-scroll px-2" onClick={newGame}>
                        <MdFiberNew />
                    </button>
                    <button className="text-yellow-500 text-2xl md:text-3xl text-shadow-scroll" onClick={() => setShowModel(true)}>
                        <GiScrollUnfurled />
                    </button>
                </div>
            </div>
            <Modal showModal={showModal} onClose={() => setShowModel(false)} />
        </>
    )
}