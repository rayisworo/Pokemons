import React, {Component} from 'react';
import {TabNav, TabNavActive, TabContainer, MainContainer, MainHeader, HeaderImg} from './Pokemon.components';

class PokemonScreen extends Component{
    render(){
        const {Tab, handleChangeTab, activeTab} = this.props;
        return(
            <MainContainer>
                <MainHeader>
                    <HeaderImg src='/pokemon/assets/pokemon-logo.png'/>
                </MainHeader>
                <TabContainer>
                    {
                        activeTab === 'PokemonList' ?
                        <TabNavActive onClick={()=>handleChangeTab('PokemonList')}>
                            <label>All Pokemons</label>
                        </TabNavActive>
                        :
                        <TabNav onClick={()=>handleChangeTab('PokemonList')}>
                            <label>All Pokemons</label>
                        </TabNav>
                    }
                    {
                        activeTab === 'MyPokemonList' ?
                        <TabNavActive onClick={()=>handleChangeTab('MyPokemonList')}>
                            <label> My Pokemons </label>
                        </TabNavActive>
                        :
                        <TabNav onClick={()=>handleChangeTab('MyPokemonList')}>
                            <label> My Pokemons </label>
                        </TabNav>
                    }
                </TabContainer>
                <Tab handleChangeTab={handleChangeTab}/>
            </MainContainer>
        )
    }
}

export default PokemonScreen;