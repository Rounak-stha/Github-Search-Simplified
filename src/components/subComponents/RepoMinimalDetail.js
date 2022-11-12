import { Repo, Code } from "../Icons"
import { StarIconLabel, ForkIconLabel, EyeIconLabel } from "../AtomsAndMolecules/AllIconLabels"
import { P1, P2, P3 } from "../Typography/ParaGraph"

export default function RepoMinimalDetail({ userName, repoName, language, repoUrl, userUrl, updatedAt, stars, forks, watchers, description }) {
    return (
        <>
            <div className="inline-block">
                <span className="mb-0.5 flex items-center text-blue-500">
                    <span className="w-[1.2rem] mr-2"><Repo /></span>
                    <P1 className="leading-[1.2rem] font-semibold">
                        <span className="mr-1 hover:underline"><a href={userUrl}>{ userName }</a></span>/ 
                        <span className="ml-1 hover:underline"><a href={repoUrl}>{ repoName }</a></span>
                    </P1>
                </span>
            </div>
            <div className="flex mb-2">
                <P3 className='text-light mr-3'>Updated: { updatedAt.slice(0, 10) }</P3>
                <P3 className='text-light flex items-center'><span className="w-[0.9rem] mr-1"><Code /></span> { language }</P3>
            </div>
            <div className="mb-2 flex flex-wrap gap-2">
                <StarIconLabel number={String(stars > 1000 ? (stars / 1000).toFixed(2) + 'k' : stars)} />
                <ForkIconLabel number={String(forks > 1000 ? (forks / 1000).toFixed(2) + 'k' : forks)} />
                <EyeIconLabel number={ String(watchers > 1000 ? (watchers / 1000).toFixed(2) + 'k' : watchers)} />
            </div>
            <P2>{ description }</P2>
        </>
    )
}