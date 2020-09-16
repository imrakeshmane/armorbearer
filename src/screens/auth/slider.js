import React ,{useState} from 'react';
import {
    SafeAreaView,Dimensions,
    StyleSheet,
    ScrollView,PixelRatio,TouchableOpacity,
    View,
    Text,Image,
    StatusBar,
  } from 'react-native';

  import Starter from './starter'
const Slider = ({navigation }) => {


    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');
  
    const setSliderPage = (event) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.floor(x / width);
      if (indexOfNextScreen !== currentPage) {
        setSliderState({
          ...sliderState,
          currentPage: indexOfNextScreen,
        });
      }
    };
  
    const { currentPage: pageIndex } = sliderState;
  
  


    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
         
           
           
            <View style={{ width, height }}>
              {/* <Image
                source={require('./src/assets/images/pink-and-purple-wallpaper-1616403.jpg')}
                style={styles.imageStyle}
              /> */}
              <View style={styles.wrapperStartr}>
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
                    <View style={styles.imageview}>
                     <Image source={require('../../assets/slider_sign_in_image.png')} style={{height:height/3,width:width,resizeMode:'cover'}} />
                </View> 
                </View>
              </View>
            </View>
        </SafeAreaView>
      </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
      width: 350,
      height: 350,
      // height:200,
      alignSelf:'center'
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
      marginHorizontal:20,
      marginTop:100,
      justifyContent:'center'
    },
    wrapperStartr: {
      flex:1     
    },
    imageview:{
      width:'100%',
      alignSelf:'center'
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
    paginationWrapper: {
      position: 'absolute',
      bottom: 80,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    paginationDots: {
      height: 10,
      width: 10,
      borderRadius: 10 / 2,
      backgroundColor: '#5abd8c',
      marginLeft: 10,
    },

    // Stater
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
  
export default Slider;