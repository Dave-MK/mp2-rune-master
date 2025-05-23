import { DiGithubFull } from "react-icons/di"

type Props = {}

export const Footer = (_props: Props) => {
    return (
        <>
            <div className="w-[100vw] grid mt-auto mb-auto justify-center items-center">
                    <a
                        href="https://github.com/Dave-MK/mp2-rune-master"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-start-1 row-start-1 z-10"
                    >
                        <DiGithubFull className="text-6xl md:text-7xl lg:text-8xl text-teal-600 z-10" />
                    </a>
                    <a
                        href="https://github.com/Dave-MK/mp2-rune-master"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-start-1 row-start-1"
                    >
                        <DiGithubFull className="text-6xl md:text-7xl lg:text-8xl text-teal-900 animate-ping" />
                    </a>
            </div>
        </>
    )
}