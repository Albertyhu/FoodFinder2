import React from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import {openDrawer, createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

export default function App({navigation}){
return(
<View style = {styles.container}>
    <Text>About Us</Text>
    <Button title = "Open Drawer" onPress = {() => {navigation.openDrawer()}} />
</View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

})