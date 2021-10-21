import React, {Component} from 'react';
import {ModalContainer, TextInput, InputLabel, ModalTitle, SaveButton, Warning} from './CapturePokemonModal.components';

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
                            <div>
                                <InputLabel>
                                    Give your Pokemon a nickname:
                                </InputLabel>
                                <TextInput type="text" placeholder="Nickname" id="nickname"/>
                                { warning && <Warning> {warning} </Warning> }
                                <SaveButton onClick={()=>submitSavePokemon()}>
                                    Save
                                </SaveButton>
                            </div> 
                        }
                    </ModalContainer>
                }
            </div>
        )
    }
}

export default CapturePokemonModal;