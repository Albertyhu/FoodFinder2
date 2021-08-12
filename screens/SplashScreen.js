import React from 'react';
import {View, StyleSheet, Text, Button, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import * as Animate from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme as useNavTheme } from '@react-navigation/native';


import SignIn from './SignInScreen.js';

const Splash = ({navigation}) =>{
const {colors} = useNavTheme();

return(
<View style = {[styles.container, {backgroundColor: colors.backgroundColor}]}>
    <View style = {styles.header}>
         <Animate.Image
         source = {require('../assets/logo.png')}
         style = {styles.mainLogo}
         animation = 'bounceIn'
         delay = {2000}
         />
    </View>
    <Animate.View
        style = {styles.body}
        animation = 'fadeInUp'
        delay = {1000}
        >
        <Text style = {styles.title}>Food Finder</Text>
        <Text style = {styles.subtitle}>Geographical solutions to solve your hunger problems.</Text>
        <LinearGradient style = {styles.button} colors = {colors.splashLinear}>
            <TouchableOpacity onPress = {() => navigation.navigate('SignIn')}>
                <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 5,}}>
                    <Text style = {[styles.buttonText]}>Get Started</Text>
                    <MaterialIcons name = 'keyboard-arrow-right' color = '#fff' style = {{padding: 5,}} size = {25} />
                </View>
            </TouchableOpacity>
        </LinearGradient>
    </Animate.View>
</View>
);
}

export default Splash;

const styles = StyleSheet.create({
button:{
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'space-between',

},
buttonText:{
    color: '#fff',
    paddingVertical: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
},
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#23B525',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
},
header:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',

},
body:{
    flex: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: '100%',
},
mainLogo:{
    width: 150,
    height: 150,
    marginVertical: 50,
},
subtitle:{
    marginVertical: 15,
    paddingHorizontal: 15,
    textAlign: 'center',
    },
title:{
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 30,
},
})