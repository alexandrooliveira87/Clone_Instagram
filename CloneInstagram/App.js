
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/Lista/index.js';

class CloneInstagram extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
    {
        "id": "1",
        "nome": "Carla Mendes",
        "descricao": "Hoje o dia foi de muita produtividade!",
        "imgperfil": "https://sujeitoprogramador.com/instareact/fotoPerfil4.png",
        "imgPublicacao": "https://sujeitoprogramador.com/instareact/foto6.png",
        "likeada": true,
        "likers": 12
    },
    {
        "id": "2",
        "nome": "Rafael Silva",
        "descricao": "Curtindo um pouco de natureza.",
        "imgperfil": "https://sujeitoprogramador.com/instareact/fotoPerfil5.png",
        "imgPublicacao": "https://sujeitoprogramador.com/instareact/foto7.png",
        "likeada": false,
        "likers": 8
    },
    {
        "id": "3",
        "nome": "Aline Souza",
        "descricao": "Finalizando mais um projeto com sucesso!",
        "imgperfil": "https://sujeitoprogramador.com/instareact/fotoPerfil6.png",
        "imgPublicacao": "https://sujeitoprogramador.com/instareact/foto8.png",
        "likeada": true,
        "likers": 25
    },
    {
        "id": "4",
        "nome": "Bruno Oliveira",
        "descricao": "Nada como uma boa xícara de café!",
        "imgperfil": "https://sujeitoprogramador.com/instareact/fotoPerfil7.png",
        "imgPublicacao": "https://sujeitoprogramador.com/instareact/foto9.png",
        "likeada": false,
        "likers": 10
    },
    {
        "id": "5",
        "nome": "Fernanda Costa",
        "descricao": "Explorando novas tecnologias!",
        "imgperfil": "https://sujeitoprogramador.com/instareact/fotoPerfil8.png",
        "imgPublicacao": "https://sujeitoprogramador.com/instareact/foto10.png",
        "likeada": true,
        "likers": 45
    }
]
     };
 
  }

  render() {
    return (
      <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
          source={require('./src/img/send.png')}
          style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={this.state.feed}
      renderItem={ ({item}) => <Lista data={item} /> }
      />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send:{
    width: 23,
    height: 23
  }

});

export default CloneInstagram;