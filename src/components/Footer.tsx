import { DiGithubFull } from "react-icons/di"

type Props = {}

/**
 * Footer component that displays a centered GitHub icon with a ping animation.
 */
export const Footer = (_props: Props) => {
    const githubUrl = "https://github.com/Dave-MK/mp2-rune-master"

    return (
        <footer
            className="w-full py-2 mt-auto flex justify-center items-center"
            role="contentinfo"
            aria-label="Footer"
        >
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project GitHub Repository"
                role="link"
                aria-describedby="github-desc"
                className="relative group"
            >
                {/* Base icon */}
                <DiGithubFull className="-mt-5 text-6xl md:text-7xl text-teal-200 animate-pulse group-hover:text-teal-100 transition-colors" />
                {/* Ping animation using a pseudo-icon */}
                <span className="-mt-5 absolute inset-0 rounded-full text-6xl md:text-7xl text-teal-800 opacity-75 pointer-events-none">
                    <DiGithubFull />
                </span>
            </a>

            {/* Screen reader text */}
            <span id="github-desc" className="sr-only">
                Visit the project GitHub repository in a new tab.
            </span>
        </footer>
    )
}
