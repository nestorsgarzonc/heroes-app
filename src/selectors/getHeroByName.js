import { heroes } from "../data/heroes_data";

export const getHeroesByName = (superhero) => {
    return heroes.filter(hero => hero.superhero.includes(superhero));
}
