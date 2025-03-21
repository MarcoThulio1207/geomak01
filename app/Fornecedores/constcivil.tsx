import React from "react";
import { Text, View, Image,ScrollView } from "react-native";
import styles from '../styles/styleIndex';
import Marca from '../Components/Marca'


export default function Constcivil(){
    return(
        <View style={styles.containerHome}>
            <ScrollView>

                <View>
                    <Image
                    source={require('../../assets/images/imgsegmentos/constcivil.png')}
                    style={styles.imgsegmentos02}/>
                    <Text style={styles.txtsegmentos}> Const. Civil</Text>
                </View>

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/construcao_civil/6.png')}
                titulo='Kato'
                descricao01='Equipamentos para construção,'
                descricao02=' escavadeiras, em construção civil.'
                url={'https://drive.google.com/file/d/1VxBUnU8jObYY00COopEjJG9yAuPFLa4e/view?usp=drive_link'}
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/construcao_civil/5.png')}
                titulo='Giken'
                descricao01='Soluções para cravação de '
                descricao02='estacas sem vibração.'
                url={'https://drive.google.com/file/d/1ZLaE4PZggMyidZVzW2q2tKu6-5T9TuiI/view?usp=drive_link'}
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/construcao_civil/3.png')}
                titulo='Conjet'
                descricao01='Equipamentos de hidrodemolição '
                descricao02='para reparo de infraestruturas.'
                url='teste'
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/construcao_civil/7.png')}
                titulo='Dieci'
                descricao01='Veículos de movimentação,'
                descricao02='também usados no setor industrial.'
                url={'https://drive.google.com/file/d/1nAeyFPwt_fWoCGc7orqqLjhh6gbQ41fv/view?usp=drive_link'}
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/construcao_civil/10.png')}
                titulo='Multi One'
                descricao01='Minicarregadeiras multifuncionais '
                descricao02='para construção e paisagismo.'
                url={'https://drive.google.com/file/d/1wHECOIpZoAGYpzdZ6o-ZBAZB8_JzDu92/view?usp=drive_link'}
                />

                <View style={{ marginBottom: 50 }} />
            </ScrollView>
        </View>
    )
}