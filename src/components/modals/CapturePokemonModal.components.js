import styled from '@emotion/styled';
import { BUTTON__CSS } from '../styles/generalStyles';

const MODAL_CONTAINER__CSS = {
    'position':'fixed',
    'zIndex':'1',
    'padding':'20px',
    'border':'2px solid #C2D5E4',
    'borderRadius':'1rem',
    'top':'40%',
    'left':'25%',
    'right':'25%',
    'backgroundColor':'rgba(255,255,255,1)',
    'boxShadow': '5px 10px 20px 0px rgba(0, 0, 0, 0.4)',
    'display':'flex',
    'flexDirection':'column',
    'justifyContent':'center',
    '@media (max-width: 600px)':{
        'top':'30%',
        'left':'15%',
        'right':'15%',
    }
};

const MODAL_TITLE__CSS = {
    'textAlign':'center',
    'marginBottom':'30px',
    '@media (max-width: 600px)':{
        'fontSize':'20px',
    }
};

const TEXT_INPUT__CSS = {
    'borderRadius':'2rem',
    'border':'1px solid rgba(0,0,0,0.4)',
    'fontSize':'25px',
    'padding':'5px 20px',
    '@media (max-width: 600px)':{
        'fontSize':'20px',
    }
};

const INPUT_LABEL__CSS = {
    'margin':'10px 20px',
    'fontSize':'25px',
    '@media (max-width: 600px)':{
        'margin':'10px 10px',
        'fontSize':'15px',
    }
};

const SAVE_BUTTON__CSS = {
    ...BUTTON__CSS,
    'border':'2px solid #79AD75',
    'backgroundColor':'#79AD75',
    '&:hover':{
        'backgroundColor':'#79AD75 ',
        'color':'white',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    '&:active':{
        'backgroundColor': '#79AD75',
        'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'
    }
}

const WARNING__CSS = {
    ...INPUT_LABEL__CSS,
    'color':'red'
}

export const ModalContainer = styled.div`${MODAL_CONTAINER__CSS}`;
export const ModalTitle = styled.h1`${MODAL_TITLE__CSS}`;
export const TextInput = styled.input`${TEXT_INPUT__CSS}`;
export const InputLabel = styled.label`${INPUT_LABEL__CSS}`;
export const SaveButton = styled.button`${SAVE_BUTTON__CSS}`;
export const Warning = styled.label`${WARNING__CSS}`;