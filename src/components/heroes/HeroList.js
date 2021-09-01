import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        <div className="m-6">
            <ul>
                {heroes.map(hero =>
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                )
                }
            </ul>
        </div>
    )
}
