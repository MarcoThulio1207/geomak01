
// import { useNavigation } from "@react-navigation/native"; // Para navegação
// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// export default function Cadastro() {
//   const [email, setEmail] = useState(""); // Estado para o email
//   const [password, setPassword] = useState(""); // Estado para a senha
//   const [confirmPassword, setConfirmPassword] = useState(""); // Confirmar a senha
//   const navigation = useNavigation(); // Navegação para outras telas

//   const handleCadastro = () => {
//     if (password === confirmPassword) {
//       // Aqui você poderia fazer a lógica de cadastro, por exemplo, com o Firebase
//       console.log("Cadastro realizado com sucesso");
//       navigation.navigate("Index"); // Redirecionar para a tela de login após o cadastro
//     } else {
//       console.log("As senhas não coincidem");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirmar Senha"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleCadastro}>
//         <Text style={styles.buttonText}>Cadastrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     marginBottom: 20,
//     paddingLeft: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   button: {
//     width: "100%",
//     padding: 15,
//     backgroundColor: "#4CAF50",
//     borderRadius: 5,
//   },
//   buttonText: {
//     textAlign: "center",
//     color: "#fff",
//     fontSize: 18,
//   },
// });
