import React, {Component} from 'react';
import { Select, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import _ from 'lodash';

const PICKER_CONTAINER__CSS = {
    'margin':'5px',
    '@media (max-width: 800px)':{
        'margin':'3px'
    },
}

const PickerContainer = styled.div`${PICKER_CONTAINER__CSS}`;

class Picker extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected:''
        }
    }

    handleChange = (option) => {
        const {customChangeHandler} = this.props;
        this.setState({
            selected:_.result(option,'value','')
        });
        customChangeHandler(option);
    }

    render(){
        const {label="", customChangeHandler, options = [], name, ...additionalProps} = this.props;
        return(
            <PickerContainer>
                <Select
                    labelId={name}
                    defaultValue={1}
                    onChange = {() => !customChangeHandler && _.noop()}
                    {...additionalProps}
                >
                    <MenuItem value={1}>
                        {label}
                    </MenuItem>
                    {
                        _.map(options, (option, i) => 
                            <MenuItem
                                key = {i}
                                value = {_.result(option,'value','')}
                                onClick={()=>this.handleChange(option)}
                            >
                                {_.result(option,'label','')}
                            </MenuItem>
                        )
                    }
                </Select>
            </PickerContainer>
        )
    }
}

export default Picker;
