import _ from 'lodash';
import {GET_POKEMON_INFO} from './Queries';
import {client} from '../utils/apolloClient.util';

export const getPokemonInfo = (pokemon) => {
    const name = _.result(pokemon, 'name', '');
    client.query({
        query: GET_POKEMON_INFO,
        variables: {
            name: name
        }
    }).then((result) => {
        const data = _.result(result, 'data', {});
        const pokemon = _.result(data, 'pokemon', {});
        localStorage.setItem('pokemon',JSON.stringify(pokemon));
    }).catch((err) => {
        console.log(err);
    })
}