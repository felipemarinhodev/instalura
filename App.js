import React from 'react';
import {Image, ScrollView, Text, Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get('screen').width;
const App = () => {
  return (
    <ScrollView>
      <Text>Felipe Marinho</Text>
      <Image source={require('./res/img/alura.jpg')} style={estilo.imagem} />
      <Text>Felipe Marinho</Text>
      <Image source={require('./res/img/alura.jpg')} style={estilo.imagem} />
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  },
});

export default App;
