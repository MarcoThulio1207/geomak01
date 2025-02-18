import React from "react";
import { Text, View, Image,ScrollView } from "react-native";
import styles from '../styles/styleIndex';
import Marca from '../Components/Marca'

export default function Geotecnia(){
    return(
        <View style={styles.containerHome}>
            <ScrollView>

                <View>
                    <Image
                    source={require('../../assets/images/imgsegmentos/geotecnia.png')}
                    style={styles.imgsegmentos02}
                    />
                    <Text style={styles.txtsegmentos}>Geotecnia</Text>
                </View>

                <Marca
                    imagem = {require('../../assets/images/icons-fornecedores/geotecnia/1.png')}
                    titulo = 'Comacchio'
                    descricao01 = 'Equipamentos de perfuração'
                    descricao02 = 'para geotecnia e fundações.'
                    url={'https://drive.google.com/file/d/10oP3Rlgf7uhcpTrdzwYxVPEGhTlI3qVR/view?usp=drive_link'}
                />

                <Marca
                    imagem = {require('../../assets/images/icons-fornecedores/geotecnia/13.png')}
                    titulo = 'Dimatec'
                    descricao01 = 'Ferramentas de perfuração'
                    descricao02 = 'para sondagem e geotecnia.'
                    url={'https://drive.google.com/file/d/1xs0LJqYHZCUnkS3IkiFzhaF_UkM3fqVg/view?usp=drive_link'}
                />

                <Marca
                    imagem = {require('../../assets/images/icons-fornecedores/geotecnia/4.png')}
                    titulo = 'Innra'
                    descricao01 = 'Soluções de automação industria'
                    descricao02 = 'e controle de processos.'
                    url={'https://drive.google.com/file/d/1vt0RsC-hWnUjteJjEJDVYAAavOWO_7YU/view?usp=drive_link'}
                />

                <Marca
                    imagem = {require('../../assets/images/icons-fornecedores/geotecnia/12.png')}
                    titulo = 'Technidrill'
                    descricao01 = 'Soluções de perfuração geotecnica'
                    descricao02 = 'e exploração mineral.'
                    url='teste'
                />

                <Marca
                    imagem = {require('../../assets/images/icons-fornecedores/geotecnia/14.png')}
                    titulo = 'Ocma DrillTech'
                    descricao01 = 'Equipamentos de perfuração'
                    descricao02 = 'para geotecnia.'
                    url='teste'
                />
                    <View style={{ marginBottom: 50 }} />
            </ScrollView>    
        </View>
    )
}