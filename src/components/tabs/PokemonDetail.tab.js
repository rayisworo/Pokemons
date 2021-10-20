import React, {Component} from 'react';
import _ from 'lodash';
import { PokemonDetailCard, PokemonImage, Separator, CardTitle, CatchButton } from './PokemonDetail.components';
import Spinner from '../screens/Spinner.screen';
import {getPokemonInfo} from '../../state/Requests';

class PokemonDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            pokemonInfo:{},
            loading:true
        }
    }

    catchPokemon = (pokemon) => {
        const isSuccess = Math.random() < 0.5;
        if(isSuccess){
            const capturedPokemons = JSON.parse(localStorage.getItem('capturedPokemons'));
            const newCapturedPokemons = capturedPokemons ?
            [
                ...capturedPokemons,
                pokemon
            ]
            :
            [
                pokemon
            ];
            console.log('new pokemons',newCapturedPokemons)
            localStorage.setItem('capturedPokemons',JSON.stringify(newCapturedPokemons));
        }
    }

    componentDidMount(){
        const {pokemonDetail} = this.props;
        getPokemonInfo(pokemonDetail);
        const pokemonInfo = JSON.parse(localStorage.getItem('pokemon'));
        this.setState({
            pokemonInfo:pokemonInfo,
            loading:false
        })
    }
    
    render(){
        const {pokemonInfo} = this.state;
        const {pokemonDetail} = this.props;
        const name=_.result(pokemonDetail,'name','');
        const imageUrl = _.result(pokemonDetail,'image','');
        return(
            <div>
                {/* {
                    loading ?
                    <Spinner color="#0077BC"/>
                    : */}
                    <PokemonDetailCard>
                        <PokemonImage src={imageUrl} alt={name} />
                        <CardTitle>
                            {name}
                        </CardTitle>
                        <Separator/>
                        <CatchButton onClick={()=>this.catchPokemon(pokemonInfo)}>
                                Catch
                        </CatchButton>
                    </PokemonDetailCard>
                {/* } */}
            </div>
        )
    }
}

export default PokemonDetail;