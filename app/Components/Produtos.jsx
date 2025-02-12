import React  from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const Produtos = ({imagem, texto1,texto2,texto3,texto4}) =>{
    return(
        <>
        <Image
        source={imagem}
        style={styles.imgItens}
        />
        <View style={styles.areaItem}>
            <Text style={styles.txtitem}>{texto1}{'\n'}
            {texto2}{'\n'}
            {texto3}{'\n'}
            {texto4}{'\n'}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    imgItens:{
        width:400,
        height:400,
        
      },
      areaItem:{
        backgroundColor:'grey',
        width:300,
        height:120,
        marginTop:35,
        left:45,
        borderRadius:5
      },
      txtitem:{
        fontSize:15,
        textAlign:'center',
        marginTop:20,
        fontWeight:'500',
    
      }
})

export default Produtos;