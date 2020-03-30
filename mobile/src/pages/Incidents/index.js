import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
export default function Incidents(){
    const navigation = useNavigation();
    function navigateToDetail(){
        navigation.navigate('Detail');
    }
   return (
   <View style={styles.container}>
       <View style={styles.header}>
        <Image source = {logoImg}/>
        <Text style={styles.headerText }>
            Total de <Text style = {styles.headerTextBold}>0 casos</Text>
        </Text>
       </View>
       <Text style = {styles.title}>Bem-Vindo</Text>
       <Text style ={styles.description}>Escolha um dos casos abaixo e salve vidas.</Text>
        <FlatList  
        data =  {[1, 2, 3, 4]}
        keyExtractor = {incident => String(incident)}
        showsVerticalScrollIndicator = {false}
        style = {styles.incidentList}
        renderItem={() => (
            <View style = {styles.incident}>
                <Text style = { styles.incindentProperty}>ONG:</Text>
                <Text style = { styles.incindentValue}>APAD</Text>

                <Text style = { styles.incindentProperty}>CASO:</Text>
                <Text style = { styles.incindentValue}>Tomar uma no barzinho</Text>
                
                <Text style = { styles.incindentProperty}>VALOR:</Text>
                <Text style = { styles.incindentValue}>R$ 120,00</Text>
                <TouchableOpacity 
                style={styles.detailsButton} 
                onPress={navigateToDetail}
                >
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name ="arrow-right" size = {16} color = "#E02041"/>
                </TouchableOpacity>
       </View>
        )}
        />  
   </View>
    );
}