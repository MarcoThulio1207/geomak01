import React  from "react";
import {View, Text,Image, ScrollView} from 'react-native'
import styles from '../styles/styleIndex'
import Produtos from "../Components/Produtos";

export default function Escavadeiras(){
    return(
        <View style={styles.containerHome}>
        <View style={styles.produtoEscavadeira}>
            <Image
            source={require('../../assets/images/icons-produtos/escavadeiras.png')}
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
                    imagem={require('../../assets/images/escavadeira/kt1.png')}
                    texto1={'Código: HD50V5'}
                    texto2={'Descrição: Mini Escavadeira'}
                    texto3={'Modelo: HD50V5'}
                    texto4={'Peso Operacional: 4.840 Kg'}
                    />
                    
                </View>

                <View>
                <Produtos
                    imagem={require('../../assets/images/escavadeira/kt22.png')}
                    texto1={'Código: HD09V5'}
                    texto2={'Descrição: Mini Escavadeira'}
                    texto3={'Modelo: HD09V5'}
                    texto4={'Peso Operacional: 948 Kg'}
                    />
                </View>

                <View>
                    <Produtos
                        imagem={require('../../assets/images/escavadeira/kt33.png')}
                        texto1={'Código: HD33V5'}
                        texto2={'Descrição: Mini Escavadeira'}
                        texto3={'Modelo: HD33V5'}
                        texto4={'Peso Operacional: 3.095 Kg'}
                        />
                </View>
            </ScrollView>
            
        </View>
    </View>
    )
}