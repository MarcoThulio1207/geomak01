import React  from "react";
import {View, Text,Image, ScrollView} from 'react-native'
import styles from '../styles/styleIndex'
import Produtos from "../Components/Produtos";

export default function Mini(){
    return(
        <View style={styles.containerHome}>
            <View style={styles.produtomini}>
                <Image
                source={require('../../assets/images/icons-produtos/mini.png')}
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
                        imagem={require('../../assets/images/mini/mini1.png')}
                        texto1={'Código: MO85k'}
                        texto2={'Descrição: Mini Carregadeira Articulada'}
                        texto3={'Modelo: 8.5k'}
                        texto4={'Capacidade Máxima de carga: 1.640 kg'}
                        />
                        
                    </View>

                    <View>
                    <Produtos
                        imagem={require('../../assets/images/mini/mini4.png')}
                        texto1={'Código: MO53k'}
                        texto2={'Descrição: Mini Carregadeira Articulada'}
                        texto3={'Modelo: 5.3k'}
                        texto4={'Capacidade Máxima de carga: 1.030 kg'}
                        />
                    </View>

                    <View>
                        <Produtos
                            imagem={require('../../assets/images/mini/mini3.png')}
                            texto1={'Código: MO116k'}
                            texto2={'Descrição: Mini Carregadeira Articulada'}
                            texto3={'Modelo: 11.6k'}
                            texto4={'Capacidade Máxima de carga: 2.540 kg'}
                            />
                    </View>
                </ScrollView>
                
            </View>
        </View>
    )
}