import React from 'react';
import { Text } from 'react-native';
import Membro from './Membro';
import Estilo from '../estilo';

function Familia(props){
  return (
    <>
      <Text>Membros da família:</Text>
      {props.children}
    </>
  );
}

export default Familia;