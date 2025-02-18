import React , {useState} from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from '../../styles/styleIndex';
import { useRouter } from "expo-router";
import { auth } from '../../../Firebase/FirebaseConection';
import { signOut } from 'firebase/auth';

export default function Home (){

    const router = useRouter()
    const [authUsuario, setAuthUsuario] = useState(null)





    return(
        <View style={styles.containerHome}>
            <View style={styles.imgContainerHome}>
                <Image
                style={styles.imgLogoHome}
                source={require('../../../assets/images/logo02.png')}
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

                    <TouchableOpacity style={styles.Principal02}
                    onPress={()=> router.push('/Produtos/produtos')}
                    >
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

                <View style={styles.areaEndereco}>
                    <View style={styles.areatxtEndereco}/>
                    <Text style={styles.txtEndereco}>Av. Canadá, 474 - Jardim Canada, Nova Lima - MG, 34007-654 - Tel. +55 (31) 2581-9332</Text>
                </View>

            </View>
        </View>
    );
}