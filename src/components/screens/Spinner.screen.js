import React, {Component} from 'react';
import { CircleLoader } from 'react-spinners';
import {SpinnerContainer} from './Spinner.components';

class Spinner extends Component{
    render(){
        const {color} = this.props;
        return(
            <SpinnerContainer>
                <CircleLoader color={color}/>
            </SpinnerContainer>
        )
    }
}

export default Spinner;