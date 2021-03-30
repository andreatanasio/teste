import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

function Membro(props){
  return (
    <Text style={Estilo.txtG}>{props.nome} {props.sobrenome}</Text>
  );
}

export default Membro;