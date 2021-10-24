import React, {Component} from 'react';
import _ from 'lodash';
import { PokemonCard, PokemonListContainer, PokemonName, CardInfo, SearchBarContainer } from './PokemonList.components';
import {sortPokemons} from '../../utils/transformer.util';
import Picker from '../Picker.component';
import { POKEMON_LIST_SORT, POKEMON_LIST_ORDER, POKEMON_LIST_SHOW } from '../../config/PickerOptions.config';

class PokemonList extends Component{
    constructor(props){
        super(props);
        this.state = {
            orderKey:'default',
            order:'desc'
        };
    }

    modifyPokemonsList = (pokemons) => {
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

    handleChangeSort = (option) => {
        const {value} = option;
        this.setState({
            orderKey:value,
        });
    }

    handleChangeOrder = (option) => {
        const {value} = option;
        this.setState({
            order:value
        });
    }

    render(){
        const {pokemons, handleChangeTab, handleChangeShow} = this.props;
        const {orderKey, order} = this.state;
        const modifiedPokemons = sortPokemons(this.modifyPokemonsList(pokemons), orderKey, order);
        return(
            <div>
                <SearchBarContainer>
                    <Picker 
                        label="Show" 
                        options={POKEMON_LIST_SHOW} 
                        customChangeHandler={handleChangeShow} 
                        name="pokemonListShow"
                    />
                    <Picker 
                        label="Sort by" 
                        options={POKEMON_LIST_SORT} 
                        customChangeHandler={this.handleChangeSort} 
                        name="pokemonListSort"
                    />
                    <Picker 
                        label="Order" 
                        options={POKEMON_LIST_ORDER} 
                        customChangeHandler={this.handleChangeOrder} 
                        name="pokemonListOrder"
                    />
                </SearchBarContainer>
                <PokemonListContainer>
                    {
                        _.map(modifiedPokemons, (pokemon) => 
                                <PokemonCard onClick={()=> handleChangeTab('PokemonDetail', pokemon)} key={_.result(pokemon,'name','pokemon')}>
                                    <img src={_.result(pokemon,'image','https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png')} alt={_.result(pokemon,'name','')}/>
                                    <PokemonName>
                                        {_.result(pokemon,'name','pokemon')}
                                    </PokemonName>
                                    <CardInfo>
                                        Owned : {_.result(pokemon,'owned',0)}
                                    </CardInfo>
                                </PokemonCard>
                        )
                    } 
                </PokemonListContainer>
            </div>
        )
    }
}

export default PokemonList;