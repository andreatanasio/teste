import React from 'react';
import { Text } from 'react-native';
import If from './If';
import Estilo from './estilo';

function UsuarioLogado({usuario = {}}){
  return (
    <>
      <If teste={ usuario != {} && usuario.nome && usuario.email }>
        <Text style={Estilo.txtG}>Usuário logado: </Text>  
        <Text style={Estilo.txtG}>{usuario.nome} - {usuario.email}</Text>
      </If>
    </>
  );
}

export default UsuarioLogado;