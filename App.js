import React from 'react';
import { View, StyleSheet } from 'react-native';
import Flexbox1 from './components/layout/FlexboxV1';

function App(){
  return (
    <View style={estilo.App}>
      <Flexbox1 />
    </View>
  );
}

let estilo = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;