import React from "react";
import { View, Text, TouchableOpacity, Linking, Image,ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from '../styles/styleIndex'

const Contato =  ()=>{
    const abrirWhats = (numero:string) =>{
        const mensagem = 'Olá, gostaria de saber mais sobre os produtos da Geomak!'
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

        Linking.openURL(url).catch((erro) => console.error('Erro ao abrir o Whatapp', erro));
    }


    return(
        <View style={styles.containerHome}>
            <ScrollView>
            <Text style={styles.txtcontainerPadrao}>Contato</Text>

            <View style={styles.containercentralPadrao}>
                <Image
                source={require('../../assets/images/imgHome/contato.png')}
               style={styles.imgcontainerPadrao}
                />
                <Text style={styles.txtsegmento}>Nossa Equipe:</Text>
            </View>


                <View style={styles.areaIMGContato}>
                    <Image
                    source={require('../../assets/images/imgequipe/dhass.png')}
                    style={styles.imageContato}
                    />
                    <View style={styles.containerContato}>
                        <Text style={styles.txtContato}>David Haas</Text>
                        <Text style={styles.txtContato}>Diretor Comercial</Text>
                    </View>

                    <View style={styles.containerBtnContato}>
                        <TouchableOpacity style={styles.btnWhatsapp} onPress={()=> abrirWhats('5531995635036')}>
                            <FontAwesome name="whatsapp" size={24} color="#fff" />
                            <Text style={styles.btnTXT}>Fale pelo WhatsApp</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.areaIMGContato}>
                    <Image
                    source={require('../../assets/images/imgequipe/lara.png')}
                    style={styles.imageContato}
                    />
                    <View style={styles.containerContato}>
                        <Text style={styles.txtContato}>Lara Mairink</Text>
                        <Text style={styles.txtContato}>Diretora de Operações</Text>
                    </View>

                    <View style={styles.containerBtnContato}>
                        <TouchableOpacity style={styles.btnWhatsapp} onPress={()=> abrirWhats('5531990774441')}>
                            <FontAwesome name="whatsapp" size={24} color="#fff" />
                            <Text style={styles.btnTXT}>Fale pelo WhatsApp</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.areaIMGContato}>
                    <Image
                    source={require('../../assets/images/imgequipe/claudia.png')}
                    style={styles.imageContato}
                    />
                    <View style={styles.containerContato}>
                        <Text style={styles.txtContato}>Cláudia Correa</Text>
                        <Text style={styles.txtContato}>Financeiro</Text>
                    </View>

                    <View style={styles.containerBtnContato}>
                        <TouchableOpacity style={styles.btnWhatsapp} onPress={()=> abrirWhats('5531996370917')}>
                            <FontAwesome name="whatsapp" size={24} color="#fff" />
                            <Text style={styles.btnTXT}>Fale pelo WhatsApp</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.areaIMGContato}>
                    <Image
                    source={require('../../assets/images/imgequipe/fernanda.png')}
                    style={styles.imageContato}
                    />
                    <View style={styles.containerContato}>
                        <Text style={styles.txtContato}>Fernanda Siqueira</Text>
                        <Text style={styles.txtContato}>Administrativo</Text>
                    </View>

                    <View style={styles.containerBtnContato}>
                        <TouchableOpacity style={styles.btnWhatsapp} onPress={()=> abrirWhats('5531988563781')}>
                            <FontAwesome name="whatsapp" size={24} color="#fff" />
                            <Text style={styles.btnTXT}>Fale pelo WhatsApp</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.areaIMGContato}>
                    <Image
                    source={require('../../assets/images/imgequipe/thulio.png')}
                    style={styles.imageContato}
                    />
                    <View style={styles.containerContato}>
                        <Text style={styles.txtContato}>Marco Thulio</Text>
                        <Text style={styles.txtContato}>Estoque</Text>
                    </View>

                    <View style={styles.containerBtnContato}>
                        <TouchableOpacity style={styles.btnWhatsapp} onPress={()=> abrirWhats('5531987488393')}>
                            <FontAwesome name="whatsapp" size={24} color="#fff" />
                            <Text style={styles.btnTXT}>Fale pelo WhatsApp</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 30 }} />
                </View>

            </ScrollView>

        </View>
    )
}


export default Contato;