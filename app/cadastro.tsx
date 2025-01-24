import React, {useState} from "react";
import { Text, TouchableOpacity, View, TextInput,Modal, Image,ScrollView, Easing } from "react-native";
import styles from '../styles/styleIndex'
import {  router, useRouter } from "expo-router";


export default function Cadastro (){

     const [modaVisivel, setmodalVisivel] = useState(false)
     const [nome, setNome] = useState('')
     const [email, setEmail] = useState('')
     const [empresa, setEmpresa] = useState('')
     const [contato, setContato] = useState('')
     const [senha, setSenha] = useState('')
     const [rsenha, setRsenha] = useState('')
     const router = useRouter();


    function cadastro(){
        if (nome  === '' || email === '' || empresa === '' || contato === ''||  senha  === '' ||  rsenha === '' || senha !== rsenha){
            alert ('Preencha todos os campos CORRETAMENTE')
        }

        else{
            setmodalVisivel(true)
        }
    }

    function limpaDados (){
        setNome ('');
        setEmail('')
        setEmpresa('')
        setContato('')
        setSenha('')
        setRsenha('')
        
    }

    function fecharModal(){
        setmodalVisivel(false)
        limpaDados();
    }


    return(
        <View style={styles.cadastroContainer}>
            
            <Text style={styles.txtcadastro}>Cadastre-se</Text>

            <ScrollView>

                <View style={styles.containerInputs}>
                    <TextInput style={styles.textInputs}
                    placeholder="Nome:"
                    value={nome}
                    onChangeText={(texto)=> setNome (texto)}
                    />
                </View>

                <View style={styles.containerInputs}>
                    <TextInput style={styles.textInputs}
                    placeholder="Email:"
                    value={email}
                    onChangeText={(texto)=> setEmail(texto)}
                    />
                </View>

                <View style={styles.containerInputs}>
                    <TextInput style={styles.textInputs}
                    placeholder="Empresa:"
                    value={empresa}
                    onChangeText={(texto)=> setEmpresa(texto)}
                    />
                </View>

                <View style={styles.containerInputs}>
                    <TextInput style={styles.textInputs}
                    placeholder="Contato:"
                    keyboardType="numeric"
                    value={contato}
                    onChangeText={(texto)=> setContato(texto)}
                    />
                </View>

                <View style={styles.containerInputs}>
                    <TextInput style={styles.textInputs}
                    placeholder="Senha:"
                    secureTextEntry
                    value={senha}
                    onChangeText={(texto)=> setSenha(texto)}
                    />
                </View>

                <View style={styles.containerInputs}>
                    <TextInput style={styles.textInputs}
                    placeholder="Repetir Senha:"
                    value={rsenha}
                    onChangeText={(texto)=> setRsenha(texto)}
                    secureTextEntry
                    />
                </View>
            </ScrollView>

            <TouchableOpacity 
            style={styles.btncadastrar}
            onPress={()=> cadastro()}
            >
                <View>
                    <Text style={styles.txtcadastrar}>Cadastrar</Text>
                </View>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent={true}
            visible={modaVisivel}
            onRequestClose={()=> setmodalVisivel(false)}
            >
                <View style={styles.modal}> 
                    <View style={styles.viewmodal}>
                        <Text style={styles.txtmodal01}>Cadastrado com Sucesso!</Text>
                        <Image
                        style={styles.imgmodal}
                        source={require('../assets/images/check.png')}
                        />
                        <TouchableOpacity
                        onPress={fecharModal}
                        style={styles.btnmodal}
                        >
                            <Text style={styles.txtmodal02}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

