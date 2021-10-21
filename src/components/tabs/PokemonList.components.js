import styled from '@emotion/styled';

const POKEMON_CARD__CSS = {
    'borderRadius':'1rem',
    'border':'2px solid #C2D5E4',
    'display':'flex',
    'flexDirection':'column',
    'margin':'5px auto',
    'flex':'0 0 20%',
    'maxWidth':'25%',
    '@media (max-width: 600px)':{
        'flex':'0 0 40%',
        'maxWidth':'50%',
    },
    '&:hover':{
        'backgroundColor':'#58698c90',
        'color':'#ffcc03'
    }
}

const POKEMON_LIST_CONTAINER__CSS = {
    'width':'100%',
    'margin':'20px 0px',
    'display':'flex',
    'flexDirection':'row',
    'flexWrap':'wrap'
}

const POKEMON_NAME__CSS = {
    'width':'100%',
    'margin':'5px 0px',
    'display':'flex',
    'flexDirection':'row',
    'justifyContent':'center',
    'fontSize':'25px',
    'fontWeight':'bold',
    '@media (max-width: 600px)':{
        'fontSize':'20px'
    },
}

const CARD_INFO__CSS = {
    'fontSize':'15px',
    'fontWeight':'600',
    'textAlign':'center'
}

export const PokemonCard = styled.div`${POKEMON_CARD__CSS}`;
export const PokemonListContainer = styled.div`${POKEMON_LIST_CONTAINER__CSS}`;
export const PokemonName = styled.div`${POKEMON_NAME__CSS}`;
export const CardInfo = styled.label`${CARD_INFO__CSS}`;