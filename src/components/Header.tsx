import { GiGems } from "react-icons/gi"
import { GiScrollUnfurled } from "react-icons/gi"

type Props = {}

export const Header = (_props: Props) => {
    return (
        <>
            <div className="flex justify-between items-center w-full h-12 border-b border-gray-600 p-6 bg-teal-600">
                <span className="text-white text-4xl">
                    <GiGems />
                </span>
                <h1>
                    RUNE MASTER
                </h1>
                <span className="text-white text-3xl">
                <GiScrollUnfurled />
                </span>
                
                
            </div>
        </>
    )
}