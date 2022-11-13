const REPO_SEARCH_ENDPOINT = process.env.REACT_APP_REPO_SEARCH_ENDPOINT
const REPO_DETAIL_ENDPOINT = process.env.REACT_APP_REPO_DETAIL_ENDPOINT
const RESULTS_PER_PAGE = process.env.REACT_APP_RESULTS_PER_PAGE

function constructRepoSearchQueryString(searchData) {
    const { searchString, sort, order, language, user } = searchData
    let finalQueryString = REPO_SEARCH_ENDPOINT

    if (!searchString) return
    else finalQueryString += searchString
    if ( user) finalQueryString += ' user:' + user 
    if (language) finalQueryString += ' language:' + language
    if (sort) finalQueryString += '&sort=' + sort
    if (order) finalQueryString += '&order=' + order
    finalQueryString += '&per_page=' + RESULTS_PER_PAGE

    return finalQueryString
}

export function paginateQueryString(queryString, page) {
    queryString = queryString.split('&').filter(str => !str.includes('page=')).join('&')
    if (page) return `${queryString}&per_page=${RESULTS_PER_PAGE}&page=${page}`
    return queryString
}

export async function getRepoSearchResults(queryString) {
    try {
        const data = await fetch(queryString).then(res => res.json()).then(data => data)

        for (let i = 0; i < data.items.length; i++) {
            const item = data.items[i]
            let tempItem = { userName: item.owner.login, repoName: item.name, language: item.language, repoUrl: item.html_url, userUrl: item.owner.html_url, stars: item.stargazers_count, updatedAt: item.updated_at, watchers: item.watchers, forks: item.forks_count ,description: item.description }
            data.items[i] = tempItem
        }

        data.queryString = queryString
        return { data }
    } catch(err) {
        console.log(err)
        return { error: 'UnKnown Error;' }
    }
}

export async function constructQueryAndGetSearchResults(searchData) {
    const queryString = constructRepoSearchQueryString(searchData)
    const results = await getRepoSearchResults(queryString)
    return results
}

export async function getRepoDetails(fullRepoName) {
    try {
        const queryString = `${REPO_DETAIL_ENDPOINT}/${fullRepoName}`
        const data = await fetch(queryString).then(res => res.json()).then(data => data)
        const { 
            name, html_url, language, stargazers_count: stars, watchers, forks_count: forks, 
            description, updated_at: updatedAt, open_issues_count: Issues, has_wiki: Wiki, has_pages: Pages, 
            has_projects: Projects, has_discussions: Discussions, allow_forking: Forking, is_template: Template, 
            network_count: Networks, subscribers_count: Subscribers, owner , default_branch: Branch, license
        } = data
        
        return { 
            repoName: name, 
            repoUrl: html_url, 
            userName: owner.login ,
            userUrl: owner.html_url,
            language, stars, updatedAt, watchers, forks, description, Branch, license: license?.name, 'Issues and PRs': Issues, Discussions, Pages, 
            Wiki, Projects, Forking, Template, Networks, Subscribers,
        }
    } catch(err) {
        console.log(err)
        return { error: 'Unknown Error' }
    }
}