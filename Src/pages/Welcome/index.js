
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
 } from 'react-native';

 import * as Animatable from 'react-native-animatable'
 import {useNavigation} from '@react-navigation/native'

export default function  Welcome(){
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInYr"
                    source ={require('../../assets/GoThec.png')}
                    style={{width: '100%' }}
                    resizeMod="contain"
                />
            </View>

            <Animatable.View delay={650} animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Seja Bem vindo ao seu aplicativo de Presença</Text>
                <Text style={styles.text}>Faça seu alogin para começar</Text>


                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SingIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
            

        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray',
    },

    containerLogo:{
        flex:2,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignIntes: 'center'
    },

    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%' ,
        paddingEnd: '5%' 

    },
    title:{
        fontSize: 24,
        fontWeight: 'Blob',
        marginTop: 24,
        marginBottom: 12,

    },

    text:{
        color:'#a1a1a1'
    },

    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '8%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})