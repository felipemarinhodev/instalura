import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import {Cabecalho} from './src/Components/Cabecalho';
import {Foto} from './src/Components/Foto';

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
            <Foto />
          </>
        )}
      />
    </ScrollView>
  );
};

export default App;
