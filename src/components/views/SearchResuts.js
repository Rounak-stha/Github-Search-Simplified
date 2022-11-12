import Containter from '../views/Container'
import { Link } from "react-router-dom"
import { H4 } from '../Typography/Headings'
import RepoMinimalDetail from "../subComponents/RepoMinimalDetail"

export default function SearchResults({ data }) {
    return (
        <>
            <H4 className="mb-2">{ data.total_count } Results</H4>
            {
                data.items.map((data, i) => {
                    const { userName, repoName } = data
                    return (
                        <Link to={`detail/${userName}/${repoName}`} key={i + userName + repoName} >
                            <div className="mb-4">
                                <Containter>
                                    <RepoMinimalDetail {...data} />
                                </Containter>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}