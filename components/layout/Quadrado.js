import React from 'react';
import { View, StyleSheet } from 'react-native';

function Quadrado(props){
  const lado = props.lado || 50;
  
  const estilo = StyleSheet.create({
    Quadrado: {
      height: lado,
      width: lado,
      backgroundColor: props.cor || '#000'
    }
  });

  return (
    <View style={estilo.Quadrado} />
  )
}

export default Quadrado;

