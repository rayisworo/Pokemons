import styled from "@emotion/styled";
import { BUTTON__CSS, CARD_INFO__CSS } from "../styles/generalStyles";

const POKEMON_CARD_HORIZONTAL__CSS = {
    'margin':'20px auto',
    'padding':'10px',
    'borderRadius':'1rem',
    'border':'2px solid #C2D5E4',
    'display':'flex',
    'flexDirection':'row',
    'justifyContent':'between',
    'width':'90%',
    'backgroundColor':'#e5e5e540',
    '@media (max-width: 800px)':{
        'flexWrap':'wrap',
        'justifyContent':'center'
    },
}

const POKEMON_IMAGE__CSS = {
    'width':'500px',
    'alignSelf':'center',
    '@media (max-width: 600px)':{
        'width':'150px !important'
    },
    '@media (max-width: 800px)':{
        'width':'200px'
    },
    '@media (min-width: 1000px)':{
        'width':'500px'
    }
}

const INFO_CONTAINER__CSS ={
    'display':'flex',
    'flexDirection':'column',
    'margin':'auto 10px',
    'width':'100%',
}

const POKEMON_NICKNAME__CSS = {
    'fontSize':'20px',
    'fontWeight':'bold',
    'textAlign':'left',
    '@media (max-width: 800px)':{
        'textAlign':'center',
    },
}

const ADDITIONAL_INFO__CSS = {
    ...CARD_INFO__CSS,
    'fontWeight':'normal',
    'textAlign':'left',
    '@media (max-width: 800px)':{
        'textAlign':'center',
    },
}

const BUTTON_CONTAINER__CSS = {
    'display':'flex',
    'flexDirection':'row',
    'margin':'auto 10px',
    'width':'100%',
    'justifyContent':'flex-end',
    '@media (max-width: 800px)':{
        'justifyContent':'center'
    },
}

const RELEASE_BUTTON__CSS = {
    ...BUTTON__CSS,
    'border':'2px solid #c41a2c',
    'backgroundColor':'#c41a2c',
    '&:hover':{
        'backgroundColor':'#c41a2c ',
        'color':'white',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    '&:active':{
        'backgroundColor': '#c41a2c',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'
    },
    '@media (max-width: 800px)':{
        'fontSize':'20px'
    },
}

export const PokemonCardHorizontal = styled.div`${POKEMON_CARD_HORIZONTAL__CSS}`;
export const PokemonImage = styled.img`${POKEMON_IMAGE__CSS}`; 
export const PokemonNickname = styled.label`${POKEMON_NICKNAME__CSS}`;
export const InfoContainer = styled.div`${INFO_CONTAINER__CSS}`;
export const AdditionalInfo = styled.label`${ADDITIONAL_INFO__CSS}`;
export const ButtonContainer = styled.div`${BUTTON_CONTAINER__CSS}`;
export const ReleaseButton = styled.button`${RELEASE_BUTTON__CSS}`;