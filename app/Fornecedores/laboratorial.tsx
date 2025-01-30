import React from "react";
import { Text, View, Image,ScrollView } from "react-native";
import styles from '../../styles/styleIndex';
import Marca from '../../Components/Marca'

export default function Laboratorial(){
    return(
        <View style={styles.containerHome}>
            <ScrollView>

                <View>
                    <Image
                    source={require('../../assets/images/imgsegmentos/laboratorial.png')}
                    style={styles.imgsegmentos}
                    />
                    <Text style={styles.txtsegmentos}>Laboratorial</Text>
                </View>

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/laboratorial/8.png')}
                titulo='Matest'
                descricao01='Equipamentos para ensaios '
                descricao02='de materiais (concreto, asfalto, solo).'
                />

            </ScrollView>
        </View>
    )
}