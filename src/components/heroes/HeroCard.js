import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {
    return (
        <div className='my-8 mx-2'>
            <div className=' w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition'
                style={{ maxWidth: 540 }}>
                <img className='rounded w-80' src={`./assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
                <div className='px-5 my-4'>
                    <h1 className='text-4xl font-semibold'>{hero.superhero}</h1>
                    <p>{hero.alter_ego}</p>
                    {(hero.alter_ego !== hero.characters) && <p>{hero.characters}</p>}
                    <p><small>{hero.first_appearance}</small></p>
                    <Link to={`./hero/${hero.id}`} style={{ color: '#3C86F2' }}><p className='text-cyan-600'>See more</p></Link>
                </div>
            </div>
        </div>
    )
}
