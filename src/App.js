import { ApolloProvider } from '@apollo/client';
import React, {Component} from 'react';
import PokemonPage from './pages/Pokemon.page';
import {client} from './utils/apolloClient.util';

class App extends Component{
  render(){
    return(
      <ApolloProvider client={client} >
        <PokemonPage/>
      </ApolloProvider>
    )
  }
}

export default App;