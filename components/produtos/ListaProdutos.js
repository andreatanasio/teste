import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

function ListaProdutos(){
  return (
    <>
      <Text style={Estilo.txtG}>Lista de produtos:</Text>
      {produtos.map(p => {
        return <Text key={p.id}>{p.id} - {p.nome} - {p.preco}</Text>
      })}
    </>
  );
}

export default ListaProdutos;