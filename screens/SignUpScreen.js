import React from 'react';
import {View, StyleSheet, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animate from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import { useTheme as useNavTheme} from '@react-navigation/native';

const SignUp = ({navigation}) =>{

const { colors } = useNavTheme();

const [data, setData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    securePassEntry: true,
    isValid: false,
})

const handleEmail = email =>{
    setData({
    ...data,
    email: email,
    })
}

const handleUsername = val =>{
setData({
    ...data,
    username: val,
})
}

const handlePass = val =>{
    setData({
    ...data,
    password: val,
    })
}

const handleConfirmPass = val =>{
    setData({
        ...data,
        confirmPassword: val,
    })
}

const toggleSecure = () =>{
    setData(prevState => ({
    ...data,
    securePassEntry: !prevState.securePassEntry,}))
}


return(
<View style = {[styles.container, {backgroundColor: colors.backgroundColor}]}>
<View style = {styles.head}>
{/*
    <Animate.Image
    source = {require('../assets/logo.png')}
    style = {styles.logo}
    animation = 'bounceIn'
    delay={2000}
    /> */}
</View>
<Animate.View
    style = {styles.body}
    animation = 'fadeInUp'
    delay ={100}
    >
    <Text style = {styles.title}>Create a New Account</Text>
    <View style = {styles.textInputContainer}>
    <Icon name = 'mail-outline' size = {25} style = {styles.icon}/>
     <TextInput
       value = {data.email}
       onChangeText = {handleEmail}
       style = {styles.TextInput}
       placeholder = 'Type your email here.'
       autoCapitalize = 'none'
    />
    {data.isValid ?
        <Icon name = 'checkmark-circle-outline' size = {25} color = '#1BAC1E' style = {styles.icon} />
        :
       <Icon name = 'checkmark-circle-outline' size = {25} color = '#B6B6B6' style = {styles.icon} />
    }
   </View>

   {/*username*/}
   <View style = {styles.textInputContainer}>
   <Icon name = 'person-outline' size = {25} style = {styles.icon}/>
    <TextInput
      value = {data.username}
      onChangeText = {handleUsername}
      style = {styles.TextInput}
      placeholder = 'Type your username here. It has to be at least four characters long.'
      autoCapitalize = 'none'
   />
   {data.isValid ?
       <Icon name = 'checkmark-circle-outline' size = {25} color = '#1BAC1E' style = {styles.icon} />
       :
      <Icon name = 'checkmark-circle-outline' size = {25} color = '#B6B6B6' style = {styles.icon} />
   }
  </View>

  {/*Password*/}
     <View style = {styles.textInputContainer}>
     <Icon name = 'key-outline' size = {25} style = {styles.icon}/>
      <TextInput
        value = {data.password}
        onChangeText = {handlePass}
        style = {styles.TextInput}
        placeholder = 'Type your password here.'
        secureTextEntry = {data.securePassEntry}
        autoCapitalize = 'none'
     />
     {data.securePassEntry ?
         <Icon name = 'eye-off' size = {25} color = '#1BAC1E' style = {styles.icon} onPress = {toggleSecure} />
         :
        <Icon name = 'eye' size = {25} color = '#1BAC1E' style = {styles.icon} onPress = {toggleSecure} />
     }
    </View>

{/*confirm password*/}
   <View style = {styles.textInputContainer}>
   <Icon name = 'key-outline' size = {25} style = {styles.icon}/>
    <TextInput
      value = {data.confirmPassword}
      onChangeText = {handleConfirmPass}
      style = {styles.TextInput}
      placeholder = 'Type your password here again for confirmation.'
      secureTextEntry = {data.securePassEntry}
      autoCapitalize = 'none'
   />
   {data.isValid ?
       <Icon name = 'checkmark-circle-outline' size = {25} color = '#1BAC1E' style = {styles.icon} />
       :
      <Icon name = 'checkmark-circle-outline' size = {25} color = '#B6B6B6' style = {styles.icon} />
   }
  </View>
  <TouchableOpacity onPress = '' >
    <LinearGradient colors = {colors.linearButton}
        style = {[styles.buttonContainer, {
            borderWidth: colors.borderWidth,
            borderColor: colors.borderColor,
            backgroundColor: colors.backgroundColor,
            }]}>
        <Text style = {[styles.buttonText, {color: colors.buttonText}]}>Sign Up</Text>
        <Icon name = 'chevron-forward-outline' style = {styles.icon} size = {25} color = {colors.iconColor}/>
    </LinearGradient>
  </TouchableOpacity>
  <View style = {{alignItems: 'center', marginVertical: 10,}}>
    <Text style = {{fontWeight: 'bold'}}>Don't have an account?</Text>
  </View>
    <TouchableOpacity onPress = {() => navigation.goBack()}
    style = {[styles.signInButton, {
        backgroundColor: colors.secondaryButtonBackgroundColor,

    }]}>
          <Text style = {[styles.signInButtonText, {color: colors.secondaryButtonText}]}>Sign In</Text>
          <Icon name = 'chevron-forward-outline' style = {styles.icon} size = {25} color = {colors.secondaryIcon}/>
    </TouchableOpacity>
</Animate.View>
</View>
);
}

export default SignUp;

const styles = StyleSheet.create({
body:{
    flex: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    alignItems: 'center',
},
buttonContainer:{
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
},
buttonText:{
    color: '#fff',
    paddingLeft: 15,
    fontWeight: 'bold',
},
container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#23B525',
     },
head:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
icon:{
    paddingRight: 15,
    paddingVertical: 10,
},
logo:{
    width: 100,
    height: 100,
    marginVertical: 35,
},
signInButton:{
    borderRadius: 25,
    borderColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '30%',
},
signInButtonText:{
    color: '#000',
    paddingLeft: 15,
    fontWeight: 'bold',
},
TextInput:{
    padding: 5,
    width: '70%',
},
textInputContainer:{
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginVertical: 10,
},
title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
},
})