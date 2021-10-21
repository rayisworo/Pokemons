import React, {Component} from 'react';
import _ from 'lodash';
import { PokemonCard, PokemonListContainer, PokemonName, CardInfo } from './PokemonList.components';

class PokemonList extends Component{
    render(){
        const {pokemons, handleChangeTab} = this.props;
        return(
            <div>
                <PokemonListContainer>
                    {
                        _.map(pokemons, (pokemon) => 
                                <PokemonCard onClick={()=> handleChangeTab('PokemonDetail', pokemon)} key={_.result(pokemon,'name','pokemon')}>
                                    <img src={_.result(pokemon,'image','https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png')} alt={_.result(pokemon,'name','')}/>
                                    <CardInfo>
                                        Owned : 0
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