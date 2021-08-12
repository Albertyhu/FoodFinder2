import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {openDrawer} from '@react-navigation/drawer';
export default function App({navigation}){
return(
<View style = {styles.container}>
    <Text>Home</Text>
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