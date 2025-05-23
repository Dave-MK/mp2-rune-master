import { DiGithubFull } from "react-icons/di"

type Props = {}

/**
 * Footer component that displays a centered GitHub icon with a ping animation.
 */
export const Footer = (_props: Props) => {
    const githubUrl = "https://github.com/Dave-MK/mp2-rune-master"

    return (
        <footer
            className="w-full grid mt-auto mb-auto justify-center items-center"
            role="contentinfo"
            aria-label="Footer"
        >
            {/* Animated ping effect */}
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-1 row-start-1"
                aria-label="Project GitHub Repository (animated background)"
                role="link"
                tabIndex={-1}
                aria-hidden="true"
            >
                <DiGithubFull
                    className="text-6xl md:text-7xl lg:text-8xl text-teal-900 animate-ping"
                    aria-hidden="true"
                    focusable="false"
                />
            </a>
            {/* Main GitHub icon */}
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-1 row-start-1 z-10"
                aria-label="Project GitHub Repository"
                role="link"
            >
                <DiGithubFull
                    className="text-6xl md:text-7xl lg:text-8xl text-teal-600 z-10"
                    aria-label="GitHub logo"
                    focusable="false"
                />
            </a>
        </footer>
    )
}
