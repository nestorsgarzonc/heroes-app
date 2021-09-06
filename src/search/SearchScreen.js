import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { HeroCard } from '../components/heroes/HeroCard'
import { getHeroesByName } from '../selectors/getHeroByName'
import queryString from "query-string";

export const SearchScreen = ({ history }) => {
    const queryParam = useLocation()
    let q = ''
    if (queryParam.search || queryParam.search !== '') {
        const { q: q_temp } = queryString.parse(queryParam.search ?? '')
        q = q_temp
    }

    const [query, setQuery] = useState(q ?? '')
    const [filteredHeroes, setfilteredHeroes] = useState(getHeroesByName(query))

    const handleOnSetQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setfilteredHeroes(getHeroesByName(query))
        history.push(`?q=${query}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>

            <div className="flex">
                <div className="flex-1">
                    <h4>Search Form</h4>

                    <form>
                        <input type="text" name="" id="" placeholder='Find your hero' onChange={handleOnSetQuery} value={query} />
                        <button type="submit" onClick={handleOnSubmit}>Search</button>
                    </form>
                </div>
                <div className="flex-2">
                    <h4>Results</h4>
                    {filteredHeroes.map(hero => (<HeroCard key={hero.id} hero={hero} />))}
                </div>
            </div>
        </div>
    )
}
