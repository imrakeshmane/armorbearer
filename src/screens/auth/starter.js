import React, { useState, useEffect } from 'react';
import {
    Text,
    View,StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground, ToastAndroid, SafeAreaView
} from 'react-native';


const Starter = ({navigation}) => {
    return (
       <>
        <SafeAreaView style={[styles.container]}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontWeight:'bold',fontSize:30,color:'#5abd8c'}}>Lession for </Text>
            </View>
                <View style={{   alignItems: 'center',flex:1 }} >
                    <TouchableOpacity style={styles.loginView} onPress={() => navigation.navigate('Login', { transition: 'vertical' })} >
                        <Text style={styles.buttonTextLogin}>{'Sign in'}</Text>
                    </TouchableOpacity>

                    <Text></Text>

                    <TouchableOpacity style={styles.loginView} onPress={() => navigation.navigate('Register', { transition: 'vertical' })}>
                            <Text style={styles.buttonTextLogin}>{'Sign up'}</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView >
       </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    loginView:{
        padding:15,
        width:'80%',
        alignItems:'center',
        backgroundColor:'#5abd8c',
        borderRadius:50
    },
    buttonTextLogin:{
        fontSize:16,
        fontWeight:'bold',
    color:'white'
    }
});

export default Starter;