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
        </>
    )
}