import React from "react";
import { Text, View, Image,ScrollView } from "react-native";
import styles from '../styles/styleIndex';
import Marca from '../Components/Marca'

export default function Laboratorial(){
    return(
        <View style={styles.containerHome}>
            <ScrollView>

                <View>
                    <Image
                    source={require('../../assets/images/imgsegmentos/laboratorial.png')}
                    style={styles.imgsegmentos02}
                    />
                    <Text style={styles.txtsegmentos}>Laboratorial</Text>
                </View>

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/laboratorial/8.png')}
                titulo='Matest'
                descricao01='Equipamentos para ensaios '
                descricao02='de materiais (concreto, asfalto, solo).'
                url={'https://drive.google.com/file/d/1N2Un1xmsY8Hg6UjS4HfOLO_N9XVxOAM4/view?usp=drive_link'}
                />

            </ScrollView>
        </View>
    )
}