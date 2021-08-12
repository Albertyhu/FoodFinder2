import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Image, ImageBackground } from 'react-native';
import * as Animated from 'react-native-animatable';
import {useTheme as useNavTheme} from '@react-navigation/native';
import {useTheme as usePaperTheme} from 'react-native-paper';

export default function loading(){
const {colors} = useNavTheme();
const PaperTheme = usePaperTheme();
return(
<View style = {[styles.container, {backgroundColor: backgroundcolor(PaperTheme) }]}>
    <Animated.Image source = {require('../assets/logo.png')}
    animation = 'bounce'
    iterationCount = 'infinite'
    style = {styles.image}/>

    <Animated.Text
    style = {[styles.text, {color: textColor(PaperTheme)}]}
    animation= 'flash'
    iterationCount = 'infinite'
    >Authenticating. Please, wait...</Animated.Text>
</View>
)
}

const styles = StyleSheet.create({
container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},
image:{
    height: 150,
    width: 150,
    marginBottom: 10,
},
text:{
    fontWeight: 'bold',

    },
})

const backgroundcolor = props =>{

return props.dark ? '#333' : '#23B525';
}

const textColor = props => {
return props.dark ? '#fff' : '#000';

}