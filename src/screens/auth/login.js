import React, { useState, useEffect } from 'react';
import {
    Text,
    View,StyleSheet,TextInput,
    Image,
    TouchableOpacity,
    ImageBackground, ToastAndroid, SafeAreaView
} from 'react-native';

const Login = () => {
    return (
        <>
        <SafeAreaView style={[styles.container]}>
            <View style={{flex:0.3,justifyContent:'center'}}>
                  <Text style={{fontSize:24,color:'black',marginLeft:30}}>Sigin in </Text>
            </View>
                <View style={{   alignItems: 'center',flex:1 }} >
                <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    value={''}
                    placeholder={'Optinal Group social code.'}
                    />
               <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    value={''}
                    placeholder={'Email'}
                    />
                <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    placeholder={'Password'}
                    value={''}
                    />
                        <View style={{flexDirection:'row',alignContent:'center',marginVertical:10}}>
                            <Text style={{flex:1,textAlign:'center'}}>Stay login in</Text>
                            <Text style={{flex:1,textAlign:'center'}}>Forgot Password</Text>


                        </View>
                   
                    <TouchableOpacity style={styles.loginView} onPress={() => navigation.navigate('Register', { transition: 'vertical' })}>
                            <Text style={styles.buttonTextLogin}>{'Sign In'}</Text>
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
        width:'85%',
        alignItems:'center',
        borderColor:'#5abd8c',
        borderWidth:1,
        borderRadius:50
    },
    inputbox:{
        padding:15,
        marginVertical:5,
        width:'85%',
        alignItems:'center',
        height: 55, 
        backgroundColor: '#f9f9f9',
        borderRadius:50
    },
    buttonTextLogin:{
        fontSize:16,
        fontWeight:'bold',
    color:'#5abd8c'
    }
});

export default Login;