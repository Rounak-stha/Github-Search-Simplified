import { useState } from "react"
import { getRepoSearchResults, paginateQueryString } from "../../api/repoSearch"

const RESULTS_PER_PAGE = parseInt(process.env.REACT_APP_RESULTS_PER_PAGE)

function shiftPaginationNav(setPaginationRange, direction, maxEnd) {
    if (direction === 'left') {
        setPaginationRange(({ start, end }) => {
            let newStart = start - 3
            let newEnd = end - 3

            if (newStart < 1) {
                newStart = 1
                newEnd = RESULTS_PER_PAGE
            } 

            return { start: newStart, end: newEnd }
        })
    }
    else if (direction === 'right') {
        setPaginationRange(({ start, end }) => {
            let newStart = start + 3
            let newEnd = end + 3

            if (newEnd > maxEnd) {
                newEnd = maxEnd
                newStart = maxEnd - RESULTS_PER_PAGE
            }

            return { start: newStart, end: newEnd }
        })
    }
    


}

export default function PaginationNav({ queryString, totalCount, setResults, setLoading }) {
    const [paginationRange, setPaginationRange] = useState({ start: 1, end: RESULTS_PER_PAGE })
    const [page, setPage] = useState(1)

    const MAX_END = Math.floor(totalCount / RESULTS_PER_PAGE) + totalCount % RESULTS_PER_PAGE

    return (
        <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
            <li onClick={() => {
                const start = paginationRange.start
                if (start === 1) return
                setLoading(true)
                getRepoSearchResults(paginateQueryString(queryString, start - 1))
                    .then(({ data, error }) => {
                        if (error) return alert('Opps! An unknown Error Occoured')
                        setLoading(false)
                        setResults(data)
                    })
                shiftPaginationNav(setPaginationRange, 'left')
                setPage(start - 1)
            }}>
                <span className="block py-2 px-3 md:py-3 md:px-4 ml-0 leading-tight rounded-l-lg border bg-gray-12 border-bdr-dark text-gray-400 hover:bg-gray-13 hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </span>
            </li>
            {
                Array(paginationRange.end - paginationRange.start + 1).fill().map((_, i) => paginationRange.start + i).map(num => (
                    <li key={num}>
                        <span 
                            onClick={async () => {
                                if (page === num) return
                                setLoading(true)
                                const { data, error } = await getRepoSearchResults(paginateQueryString(queryString, num))
                                setLoading(false)
                                if (error) return alert('Opps! An UnKnown Error Occoured')
                                setResults(data)
                                setPage(num)
                            }}
                            className={`cursor-pointer py-2 px-3 md:py-3 md:px-4 leading-tight border bg-gray-12 border-bdr-dark text-gray-400 ${page === num ? 'bg-gray-14' : 'hover:bg-gray-13 hover:text-white'}`}
                        >
                            { num }
                        </span>
                    </li>
                ))
            }
            <li onClick={() => {
                const end = paginationRange.end
                if (end === MAX_END) return
                setLoading(true)
                getRepoSearchResults(paginateQueryString(queryString, end + 1))
                    .then(({ data, error }) => {
                        if (error) return alert('Opps! An unknown Error Occoured')
                        setLoading(false)
                        setResults(data)
                    });
                shiftPaginationNav(setPaginationRange, 'right', MAX_END)
                setPage(end + 1)
            }}>
                <span className="block py-2 px-3 md:py-3 md:px-4 leading-tight rounded-r-lg border bg-gray-12 border-bdr-dark text-gray-400 hover:bg-gray-13 hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </span>
            </li>
        </ul>
        </nav>
    )
}