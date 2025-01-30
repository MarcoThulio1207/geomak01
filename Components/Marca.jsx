import React  from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Marca = ({imagem, titulo, descricao01, descricao02}) => {
    return(
        <><View style={styles.containermarcas}>
            <Image
                source={imagem}
                style={styles.imgGeo} />
        </View>
        <Text style={styles.txttitulo}>{titulo}</Text>
        <Text style={styles.txtparagrafo}>{descricao01}</Text>
        {descricao02 && <Text style={styles.txtparagrafo}>{descricao02}</Text>}
        </>

    )
}

const styles = StyleSheet.create({
    containermarcas:{
        marginTop:40,
        padding:10,
        backgroundColor:'white',
        width:'95%',
        left:10,
        borderRadius:5,
        flex:1
      },
    imgGeo:{
        width:110,
        height:101,
        marginTop:10
      },
      txttitulo:{
        textAlign:'center',
        left:50,
        marginTop:-125,
        fontSize:32,
        fontWeight:'bold'
      },
      txtparagrafo:{
        textAlign:'center',
        fontSize:15,
        left:60,
        marginTop:10
      }
})

export default Marca;