import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({btnType, backgroundColor, color, eventPress, buttonTitle, ...rest }) =>{
return(
<TouchableOpacity onPress = {eventPress} style = {styles.buttonContainer}>
    <View style = {[styles.wrapper, {backgroundColor: backgroundColor}]}>
    <Icon name = {btnType} style = {styles.icon} size = {22} color = {color} />
    <Text style = {[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
    </View>
</TouchableOpacity>
 )
}

export default SocialButton;

const styles= StyleSheet.create({
buttonContainer: {
    marginVertical: 10,
},
buttonText:{
    padding: 10,

},
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
icon:{
    paddingLeft: 10,
},
wrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',

    borderRadius: 25,
},

})