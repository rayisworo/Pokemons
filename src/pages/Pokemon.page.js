import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import _ from 'lodash';
import PokemonScreen from '../components/screens/Pokemon.screen';
import Spinner from '../components/screens/Spinner.screen';
import * as Tabs from '../components/tabs';
import {GET_POKEMONS} from '../state/Queries';

function PokemonPage(){
    const [activeTab, setActiveTab] = useState('PokemonList');
    const [pokemons, setPokemons] = useState({});
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [show, setShow] = useState(100)

    const {loading, data} = useQuery(GET_POKEMONS,{
        variables:{
            limit:show
        }
    });

    const Tab = (props) => {
        const TabsComponent = Tabs[activeTab] || Tabs['PokemonList'];
        return <TabsComponent pokemons={pokemons} pokemonDetail={pokemonDetail} handleChangeShow={handleChangeShow} {...props} />
    }

    const handleChangeTab = (tabName, pokemonDetail = {}) => { 
        setActiveTab(tabName);
        setPokemonDetail(pokemonDetail);
    }

    const handleChangeShow = (option) => {
        const {value} = option;
        setShow(value);
    }

    useEffect(()=>{
        const pokemons = _.result(data,'pokemons.results',[]);
        setPokemons(pokemons);
    }, [data]);

    return(
        <div>
            {
                loading ?
                <Spinner color="#0077BC" />
                :
                <PokemonScreen
                    Tab={Tab}
                    handleChangeTab={handleChangeTab}
                    activeTab={activeTab}
                />
            }
        </div>
    )
}


export default PokemonPage;