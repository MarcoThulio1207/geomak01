import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import styles from '../../styles/styleIndex';
import { useNavigation } from "@react-navigation/native";
import { auth } from '../../../Firebase/FirebaseConection';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  function telaCadastro() {
    navigation.navigate('Cadastro');
  }

  async function logar() {
    const emailFormatado = email.trim();

    if (emailFormatado === "" || senha === "") {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailFormatado, senha);
      console.log("Usuário logado:", userCredential.user);
      Alert.alert("Sucesso!", "Login realizado com sucesso!");
      navigation.navigate('Home');
    } catch (error) {
      console.log("Erro ao logar:", error);

      let mensagemErro = "Ocorreu um erro ao fazer login.";

      switch (error) {
        case "auth/invalid-email":
          mensagemErro = "E-mail inválido.";
          break;
        case "auth/user-disabled":
          mensagemErro = "Este usuário foi desativado.";
          break;
        case "auth/user-not-found":
          mensagemErro = "Usuário não encontrado.";
          break;
        case "auth/wrong-password":
          mensagemErro = "Senha incorreta.";
          break;
        default:
          mensagemErro = "Erro ao fazer login. Verifique suas credenciais.";
      }

      Alert.alert("Erro", mensagemErro);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/logo.png')}
      />

      <Text style={styles.txtinicial}>Seja bem-vindo!</Text>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.txtlogin}
          placeholder="Login:"
          value={email}
          onChangeText={(texto) => setEmail(texto)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.txtsenha}
          placeholder="Senha:"
          secureTextEntry
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
        />
      </View>

      <TouchableOpacity style={styles.botaoentrar} onPress={logar}>
        <View>
          <Text style={styles.txtbotao}>Entrar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaocadastro} onPress={telaCadastro}>
        <View>
          <Text style={styles.txtbotaocadastro}>Cadastro</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
