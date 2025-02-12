import React  from "react";
import {View, Text,Image, ScrollView} from 'react-native'
import styles from '../styles/styleIndex'
import Produtos from '../Components/Produtos'


export default function Ferramental(){
    return(
        <View style={styles.containerHome}>
            <View style={styles.produtoFerramental}>
                <Image
                source={require('../../assets/images/icons-produtos/ferramental.png')}
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
                        imagem={require('../../assets/images/ferramental/broca1.png')}
                        texto1={'Código: BIT 16274'}
                        texto2={'Descrição: Broca Diamantada impregnada'}
                        texto3={'Modelo: HWL - SÉRIE 12'}
                        texto4={'Configuração: TXW - 13MM'}
                        />
                        
                    </View>

                    <View>
                    <Produtos
                        imagem={require('../../assets/images/ferramental/broca3.png')}
                        texto1={'Código: BIT 16274'}
                        texto2={'Descrição: Broca Diamantada impregnada'}
                        texto3={'Modelo: HWL - SÉRIE 09'}
                        texto4={'Configuração: TT - 13MM'}
                        />
                    </View>

                    <View>
                        <Produtos
                            imagem={require('../../assets/images/ferramental/broca2.png')}
                            texto1={'Código: BIT 10047'}
                            texto2={'Descrição: Broca Diamantada impregnada'}
                            texto3={'Modelo: HWL - XT7-8'}
                            texto4={'Configuração: TXW - 13MM'}
                            />
                    </View>

                    <View>
                        <Produtos
                            imagem={require('../../assets/images/ferramental/broca5.png')}
                            texto1={'Código: RMS 22484'}
                            texto2={'Descrição: Calibrador para brocas'}
                            texto3={'Modelo: NWL - RS5'}
                            texto4={'Configuração: RS5'}
                            />
                    </View>

                    <View>
                        <Produtos
                            imagem={require('../../assets/images/ferramental/broca6.png')}
                            texto1={'Código: RDS 20483'}
                            texto2={'Descrição: Sapata Rod Shoe'}
                            texto3={'Modelo: HWL - Super Duty'}
                            texto4={'Configuração: Tamanho H'}
                            />
                    </View>

                    <View>
                        <Produtos
                            imagem={require('../../assets/images/ferramental/broca8.png')}
                            texto1={'Código: BIT 14979'}
                            texto2={'Descrição: Broca Diamantada impregnada'}
                            texto3={'Modelo: NWL - SÉRIE 11'}
                            texto4={'Configuração: TT - 16MM'}
                            />
                    </View>

                </ScrollView>
                
            </View>
        </View>
    )
}