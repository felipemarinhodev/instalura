import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import Cabecalho from './src/Components/Cabecalho';

const largura = Dimensions.get('screen').width;
const informacoes = [{id: 1, usuario: 'Ricardo'}, {id: 2, usuario: 'Marina'}];
const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        // keyExtractor={(item, index) => index.toString()} -> Opção 1
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <>
            <Cabecalho nomeUsuario={item.usuario} />
            <Image
              source={require('./res/img/alura.jpg')}
              style={estilo.imagem}
            />
          </>
        )}
      />
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
