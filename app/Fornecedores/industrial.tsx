import React from "react";
import { Text, View, Image,ScrollView } from "react-native";
import styles from '../../styles/styleIndex';
import Marca from '../../Components/Marca'

export default function Industrial(){
    return(
        <View style={styles.containerHome}>

            <ScrollView>

                <View>
                    <Image
                    source={require('../../assets/images/imgsegmentos/industrial.png')}
                    style={styles.imgsegmentos}
                    />
                    <Text style={styles.txtsegmentos}>Industrial</Text>
                </View>

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/industrial/2.png')}
                titulo='Kamat'
                descricao01='Fabrica bombas de alta pressão e '
                descricao02='sistemas de jato de água.'
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/industrial/9.png')}
                titulo='NK Jaguar'
                descricao01='Máquinas de trituração e no'
                descricao02='processamento de materiais.'
                />

                <Marca
                imagem={require('../../assets/images/icons-fornecedores/industrial/11.png')}
                titulo='TST'
                descricao01='Equipamentos de segurança para'
                descricao02='uso em ambientes industriais.'
                />

            </ScrollView>
        </View>
    )
}