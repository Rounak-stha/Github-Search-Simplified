import { useReducer } from "react"
import Input from "../AtomsAndMolecules/Input"
import Button from '../AtomsAndMolecules/Button'
import SelectOptions from "../AtomsAndMolecules/SelectOptions"
import InputWithOptions from "../AtomsAndMolecules/InputWithOptions"
import { constructQueryAndGetSearchResults } from "../../api/repoSearch"

function reducer(state, action) {
    switch(action.type) {
        case 'setSearchString':
            return { ...state, searchString: action.payload }
        case 'setSort':
            return { ...state, sort: action.payload }
        case 'setOrder': 
            return { ...state, order: action.payload }
        case 'setLanguage':
            return { ...state, language: action.payload }
        case 'setUser': 
            return { ...state, user: action.payload }
        default:
            return { ...state }
    }
}

export default function GhubSearch({ setResults, setLoading }) {
    const [queryState, queryStateDispatch] = useReducer(reducer, { searchString: '', sort: '', order: '', language: '', user: '' })
    
    return (
        <>
            <Input 
                placeholder='Search Github Repo...' 
                setValue={(value) => queryStateDispatch({ type: 'setSearchString', payload: value })}
                onKeyDown={async (e) => {
                    if (e.code === 'Enter') {
                        setLoading(true)
                        const { data, error } = await constructQueryAndGetSearchResults(queryState)
                        setLoading(false)
                        if (error) return alert('Opps! An Error Occoured')
                        setResults(data)
                    }
                }}
            />
            <div className="flex gap-2 flex-wrap my-2">
                <SelectOptions setValue={(value) => {queryStateDispatch({ type: 'setSort', payload: value })}} name='Sort By' options={['stars', 'forks', 'updated']} />
                <SelectOptions setValue={(value) => {queryStateDispatch({ type: 'setOrder', payload: value })}} name='Order' options={['asc', 'desc']} />
                <InputWithOptions setValue={(value) => {queryStateDispatch({ type: 'setLanguage', payload: value })}} name='language' options={['javascript', 'python', 'assembly', 'rust', 'c#', 'c++', 'c']} />
                <InputWithOptions setValue={(value) => {queryStateDispatch({ type: 'setUser', payload: value })}} name='user' />
            </div>
            <Button 
                onClick={async () => {
                    setLoading(true)
                    const { data, error } = await constructQueryAndGetSearchResults(queryState)
                    if (error) return alert('Opps! An Error Occoured')
                    setResults(data)
                    setLoading(false)
                }} 

            >Search</Button>
        </>
    )
}