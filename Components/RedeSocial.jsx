
import React from "react";
import {TouchableOpacity, Image,StyleSheet, Linking} from 'react-native'


const RedeSocial = ({imagem, url}) => {
    return(
        <>
             <TouchableOpacity
            onPress={() => Linking.openURL(url)}
            >
                <Image
                    source={imagem}
                    style={styles.imgBtn}
                    />
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
imgBtn:{
    width:100,
    height:100,
    marginTop:15,

},

})

export default RedeSocial;