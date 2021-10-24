import _ from 'lodash';

export const sortPokemons = (pokemons, key = 'name', order = '') => {
    if(key==='default') return pokemons;
    const ordered = _.orderBy(pokemons, [key], [order === '' ? 'asc' : order]);
    return ordered;
}