import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from '../styles/styleIndex';
import { useRouter } from "expo-router";




export default function Fornecedores (){

    const router = useRouter()

    return(

    <View style={styles.containerHome}>
        <Text style={styles.txtcontainerPadrao}>Fornecedores</Text>
        <View style={styles.containercentralPadrao}>
            <Image
            source={require('../../assets/images/imgHome/fornecedores.png')}
            style={styles.imgcontainerPadrao}
            />
            <Text style={styles.txtsegmento}>Selecione um segmento:</Text>
        </View>

    
        <View>
            <TouchableOpacity style={styles.btnSegmentos01}
            onPress={()=> router.push('/Fornecedores/geotecnia')}
            >
                <Image
                source={require('../../assets/images/imgsegmentos/geotecnia.png')}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>Geotecnia</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSegmentos02}
            onPress={()=> router.push('/Fornecedores/constcivil')}
            >
                <Image
                source={require('../../assets/images/imgsegmentos/constcivil.png')}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>Const. Civil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSegmentos03}
            onPress={()=> router.push('/Fornecedores/industrial')}
            >
                <Image
                source={require('../../assets/images/imgsegmentos/industrial.png')}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>Industrial</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSegmentos04}
            onPress={()=> router.push('/Fornecedores/laboratorial')}
            >
                <Image
                source={require('../../assets/images/imgsegmentos/laboratorial.png')}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>Laboratorial</Text>
            </TouchableOpacity>

        </View>
    </View>

    )
}