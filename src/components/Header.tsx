import { FaRobot } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"

type Props = {}

export const Header = (_props: Props) => {
    return (
        <>
            <div className="flex justify-between items-center w-full h-14 border-b border-gray-600 p-8">
                <span className="text-white text-5xl">
                    <FaRobot />
                </span>
                <h1>
                    THAT'S THE WORD!
                </h1>
                <span className="text-white text-4xl">
                    <GiHamburgerMenu />
                </span>
                
                
            </div>
        </>
    )
}