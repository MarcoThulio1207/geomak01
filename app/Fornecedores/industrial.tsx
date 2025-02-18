import React from "react";
import { Text, View, Image,ScrollView, } from "react-native";
import styles from '../styles/styleIndex';
import Marca from '../Components/Marca'

export default function Industrial(){
    return(
        <View style={styles.containerHome}>

            <ScrollView>

                <View>
                    <Image
                    source={require('../../assets/images/imgsegmentos/industrial.png')}
                    style={styles.imgsegmentos02}
                    />
                    <Text style={styles.txtsegmentos}>Industrial</Text>
                </View>

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/industrial/2.png')}
                titulo='Kamat'
                descricao01='Fabrica bombas de alta pressão e '
                descricao02='sistemas de jato de água.'
                url='teste'
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/industrial/9.png')}
                titulo='NK Jaguar'
                descricao01='Máquinas de trituração e no'
                descricao02='processamento de materiais.'
                url={'https://drive.google.com/file/d/1yNPNnaY4OytEAOxuOxFUCb0WtO1MziCe/view?usp=drive_link'}
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/industrial/11.png')}
                titulo='TST'
                descricao01='Equipamentos de segurança para'
                descricao02='uso em ambientes industriais.'
                url={'https://drive.google.com/file/d/1vIGVJ8hLV2lo3GIzOUsRpd-tUYsuGmFt/view?usp=drive_link'}
                />

            </ScrollView>
        </View>
    )
}