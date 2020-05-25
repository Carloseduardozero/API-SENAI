import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents(){
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident});
    }
    async function loadIncidents(){
        if(loading){
            return;
        }
        if(total>0 && incidents.length == total){
            return;
        }
        setLoading(true);
        const response = await api.get('incidents', {
            params: {page}
        });
        
        setIncidents([...incidents,...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }
    useEffect(() => {
        loadIncidents();
    },[]);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
               
            </View>
           
        
         <Text style={styles.title}>Digite um nome: </Text>
         <form action="arquivo.js" method="get">
         <input  type="text" id="nome"></input> 
         <br></br>
         <input  type="date" id = "data"></input> 
         <input type="button" value="Somar" onclick="verificar() "/>
              
         </form>     
         <div id="res"></div>
<script>
    function verificar(){
      
    }
</script>

        </View>
    );
}
