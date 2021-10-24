import styled from '@emotion/styled';
import {CARD_INFO__CSS, TEXT_INPUT__CSS} from '../styles/generalStyles';

const POKEMON_CARD__CSS = {
    'borderRadius':'1rem',
    'border':'2px solid #C2D5E4',
    'display':'flex',
    'flexDirection':'column',
    'margin':'5px auto',
    'padding':'5px',
    'flex':'0 0 15%',
    'maxWidth':'25%',
    'backgroundColor':'#e5e5e540',
    '@media (max-width: 800px)':{
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
    '@media (max-width: 800px)':{
        'fontSize':'20px'
    },
}

const SORT_BAR_CONTAINER__CSS = {
    'margin':'10px',
    'display':'flex',
    'flexDirection':'row',
    'justifyContent':'center',
    '@media (max-width: 800px)':{
        'flexWrap':'wrap'
    },
};

export const PokemonCard = styled.div`${POKEMON_CARD__CSS}`;
export const PokemonListContainer = styled.div`${POKEMON_LIST_CONTAINER__CSS}`;
export const PokemonName = styled.div`${POKEMON_NAME__CSS}`;
export const CardInfo = styled.label`${CARD_INFO__CSS}`;
export const SearchBarContainer = styled.div`${SORT_BAR_CONTAINER__CSS}`;