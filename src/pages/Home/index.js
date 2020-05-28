import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Picker } from 'react-native';

import Style from './style';
import Logo from '../../assets/logo';
import SearchController from '../../Controller/SearchController';

// function getYear() {
//     const date = new Date();
//     const array = [];

//     for(let i = 1930; i < date.getFullYear(); i++) {
//         array[i] = (<Picker.Item label={i} value={i} />);
//     }

//     return array;
// }

export default function Home({ navigation }) {

    const [welcome, setWelcome] = useState('');
    
    const [name, setName] = useState('');
    const [year, setYear] = useState(0);

    

    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.body}>
                <Logo style={{ fillRule: 'evenodd', width: '75%', height: '25%', alignItems: 'center' }} />
                <Text style={Style.textHeader}>{welcome}</Text>
            <TextInput  placeholder='Digite seu nome ' onChangeText={(name) => { setName(name); }} placeholderTextColor='#000000' style={Style.input} />
            <TextInput keyboardType='numeric' placeholder='Qual o seu ano de nascimento?' onChangeText={(year) => { setYear(year); }} placeholderTextColor='#000000' style={Style.input} />
            <TouchableOpacity style={Style.button} onPress={() => { SearchController(name, year, navigation); }}><Text style={Style.buttonText}>Exibir</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}