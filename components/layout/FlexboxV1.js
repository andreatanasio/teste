import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

function FlexboxV1(){
  return (
    <View style={estilo.FlexV1}>
      <Quadrado cor="#ff0000" lado={10} />
      <Quadrado cor="#ff00ff" lado={20} />
      <Quadrado cor="#00ff00" lado={30} />
      <Quadrado cor="#ffff00" lado={40} />
      <Quadrado cor="#0000ff" lado={50} />
    </View>
  );
}

export default FlexboxV1;

const estilo = StyleSheet.create({
  FlexV1: {
    height: 350,
    width: '100%',
    backgroundColor: '#000',
    flexDirection: "row"
  }
});