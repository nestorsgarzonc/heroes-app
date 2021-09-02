import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="m-6 grid md:grid-cols-3 xl:grid-cols-5 sm:grid-cols-2 gap-2 animate__animated  animate__fadeIn">
            {heroes.map(hero => <HeroCard hero={hero} key={hero.id} />)}
        </div>
    )
}
