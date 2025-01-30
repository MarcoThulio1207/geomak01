import React  from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { useRouter } from "expo-router";

const Segmentos = ({imagem, titulo}) => {
    return(
        <>
        <View>
            <TouchableOpacity style={styles.btnSegmentos01}
            onPress={()=> router.push('/geotecnia')}
            >
                <Image
                source={imagem}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>{titulo}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSegmentos02}>
                <Image
                source={imagem}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>{titulo}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSegmentos03}>
                <Image
                source={imagem}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>{titulo}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSegmentos04}>
                <Image
                source={imagem}
                style={styles.imgsegmentos}
                />
                <Text style={styles.txtsegmentos}>{titulo}</Text>
            </TouchableOpacity>

        </View>
    </>
    )
}

const styles = StyleSheet.create({
    containerHome:{
        flex:1,
        backgroundColor:'#00974a',
      },
      txtcontainerPadrao:{
        color:'white',
        textAlign:'center',
        padding:30,
        fontSize:48
      },
      containercentralPadrao:{
        alignItems:'center'
      },
      imgcontainerPadrao:{
        height:50,
        width:52,
        backgroundColor:'white',
        borderRadius:8
      },
      txtsegmento:{
        color:'white',
        marginTop:15,
        fontSize:24
      },
      imgsegmentos:{
        height:80,
        width:'95%',
        borderRadius:10,
        left:10,
        marginTop:10
      },
      txtsegmentos:{
        textAlign:'center',
        fontWeight:'500',
        fontSize:30,
        marginTop:-60,
      },
      btnSegmentos01:{
        
      },
      btnSegmentos02:{
        marginTop: 30
      },
      btnSegmentos03:{
        marginTop: 30
      },
      btnSegmentos04:{
        marginTop: 30
      },
    
    
})

export default Segmentos;