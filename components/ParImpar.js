import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

function ParImpar({num = 0}){
  return (
      <>
        <Text style={Estilo.txtG}>O resultado é: </Text>
        <Text style={Estilo.txtG}>
          {num % 2 == 0 
            ? "Par"
            : "Ímpar"}
        </Text>
      </>
    );
}

export default ParImpar;