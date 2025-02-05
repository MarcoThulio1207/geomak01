import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../../styles/styleIndex';
import { useNavigation } from "@react-navigation/native";



export default function Login() {

    const navigation = useNavigation()

    function telaCadastro(){
        navigation.navigate('Cadastro')
    }
    function telaHome(){
        navigation.navigate('Home')
    }

  // colocar tela de loading ....

  return (
    <View style={styles.container}>

      <Image
      style={styles.img}
      source={require('../../assets/images/logo.png')}
      />

      <Text style={styles.txtinicial}>Seja bem vindo!</Text>

      <View style={styles.containerInput}>
        
        <TextInput style={styles.txtlogin}
          placeholder="Login:"
          />
      </View>

      <View style={styles.containerInput}>
        <TextInput style={styles.txtsenha}
            placeholder="Senha:"
            secureTextEntry
          />
      </View>

      <TouchableOpacity style={styles.botaoentrar}
        // onPress={() => router.push('/home')}
        onPress={telaHome}
        >
        <View>
          <Text style={styles.txtbotao}>Entrar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaocadastro}
        onPress={telaCadastro}
        >
        <View>
          <Text style={styles.txtbotaocadastro}>Cadastro</Text>
        </View>
      </TouchableOpacity>



    </View>
  );
}

