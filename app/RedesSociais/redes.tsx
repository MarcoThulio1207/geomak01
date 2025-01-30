import React from "react";
import { Text, View, Image,ScrollView } from "react-native";
import styles from '../../styles/styleIndex'
import RedeSocial from '../../Components/RedeSocial'


export default function Redes(){
    return(
        <View style={styles.containerHome}>
            <Text style={styles.txtcontainerPadrao}>Redes Sociais</Text>
            <View style={styles.containercentralPadrao}>
                <Image
                source={require('../../assets/images/imgHome/redesocial.png')}
                style={styles.imgcontainerPadrao}
                />
                <Text style={styles.txtsegmento}>Clique para acessar!</Text>
            </View>

            <View style={styles.containerRedeSocial}>
                <RedeSocial
                imagem={require('../../assets/images/IconRedeSocial/insta.png')}
                url={'https://www.instagram.com/geomakmachines/'}
                />
            </View>

            <View style={styles.containerRedeSocial}>
                <RedeSocial
                imagem={require('../../assets/images/IconRedeSocial/linkedin.png')}
                url={'https://www.linkedin.com/company/geo-mak/'}
                />
            </View>

            <View style={styles.containerRedeSocial}>
                <RedeSocial
                imagem={require('../../assets/images/IconRedeSocial/www.png')}
                url={'https://marcothulio1207.github.io/Site_Geomak_Brasil/'}
                />
            </View>

        </View>
    )
}
