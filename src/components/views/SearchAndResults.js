import { useEffect, useState } from "react";
import PaginationNav from "../AtomsAndMolecules/PaginationNav";
import GhubSearch from "./GhubSearch";
import SearchResults from './SearchResuts'
import Spinner from "../AtomsAndMolecules/Spinner";
import { H1 } from '../Typography/Headings'

export default function SearchAndResults() {
    const [results, setResults] = useState({})
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <GhubSearch setLoading={setLoading} setResults={setResults} />
            <div className="mt-4">

                { 
                    loading ? 
                        <div className="flex justify-center my-4"><Spinner /></div> : 
                        results.total_count ? (
                            <>
                                <SearchResults data={results} />
                                <div className="flex justify-center">
                                    <PaginationNav 
                                        queryString={results.queryString} 
                                        totalCount={results.total_count}
                                        setResults={setResults}
                                        setLoading={setLoading}  
                                    />
                                </div>
                            </>
                        ) : 
                        results.total_count === 0 ? <H1 className='text-center my-10 text-red-6'>Found no Repositories for that Search</H1> : null
                }
            </div>
        </div>
    )
}