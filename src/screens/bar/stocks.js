import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, TextInput, StatusBar, SafeAreaView, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const Stocks = () => {
    return (

    	<>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                
                <View>
            <Text>
                {"Welcome to Stocks"}

            </Text>
        </View>
            </SafeAreaView>
        </>
       
    )
}
export default Stocks;