import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, TextInput, StatusBar, SafeAreaView, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const BarDashbord = () => {
    let tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const [tableModel, settableModel] = useState(false)
    const [selectedId, setSelectedId] = useState(null);
    const modelOpen = () => { settableModel(true) };
    const modelClose = () => { settableModel(false) };


    const [text, setText] = useState('')
    const CurrentTableEntry = () => {
        return (

            <Modal isVisible={tableModel} style={{ margin: 10, backgroundColor: 'white' }}>
                <View style={{ margin: 10, borderColor: 'white' }}>
                    <View style={{ padding: 10 }}>
                        <TextInput
                            style={{ height: 50, borderColor: 'red', borderRadius: 10, borderWidth: 2 }}
                            placeholder="Type here to translate!"
                            onChangeText={text => setText(text)}
                            defaultValue={text}
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Picker
                            selectedValue={text}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => { setText(itemValue); alert(itemValue) }}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <Button title="Hide modal" onPress={modelClose} />
                </View>
            </Modal>
        )
    }

    const renderTables = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <View key={{ item }} style={{ borderWidth: 1, alignContent: 'center', flex: 1, borderRadius: 20, borderColor: '#5abd8c', margin: 5 }}>
                <TouchableOpacity style={{ margin: 30 }} onPress={() => {
                    settableModel(!tableModel)
                }}>
                    <Text style={{ textAlign: 'center' }}>
                        {item}
                    </Text>
                    <Text style={{ textAlign: 'center', }}>
                        {'Table'}
                    </Text>
                </TouchableOpacity>
            </View>

        );
    };
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    style={{ margin: 10 }}
                    data={tables}
                    renderItem={renderTables}
                    keyExtractor={(item) => item}
                    extraData={selectedId}
                    numColumns={3}
                />
                <CurrentTableEntry />
            </SafeAreaView>
        </>

    )
};


const styles = StyleSheet.create({

});

export default BarDashbord;