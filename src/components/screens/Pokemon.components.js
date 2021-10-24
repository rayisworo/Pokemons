import styled from '@emotion/styled';

const MAIN_CONTAINER__CSS = {
    'height':'100vh',
    'width':'100%'
}

const MAIN_HEADER__CSS = {
    'backgroundColor':'#0077BC',
    'display':'flex',
    'flexDirection':'row',
    'padding':'10px',
    'justifyContent':'center',
    '@media (max-width: 800px)':{
        'height':'50px'
    }
}

const HEADER_IMG__CSS = {
    'height':'80px',
    '@media (max-width: 800px)':{
        'height':'50px'
    }
}

const TAB_NAV__CSS = {
    'margin':'5px 20px',
    'padding':'10px',
    'color':'white',
    'borderRadius':'0.5rem',
    '&:hover':{
        'backgroundColor':'rgba(255,255,255,0.2)',
    }
};

const TAB_NAV_ACTIVE__CSS = {
    'margin':'5px 20px',
    'padding':'10px',
    'color':'black',
    'borderRadius':'0.5rem',
    'backgroundColor':'rgba(255,255,255,0.8)',
};

const TAB_CONTAINER__CSS = {
    'backgroundColor':'#065A9C',
    'margin':'10 50%',
    'display':'flex',
    'flexDirection':'row',
    'justifyContent':'center',
}

export const MainContainer = styled.div`${MAIN_CONTAINER__CSS}`;
export const MainHeader = styled.div`${MAIN_HEADER__CSS}`;
export const HeaderImg = styled.img`${HEADER_IMG__CSS}`;
export const TabNav = styled.div`${TAB_NAV__CSS}`;
export const TabNavActive = styled.div`${TAB_NAV_ACTIVE__CSS}`;
export const TabContainer = styled.div`${TAB_CONTAINER__CSS}`;