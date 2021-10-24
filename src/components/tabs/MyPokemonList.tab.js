import _ from 'lodash';
import React, {Component} from 'react';
import { PokemonCardHorizontal, PokemonImage, PokemonNickname, InfoContainer, AdditionalInfo, ReleaseButton, ButtonContainer } from './MyPokemonList.components';

class MyPokemonList extends Component {
    constructor(props){
        super(props);
        this.state = {
            myPokemons : []
        };
    }

    handleReleasePokemon = (pokemon) => {
        const {myPokemons} = this.state;
        const nickname = _.result(pokemon,'nickname','');
        _.remove(myPokemons, {'nickname':nickname});
        localStorage.setItem('capturedPokemons',JSON.stringify(myPokemons));
        this.setState({
            myPokemons:myPokemons
        })
    }

    componentDidMount(){
        const myPokemons = JSON.parse(localStorage.getItem('capturedPokemons'));
        this.setState({
            myPokemons:myPokemons
        });
    }
    render(){
        const {myPokemons} = this.state
        return(
            <div>
                {
                    _.map(myPokemons, (pokemon)=>
                        <PokemonCardHorizontal>
                            <PokemonImage src={_.result(pokemon,'sprites.front_default','')} alt={_.result(pokemon,'name','')}/>
                            <InfoContainer>
                                <PokemonNickname>
                                    {_.result(pokemon,'nickname','')} - {_.result(pokemon,'name','')}
                                </PokemonNickname>
                                <AdditionalInfo>
                                    types: {_.map(_.result(pokemon,'types',[1,2]), (type)=> ` ${_.result(type,'type.name','no')}`)}
                                </AdditionalInfo>
                            </InfoContainer>
                            <ButtonContainer>
                                <ReleaseButton onClick={() => this.handleReleasePokemon(pokemon)}>
                                    Release
                                </ReleaseButton>
                            </ButtonContainer>
                        </PokemonCardHorizontal>
                    )
                }
            </div>
        )
    }
}

export default MyPokemonList;