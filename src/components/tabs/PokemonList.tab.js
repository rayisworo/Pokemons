import React, {Component} from 'react';
import _ from 'lodash';
import { PokemonCard, PokemonListContainer, PokemonName, CardInfo } from './PokemonList.components';

class PokemonList extends Component{
    countCapturedPokemons = (pokemons) => {
        let modifiedPokemons = [];
        const capturedPokemons = JSON.parse(localStorage.getItem('capturedPokemons'));
        _.forEach(pokemons, (item, i)=>{
            const itemName = _.result(item,'name','');
            const capturedItemPokemons = _.filter(capturedPokemons,{name:itemName});
            modifiedPokemons = [
                ...modifiedPokemons,
                {
                    owned:capturedItemPokemons.length,
                    ...item
                }
            ];
        })
        return modifiedPokemons;
    }
    render(){
        const {pokemons, handleChangeTab} = this.props;
        const modifiedPokemons = this.countCapturedPokemons(pokemons);
        return(
            <div>
                <PokemonListContainer>
                    {
                        _.map(modifiedPokemons, (pokemon) => 
                                <PokemonCard onClick={()=> handleChangeTab('PokemonDetail', pokemon)} key={_.result(pokemon,'name','pokemon')}>
                                    <img src={_.result(pokemon,'image','https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png')} alt={_.result(pokemon,'name','')}/>
                                    <CardInfo>
                                        Owned : {_.result(pokemon,'owned',0)}
                                    </CardInfo>
                                    <PokemonName>
                                        {_.result(pokemon,'name','pokemon')}
                                    </PokemonName>
                                </PokemonCard>
                        )
                    } 
                </PokemonListContainer>
            </div>
        )
    }
}

export default PokemonList;