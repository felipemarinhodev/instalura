import React from 'react';
import {Image} from 'react-native';

import estilo from './styles';

const Foto = () => {
  return (
    <Image
      source={require('../../../res/img/alura.jpg')}
      style={estilo.imagem}
    />
  );
};

export default Foto;
