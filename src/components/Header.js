import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({'Oswald': require('../../assets/fonts/Oswald-VariableFont_wght.ttf')});

    if (!fontsLoaded) 
        return null;
    
    const goToCategorias = () => {
        navigation.navigate('Categorias');
    };

    const goToPersonajes = () => {
        navigation.navigate('Personajes');
    };

    const goToAjustes = () => {
        navigation.navigate('Ajustes');
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={goToCategorias}>
                <Text style={styles.headerButton}>Categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToPersonajes}>
                <Text style={styles.headerButton}>Personajes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToAjustes}>
                <Text style={styles.headerButton}>Ajustes</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#333', // Color gris oscuro
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 15
    },
    headerText: {
        color: 'white', // Color blanco
        fontFamily: 'Oswald', 
        fontSize: 20
    },
    headerButton: {
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 16,
        marginRight: 10
    }
});

export default Header;
