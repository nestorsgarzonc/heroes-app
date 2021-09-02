import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams();
    const hero =
        useMemo(() => getHeroesById(heroeId), [heroeId])[0]


    const handleOnReturn = () => {
        if (history.length <= 2) {
            history.push('/')
            return;
        }
        history.goBack()
    }

    if (!hero) {
        return (
            <>
                <h1>404</h1>
                <h2>Not found :c</h2>
            </>
        )
    }
    return (
        <div className="my-5 mx-5 flex bg-white shadow-xl max-h-screen">
            <img
                src={`../assets/heroes/${heroeId}.jpg`} alt={heroeId}
                className="flex-1 w-2 animate__animated  animate__fadeInLeft"
                style={{ maxWidth: '50vh' }}
            />
            <div className="flex-1 ml-5 animate__animated  animate__fadeIn">
                <h1 className='font-bold text-5xl my-2'>{hero.superhero}</h1>
                <i>Superhero</i>
                <p><b>First appearance:</b> {hero.first_appearance}</p>
                <p><b>publisher:</b> {hero.publisher}</p>
                <p><b>alter ego:</b> {hero.alter_ego}</p>
                <p><b>characters:</b> {hero.characters}</p>
                <button
                    onClick={handleOnReturn}
                    className='my-5 px-4 py-2 shadow-md bg-black text-white rounded hover:shadow-xl hover:scale-105 duration-200 transform transition'
                >
                    Return
                </button>
            </div>
        </div>
    )
}
