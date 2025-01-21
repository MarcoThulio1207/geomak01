import {  useRouter } from "expo-router";
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../styles/styleIndex';


export default function Index() {

  const router = useRouter();


  return (
    <View style={styles.container}>

      <Image
      style={styles.img}
      source={require('../assets/images/logo.png')}
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
        onPress={() => router.push('/home')}>
        <View>
          <Text style={styles.txtbotao}>Entrar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaocadastro}
        onPress={() => router.push('/cadastro')}
        >
        <View>
          <Text style={styles.txtbotaocadastro}>Cadastro</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}

