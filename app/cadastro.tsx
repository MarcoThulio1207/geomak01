import React, {useState} from "react";
import { Text, TouchableOpacity, View, TextInput,Modal, Image,ScrollView } from "react-native";
import styles from '../styles/styleIndex'


export default function Cadastro (){

     const [modaVisivel, setmodalVisivel] = useState(false)



    return(
        <View style={styles.cadastroContainer}>
            
            <Text style={styles.txtcadastro}>Cadastre-se</Text>

            <ScrollView>

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
                    placeholder="Contato:"
                    keyboardType="numeric"
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
            </ScrollView>

            <TouchableOpacity 
            style={styles.btncadastrar}
            onPress={()=> setmodalVisivel(true)}>
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
                        onPress={()=> setmodalVisivel(false)}
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

