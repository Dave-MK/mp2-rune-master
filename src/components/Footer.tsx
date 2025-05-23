import { DiGithubFull } from "react-icons/di"

type Props = {}

/**
 * Footer component that displays a centered GitHub icon with a ping animation.
 */
export const Footer = (_props: Props) => {
    const githubUrl = "https://github.com/Dave-MK/mp2-rune-master"

    return (
        <footer className="w-full grid mt-auto mb-auto justify-center items-center">
            {/* Animated ping effect */}
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-1 row-start-1"
                aria-label="Project GitHub Repository"
            >
                <DiGithubFull className="text-6xl md:text-7xl lg:text-8xl text-teal-900 animate-ping" />
            </a>
            {/* Main GitHub icon */}
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-1 row-start-1 z-10"
                aria-label="Project GitHub Repository"
            >
                <DiGithubFull className="text-6xl md:text-7xl lg:text-8xl text-teal-600 z-10" />
            </a>
        </footer>
    )
}
