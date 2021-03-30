import React, {useState} from 'react';
import { TextInput, Text } from 'react-native';
function DigiteSeuNome(){
  let [nome,setNome] = useState("");
  
  return (
    <>
      <Text>
        {nome}
      </Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </>
  );
}

export default DigiteSeuNome;