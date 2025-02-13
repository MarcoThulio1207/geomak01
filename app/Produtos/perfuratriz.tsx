import React  from "react";
import {View, Text,Image, ScrollView} from 'react-native'
import styles from '../styles/styleIndex'
import Produtos from "../Components/Produtos";

export default function Perfuratriz(){
    return(
        <View style={styles.containerHome}>
            
            <View style={styles.produtoPerfuratriz}>
                <Image
                source={require('../../assets/images/icons-produtos/perfuratriz.png')}
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
                        imagem={require('../../assets/images/perfuratriz/cch1.png')}
                        texto1={'Código: CCH MC5'}
                        texto2={'Descrição: Perfuratriz'}
                        texto3={'Modelo: MC5'}
                        texto4={'Peso Operacional: 7.000 - 8.000 Kg'}
                        />
                        
                    </View>

                    <View>
                    <Produtos
                        imagem={require('../../assets/images/perfuratriz/cch2.png')}
                        texto1={'Código: CCH 602'}
                        texto2={'Descrição: Perfuratriz'}
                        texto3={'Modelo: GEO602'}
                        texto4={'Peso Operacional: 9.000 - 10.000 kg'}
                        />
                    </View>

                    <View>
                        <Produtos
                            imagem={require('../../assets/images/perfuratriz/cch3.png')}
                            texto1={'Código: CCH 601'}
                            texto2={'Descrição: Perfuratriz'}
                            texto3={'Modelo: GEO601'}
                            texto4={'Peso Operacional: 7.000 - 9.000 kg'}
                            />
                    </View>
                </ScrollView>
                
            </View>

        </View>
    )
}
