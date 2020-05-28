import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#00BFFF',
        alignItems: 'center',
    },

    textHeader: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: '15%'
    },

    body: {
        
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    input: {
        color: '#000000',
        borderBottomColor: '#000000',
        marginTop: '5%',
        borderBottomWidth: 2,
        width: '30%',
        height: '5%'
     
    },
    placeholder:{
        color: '#000000',
      

    },
    
    buttonText: {
       color: '	#000000',
       textTransform: 'uppercase',
       fontWeight: 'bold' 
    },

    button: {
        backgroundColor: '#FF4500',
        marginTop: '5%',
        width: '30%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});

export default Style;