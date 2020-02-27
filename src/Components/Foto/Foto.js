import React, {Fragment} from 'react';
import {Image, Text} from 'react-native';

import estilo from './styles';

const Foto = () => {
  return (
    <Fragment>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={estilo.imagem}
      />
      <Text>Descrição da foto</Text>
    </Fragment>
  );
};

export default Foto;
