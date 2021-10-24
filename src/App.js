import { ApolloProvider } from '@apollo/client';
import React, {Component} from 'react';
import PokemonPage from './pages/Pokemon.page';
import {client} from './utils/apolloClient.util';
import {Notifications} from 'react-push-notification';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component{
  render(){
    return(
      <div>
        <ToastContainer
          position="top-right"
          toastClassName="dark-toast"
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick
          pauseOnFocusLoss
        />
        <Notifications/>
        <ApolloProvider client={client} >
          <PokemonPage/>
        </ApolloProvider>
      </div>
    )
  }
}

export default App;