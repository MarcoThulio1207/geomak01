import React from "react";
import {View, Text, Image, TouchableOpacity,} from 'react-native'
import styles from '../styles/styleIndex'
import { useRouter } from "expo-router";


export default function Produtos(){
    const router = useRouter()


    return(
        <View style={styles.containerHome}>
            <Text style={styles.txtcontainerPadrao}>Produtos</Text>
            <View style={styles.containercentralPadrao}>
                <Image
                source={require('../../assets/images/imgHome/produtos.png')}
                style={styles.imgcontainerPadrao}
                />
                <Text style={styles.txtsegmento}>Selecione um segmento:</Text>
            </View>


            <View style={styles.areaProduto}>
                <TouchableOpacity style={styles.btnProduto}
                onPress={() => router.push('/Produtos/ferramental')}
                >
                    <Image
                    source={require('../../assets/images/icons-produtos/ferramental.png')}
                    style={styles.imgProdutos}
                    />
                <Text style={styles.txtProduto}>Feramental</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaProduto1}>
                <TouchableOpacity style={styles.btnProduto}>
                    <Image
                    source={require('../../assets/images/icons-produtos/perfuratriz.png')}
                    style={styles.imgProdutos1}
                    />
                <Text style={styles.txtProduto}>Perfuratrizes</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaProduto2}>
                <TouchableOpacity style={styles.btnProduto}>
                    <Image
                    source={require('../../assets/images/icons-produtos/mini.png')}
                    style={styles.imgProdutos0}
                    />
                <Text style={styles.txtProduto0}>Mini Carregadeiras</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaProduto3}>
                <TouchableOpacity style={styles.btnProduto}>
                    <Image
                    source={require('../../assets/images/icons-produtos/escavadeiras.png')}
                    style={styles.imgProdutos2}
                    />
                <Text style={styles.txtProduto}>Escavadeiras</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}