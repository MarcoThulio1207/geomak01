import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../styles/styleIndex';




export default function Index() {

  const navigation = useNavigation();

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

      <TouchableOpacity style={styles.botaoentrar}>
        <View>
          <Text style={styles.txtbotao}>Entrar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaocadastro}
      onPress={() => navigation.navigate("Cadastro")}>
        <View>
          <Text style={styles.txtbotaocadastro}>Cadastrar</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}

