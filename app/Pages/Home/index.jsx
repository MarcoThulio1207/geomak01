import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from '../../styles/styleIndex';
import { useRouter } from "expo-router";

export default function Home (){

    const router = useRouter()



    return(
        <View style={styles.containerHome}>
            <View style={styles.imgContainerHome}>
                <Image
                style={styles.imgLogoHome}
                source={require('../../../assets/images/imgHome/logo.png')}
                />

                <Text style={styles.txtHome}>Home</Text>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.Principal01}
                    onPress={()=> router.push('../Fornecedores/fornecedores')}
                    >
                        <Image
                        source={require('../../../assets/images/imgHome/fornecedores.png')}
                        style={styles.imgbtn}
                        />
                        <Text style={styles.txtbtnPrincipal}>Fornecedores</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Principal02}>
                        <Image 
                        source={require('../../../assets/images/imgHome/produtos.png')}
                        style={styles.imgbtn}
                        />
                        <Text style={styles.txtbtnPrincipal}>Produtos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Principal03}
                    onPress={()=> router.push('../Contato/contato')}
                    >
                        <Image 
                        source={require('../../../assets/images/imgHome/contato.png')}
                        style={styles.imgbtn}
                        />
                        <Text style={styles.txtbtnPrincipal}>Contato</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Principal04}
                    onPress={() => router.push('/RedesSociais/redes')}
                    >
                        <Image
                        source={require('../../../assets/images/imgHome/redesocial.png')}
                        style={styles.imgbtn}/>
                        <Text style={styles.txtbtnPrincipal}>Redes Sociais</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
}