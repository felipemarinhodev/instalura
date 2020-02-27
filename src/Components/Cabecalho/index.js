import React from 'react';
import {Text, Image} from 'react-native';

import {estilo} from './styles';

const Cabecalho = ({nomeUsuario}) => {
  return (
    <>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={estilo.fotoUsuario}
      />
      <Text>{nomeUsuario}</Text>
    </>
  );
};

export default Cabecalho;
