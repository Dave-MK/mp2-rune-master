import { GiGems } from "react-icons/gi"
import { GiScrollUnfurled } from "react-icons/gi"

type Props = {}

export const Header = (_props: Props) => {
    return (
        <>
            <div className="flex justify-between items-center w-full h-12 border-b border-teal-600 p-7 bg-teal-900/60">
                <span className="text-yellow-500 text-4xl">
                    <GiGems />
                </span>
                <h1>
                    Rune Master
                </h1>
                <span className="text-yellow-500 text-3xl">
                <GiScrollUnfurled />
                </span>
            </div>
        </>
    )
}