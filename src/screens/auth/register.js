

import React, { useState, useEffect } from 'react';
import {
    Text,
    View,StyleSheet,TextInput,
    Image,
    TouchableOpacity,CheckBox,
    ImageBackground, ToastAndroid, SafeAreaView
} from 'react-native';

const Register = ({navigation}) => {
    return (
        <>
        <SafeAreaView style={[styles.container]}>
            <View style={{flex:0.3,justifyContent:'center'}}>
                  <Text style={{fontSize:24,color:'black',marginLeft:30}}>Sigin up </Text>
            </View>
                <View style={{   alignItems: 'center',flex:1 }} >
                <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    value={''}
                    placeholder={'First & Last Name'}
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
                    placeholder={'Mobile number'}
                    value={''}
                    />
                      <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    placeholder={'Group special code'}
                    value={''}
                    />
                      <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    placeholder={'Password'}
                    value={''}
                    />
                        <View style={{flexDirection:'row',alignContent:'center',marginVertical:10}}>
                        <CheckBox
                                value={false}
                                onValueChange={()=>{

                                }}
                                style={{marginLeft:10,borderRadius:10}}

                                />
                            <Text style={{textAlign:'center',marginTop:5}}>Please sigin me up for monthly news letters.</Text>
                        </View>
                   
                    <TouchableOpacity style={styles.loginView} onPress={() => navigation.navigate('Informmative', { transition: 'vertical' })}>
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

export default Register;