import React, { useState, useEffect } from 'react';
import {
    Text,
    View,StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground, ToastAndroid, SafeAreaView
} from 'react-native';


const Informmative = ({navigation}) => {
    return (
       <>
        <SafeAreaView style={[styles.container]}>
            <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.wrapper}>
                <Text style={styles.header}>Learning </Text>
                <Text style={styles.header}> The World Of God</Text>
                <Text style={styles.paragraph}>If you're looking for a competition get ready for one !</Text>

              </View>
              <View style={styles.imageview}>
                     <Image source={require('../../assets/undraw_Bibliophile_hwqc.png')}  />
                </View> 
            </View>
                <View style={{   alignItems: 'center',flex:1 }} >

                    <Text></Text>

                    <TouchableOpacity style={styles.loginView} onPress={() => navigation.navigate('Home', { transition: 'vertical' })}>
                            <Text style={styles.buttonTextLogin}>{'Next'}</Text>
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
   
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal:20,
        marginTop:100,
        justifyContent:'center'
      },
      header: {
        fontSize: 30,
        fontWeight: 'bold',
       
        color:'#5abd8c',
      },
      paragraph: {
        fontSize: 17,
        color:'#5abd8c',
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

export default Informmative;