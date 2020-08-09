import React, { useState, useEffect } from 'react';
import {
    Text,
    View,StyleSheet,ScrollView,
    Image,
    TouchableOpacity,TextInput,
    ImageBackground, ToastAndroid, SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const Home = ({navigation}) => {
    let ourTopiPic=[
        {
            id:1,
            name:'The Power',
            author:'MARTURS k',
            price:20,
            pic:require('../../assets/slider_four_image.png')
        },
        {
            id:2,
            name:'Prayer',
            author:'Marcus B',
            price:20,
            pic:require('../../assets/1.png')
        },
        {
            id:3,
            name:'The Times',
            author:'Mathues D',
            price:20,
            pic:require('../../assets/2.png')
        },
        {
            id:4,
            name:'The Times',
            author:'Mathues D',
            price:20,
            pic:require('../../assets/2.png')
        }
    ]
    
    const sliderView = (title) =>{
        return(
            <View style={{margin:20,marginTop:title==='Our Topic Pics'? 40:0}}>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.header,{flex:6,color:title==='Our Topic Pics'? 'white':'black'}]}>{title} </Text>
              {title==='Our Topic Pics' &&  <Icon name="navicon" size={30} color="white" style={{flex:1,}} />}

                
                </View>
                <ScrollView
                    horizontal={true}
                    >
                
                <View style={styles.mainTopilistView}>
                     <View style={styles.topicView}>
                        <Image source={require('../../assets/Biography.png')} style={styles.imageStyle} />
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Prayer  </Text>
                        <Text style={{fontSize:12,marginVertical:5}}>Mathues F  </Text>
                    </View>    
                </View>
                <View style={styles.mainTopilistView}>
                     <View style={styles.topicView}>
                        <Image source={require('../../assets/Business.png')} style={styles.imageStyle} />
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Business  </Text>
                        <Text style={{fontSize:12,marginVertical:5}}>Business g  </Text>
                    </View>    
                </View>
                <View style={styles.mainTopilistView}>
                     <View style={styles.topicView}>
                        <Image source={require('../../assets/Children.png')} style={styles.imageStyle} />
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Children  </Text>
                        <Text style={{fontSize:12,marginVertical:5}}>Children F  </Text>
                    </View>    
                </View>
                <View style={styles.mainTopilistView}>
                     <View style={styles.topicView}>
                        <Image source={require('../../assets/GraphicNovels.png')} style={styles.imageStyle} />
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Prayer  </Text>
                        <Text style={{fontSize:12,marginVertical:5}}>Mathues F  </Text>
                    </View>    
                </View>
                <View style={styles.mainTopilistView}>
                     <View style={styles.topicView}>
                        <Image source={require('../../assets/Business.png')} style={styles.imageStyle} />
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Business  </Text>
                        <Text style={{fontSize:12,marginVertical:5}}>Business g  </Text>
                    </View>    
                </View>
                <View style={styles.mainTopilistView}>
                     <View style={styles.topicView}>
                        <Image source={require('../../assets/Children.png')} style={styles.imageStyle} />
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Children  </Text>
                        <Text style={{fontSize:12,marginVertical:5}}>Children F  </Text>
                    </View>    
                </View>
                
                </ScrollView>
            </View>
        )
    }

    return (
       <>
        <SafeAreaView style={[styles.container]}>
        <ImageBackground source={require('../../assets/homeback.png')} style={styles.backgroundImage} >
      

            <Text />
            <Text />
        {/* <ImageBackground source={require('../../assets/homeback.png')} >
        </ImageBackground> */}
                <View style={{   alignItems: 'center',flex:1 }} >
                    <ScrollView>
                    {sliderView('Our Topic Pics')}
                    {sliderView('Reccommendations','star')}
                    {sliderView('Categories/Topics')}
                    {sliderView('Recently Viewd')}
                   
                        <Text style={styles.header}>{'Monthly News Letters'} </Text>
                    <View style={{   alignItems: 'center',backgroundColor:'#e2dfdf',margin:10,borderRadius:20 }} >
                    <Text />   
                <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    value={''}
                    placeholder={'Name'}
                    />
               <TextInput
                    style={[styles.inputbox]}
                    onChangeText={text => {}}
                    value={''}
                    placeholder={'Email'}
                    />
                
                       
                  
                    <TouchableOpacity style={styles.loginView} onPress={() => {}}>
                            <Text style={styles.buttonTextLogin}>{'Sign up'}</Text>
                    </TouchableOpacity>
                    <Text />

                </View>
                {/* <View style={{flexDirection:'row',backgroundColor:'#5abd8c',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                    <Text style={{flex:1,padding:15,textAlign:'center',color:'white'}}>Search</Text>
                   

                </View> */}
                    </ScrollView>
                </View>
                </ImageBackground>
        </SafeAreaView >
       </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageStyle:{
       
       
    },
    backgroundImage: {
        flex: 1,
    },    
    mainTopilistView:{
        marginTop:10
    },
    topicView:{
        flex:1,
        alignItems:'center'
    },
    wrapper: {
       
        marginVertical: 30,
        marginHorizontal:20,
        marginTop:100,
       
      },
      header: {
        fontSize: 20,
        fontWeight: 'bold',
       
        color:'black',
      },
      paragraph: {
        fontSize: 17,
        color:'#5abd8c',
      },
    loginView:{
        padding:15,
       marginTop:5,
        alignSelf:'flex-end',
        marginRight:50,
        backgroundColor:'#5abd8c',
        borderRadius:50
    },
    inputbox:{
        padding:15,
        marginVertical:5,
        width:'85%',
        alignItems:'center',
        height: 50, 
        backgroundColor: '#f9f9f9',
        borderRadius:50
    },
    buttonTextLogin:{
        fontSize:16,
        fontWeight:'bold',
    color:'white'
    }
});

export default Home;