import React, {Component} from 'react';
import _ from 'lodash';
import { PokemonDetailCard, PokemonImage, Separator, CardTitle, CatchButton } from './PokemonDetail.components';
import CapturePokemonModal from '../modals/CapturePokemonModal.modal';
import {getPokemonInfo} from '../../state/Requests';

class PokemonDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            pokemonInfo:{},
            loading:true,
            showModal:false,
            isSuccess:false,
            warning:null
        }
    }

    submitSavePokemon = () => {
        const {pokemonInfo} = this.state;
        const nickname = document.getElementById("nickname").value;
        const capturedPokemons = JSON.parse(localStorage.getItem('capturedPokemons'));
        if(nickname === ''){
            this.setState({
                warning:'Please provide a nickname'
            });
        }else{
            if(_.find(capturedPokemons,{nickname:nickname})){
                this.setState({
                    warning:'Oopps, you already used that nickname.'
                });
            }else{
                const newCapturedPokemons = _.isEmpty(capturedPokemons) ? [{nickname, ...pokemonInfo}] : [...capturedPokemons, {nickname, ...pokemonInfo}];
                localStorage.setItem('capturedPokemons',JSON.stringify(newCapturedPokemons));
                this.setState({
                    showModal:false,
                    isSuccess:false,
                    warning:null
                })
            }
        }
    }

    catchPokemon = () => {
        const isSuccess = Math.random() < 0.5;
        if(isSuccess){
            console.log("success");
            this.setState({
                showModal:true,
                isSuccess:true
            });
        }else{
            this.setState({
                showModal:true,
            });
            setTimeout(() => {
                this.setState({
                    showModal: false,
                });
            }, 1000);
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
        const {pokemonInfo, showModal, warning, isSuccess} = this.state;
        const {pokemonDetail} = this.props;
        const name=_.result(pokemonDetail,'name','');
        const imageUrl = _.result(pokemonDetail,'image','');

        return(
            <div>
                <CapturePokemonModal show={showModal} name={name} submitSavePokemon={this.submitSavePokemon} warning={warning} isSuccess={isSuccess}/>
                <PokemonDetailCard>
                    <PokemonImage src={imageUrl} alt={name} />
                    <CardTitle>
                        {name}
                    </CardTitle>
                    <Separator/>
                    <CatchButton onClick={()=>this.catchPokemon()}>
                            Catch
                    </CatchButton>
                </PokemonDetailCard>
            </div>
        )
    }
}

export default PokemonDetail;