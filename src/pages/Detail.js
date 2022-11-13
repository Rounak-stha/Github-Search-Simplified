import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRepoDetails } from "../api/repoSearch";
import { CheckBadge, CrossBadge } from "../components/AtomsAndMolecules/AllBadges";
import RepoMinimalDetail from "../components/subComponents/RepoMinimalDetail";
import Skeleton from "../components/views/Skeleton";

export default function Detail() {
    const [data, setData] = useState({})
    const  { user, repo } = useParams()

    const { userName, userUrl, repoName, repoUrl, updatedAt, language, stars, forks, watchers, description, ...tableItems  } = data

    useEffect(() => {
        getRepoDetails(`${user}/${repo}`).then(data => setData(data))
    }, [])

    return (
        !Object.keys(data).length ? <Skeleton /> :
        <>
            <RepoMinimalDetail
                userName={userName}
                repoName={repoName}
                language={language}
                userUrl={userUrl}
                repoUrl={repoUrl}
                updatedAt={updatedAt}
                stars={stars}
                forks={forks}
                watchers={watchers}
                description={description}
            />
            <div className="mt-4 md:flex flex-wrap border-2 border-bdr-dark md:border-none last:border-b-0">
                {
                    Object.entries(tableItems).map(([name, value]) => (
                        <div className="flex bg-gray-12 p-1 md:p-0 md:w-fit md:block md:border-2 border-b-2 border-bdr-dark md:mb-2">
                            <div className="w-32 md:w-auto py-3 px-5 md:border-b border-b-bdr-dark">{ name }</div>
                            <div className="py-3 px-5">
                                {
                                    value === false || value === undefined ? <CrossBadge /> : value === true ? <CheckBadge /> : value
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

/* 

<table className="mt-4 border-2 border-bdr-dark rounded-md">
                <tbody>
                    {
                        Object.entries(tableItems).map(([name, value]) => (
                            <tr key={name + value} className="border-b bg-gray-12 border-gray-700">
                                <th scope="row" align="left" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                                    { name }
                                </th>
                                <td className="py-4 px-6">
                                    {
                                        value === false || value === undefined ? <CrossBadge /> : value === true ? <CheckBadge /> : value
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
*/

