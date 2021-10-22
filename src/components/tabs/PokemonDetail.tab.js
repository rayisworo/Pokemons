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

    componentWillMount(){
        const {pokemonDetail} = this.props;
        getPokemonInfo(pokemonDetail).then((res)=>{
            const id = _.result(res,'id','');
            id && this.setState({
                pokemonInfo:res
            });
            !id && alert('Failed getting Pokemon Info, please try again.');
        });
    }
    
    render(){
        const {pokemonInfo, showModal, warning, isSuccess} = this.state;
        const {pokemonDetail} = this.props;
        const name=_.result(pokemonDetail,'name','');
        const imageUrl = _.result(pokemonDetail,'image','');
        const types = _.result(pokemonInfo,'types',[]);
        return(
            <div>
                <CapturePokemonModal show={showModal} name={name} submitSavePokemon={this.submitSavePokemon} warning={warning} isSuccess={isSuccess}/>
                <PokemonDetailCard>
                    <PokemonImage src={imageUrl} alt={name} />
                    <CardTitle>
                        {name}
                    </CardTitle>
                    <div>
                        {
                            _.map(types, (type) =>
                                <div>
                                    {_.result(type,'type.name','')}
                                </div>
                            )
                        }
                    </div>
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