import React  from "react";
import {View, Text,Image, ScrollView} from 'react-native'
import styles from '../styles/styleIndex'
import Produtos from "../Components/Produtos";

export default function Lab(){
    return(
        <View style={styles.containerHome}>
        <View style={styles.produtoLab}>
            <Image
            source={require('../../assets/images/icons-produtos/lab.png')}
            style={styles.imgFerramental}
            />
        </View>

        <View style={styles.areaItens}>
        <Text style={styles.txtarrasta}>Arraste para Visualizar</Text>

            <ScrollView
            horizontal={true}
            >
                <View>
                    <Produtos
                    imagem={require('../../assets/images/lab/lab1.png')}
                    texto1={'Código: MTS 00126'}
                    texto2={'Descrição: Equipamento Digital - 100kn'}
                    texto3={'Modelo: A126'}
                    texto4={'Capacidade de Carga: Até 100 Kn'}
                    />
                    
                </View>

            </ScrollView>
            
        </View>
    </View>
    )
}