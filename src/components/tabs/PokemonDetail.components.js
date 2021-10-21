import styled from '@emotion/styled';

const POKEMON_DETAIL_CARD__CSS = {
    'margin':'10px',
    'backgroundColor':'#e5e5e540',
    'borderRadius':'1rem',
    'border':'3px solid #C2D5E4',
    'display':'flex',
    'flexDirection':'column',
    'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'
}

const IMAGE_CONTAINER__CSS = {
    'width':'25%',
    'alignSelf':'center',
    '@media (max-width: 600px)':{
        'width':'50%'
    }
}

const SEPARATOR__CSS = {
    'borderTop':'3px solid #C2D5E4',
    'width':'90%'
}

const CARD_TITLE__CSS = {
    'fontWeight':'bold',
    'fontSize':'50px',
    'alignSelf':'center'
}

const CATCH_BUTTON__CSS = {
    'borderRadius':'2rem',
    'border':'2px solid #c41a2c',
    'backgroundColor':'#c41a2c',
    'margin':'20px 50px',
    'alignSelf':'center',
    'fontSize':'25px',
    'fontWeight':'bold',
    'padding':'10px 60px',
    '&:hover':{
        'backgroundColor':'#c41a2c ',
        'color':'white',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    '&:active':{
        'backgroundColor': '#c41a2c',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'
    }
}

export const PokemonDetailCard = styled.div`${POKEMON_DETAIL_CARD__CSS}`;
export const PokemonImage = styled.img`${IMAGE_CONTAINER__CSS}`;
export const Separator = styled.hr`${SEPARATOR__CSS}`;
export const CardTitle = styled.h1`${CARD_TITLE__CSS}`;
export const CatchButton = styled.button`${CATCH_BUTTON__CSS}`;