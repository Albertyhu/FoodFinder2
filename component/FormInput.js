import React from 'react';
import {View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = ({valueLabel, placeholderText, onChange, ...rest}) =>{
return(
<View>
    <TextInput
        value = {valueLabel}
        placeholder = {placeholderText}
        onChangeText = {onChange}
        style = {styles.textInput}
        {...rest}
    />
</View>
 )
}

export default FormInput;

const styles= StylesSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

textInput: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
},
})