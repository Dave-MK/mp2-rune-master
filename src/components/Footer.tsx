import { DiGithubFull } from "react-icons/di"

type Props = {}

export const Footer = (_props: Props) => {
    return (
        <>
            <div className="w-[100vw] grid mt-auto mb-auto justify-center items-center">
                
                    <div className="col-start-1 row-start-1">
                        <a href="https://github.com/dave-mk/mp2-rune-master">
                            <DiGithubFull className="text-6xl md:text-7xl lg:text-8xl text-teal-600"/>
                        </a>
                    </div>
                    <div className="col-start-1 row-start-1">
                        <DiGithubFull className="text-6xl md:text-7xl lg:text-8xl text-teal-600 animate-ping"/>
                    </div>  
            </div>
        </>
    )
}