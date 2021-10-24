import React, {Component} from 'react';
import {ModalContainer, TextInput, InputLabel, ModalTitle, SaveButton, Warning, FieldContainer} from './CapturePokemonModal.components';

class CapturePokemonModal extends Component {
    render(){
        const {show, name = '', submitSavePokemon, warning, isSuccess} = this.props;
        return(
            <div>
                {show &&
                    <ModalContainer>
                        <ModalTitle>
                            {isSuccess ? `Congratulations, you captured a ${name}` : 'Sorry, try again'}
                        </ModalTitle>
                        {isSuccess &&
                            <FieldContainer>
                                <InputLabel>
                                    Give your Pokemon a nickname:
                                </InputLabel>
                                <TextInput type="text" placeholder="Nickname" id="nickname" autoFocus/>
                                { warning && <Warning> {warning} </Warning> }
                                <SaveButton type="submit" onClick={()=>submitSavePokemon()}>
                                    Save
                                </SaveButton>
                            </FieldContainer> 
                        }
                    </ModalContainer>
                }
            </div>
        )
    }
}

export default CapturePokemonModal;