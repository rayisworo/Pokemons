import {sortPokemons} from '../src/utils/transformer.util';
import {PokemonsUnsorted, PokemonsSortedByNameAsc, PokemonsSortedByNameDesc, PokemonsSortedByOwned} from '../src/config/PokemonSamples.config';

test('Test sort ascending by name', ()=>{
  expect(sortPokemons(PokemonsUnsorted, 'name', 'asc')).toStrictEqual(PokemonsSortedByNameAsc);
});

test('Test sort descending by name', ()=>{
  expect(sortPokemons(PokemonsUnsorted, 'name', 'desc')).toStrictEqual(PokemonsSortedByNameDesc);
});

test('Test sort descending by owned', ()=>{
  expect(sortPokemons(PokemonsUnsorted, 'owned', 'desc')).toStrictEqual(PokemonsSortedByOwned);
});