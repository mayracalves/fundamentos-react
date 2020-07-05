import React from 'react';
import Filho from './Filho';

export default props =>
    <div>
        <Filho sobrenome="Alves"><strong>Bilí</strong></Filho>
        <Filho sobrenome="Thurmann">Francisco</Filho>
        <Filho sobrenome="Rocha">Miro</Filho>
        <Filho {...props}>João</Filho>
        <Filho sobrenome={props.sobrenome}>Pedro</Filho>
    </div>