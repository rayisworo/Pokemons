import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import _ from 'lodash';
const errorLink = onError(({graphqlErrors, networkError}) => {
    !_.isEmpty(graphqlErrors) && _.map(graphqlErrors,(error)=>{
        const {message} = error;
        alert(message)
    });
    networkError && alert(networkError);
});

const link = from ([
    errorLink,
    new HttpLink({
        uri:"https://graphql-pokeapi.graphcdn.app/"
    })
]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});