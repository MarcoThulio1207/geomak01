import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import styles from '../styles/styleIndex'

export default function Cadastro (){
    return(
        <View style={styles.cadastroContainer}>
            
            <Text style={styles.txtcadastro}>Cadastre-se</Text>

            <View style={styles.containerInputs}>
                <TextInput style={styles.textInputs}
                placeholder="Nome:"
                />
            </View>

            <View style={styles.containerInputs}>
                <TextInput style={styles.textInputs}
                placeholder="Email:"
                />
            </View>

            <View style={styles.containerInputs}>
                <TextInput style={styles.textInputs}
                placeholder="Empresa:"
                />
            </View>

            <View style={styles.containerInputs}>
                <TextInput style={styles.textInputs}
                placeholder="Senha:"
                secureTextEntry
                />
            </View>

            <View style={styles.containerInputs}>
                <TextInput style={styles.textInputs}
                placeholder="Repetir Senha:"
                secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.btncadastrar}>
                <View>
                    <Text style={styles.txtcadastrar}>Cadastrar</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

