import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import { DrawerItem, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import {
Switch,
Avatar,
Caption,
Divider,
Drawer,
Paragraph,
Subheading,
Text,
Title,
TouchableRipple,
useTheme,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './HomeScreen.js';
import Profile from './ProfileScreen.js';
import About from './AboutScreen.js';
import Explore from './ExploreScreen.js';
import EditProfile from './EditProfile.js';
import {AuthContext} from '../component/AuthContext.js';

const Draw = createDrawerNavigator();

export function MainDrawer (props) {

const { signOut} = React.useContext(AuthContext);
const { toggleTheme } = React.useContext(AuthContext);
const PaperTheme = useTheme();
const {colors} = useTheme()

return(
<DrawerContentScrollView {...props} style = {{backgroundColor: colors.drawerBackgroundcolor, color: colors.drawerText }}>
<Drawer.Section>
    <DrawerItem
        label = {({focused, color }) => <Text style = {{color: '#000' }}>Home</Text> }
        onPress = {() => props.navigation.navigate('Home')}
        icon = {({color, size}) => <Icon name = 'home-outline' color = '#000' size = {size} />}
    />
    <DrawerItem
        label = {({focused, color }) => <Text style = {{color: '#000' }}>About</Text> }
        onPress = {() => props.navigation.navigate('About')}
        icon = {({color, size}) => <Icon name = 'albums-outline' color = '#000' size = {size} />}
    />
    <DrawerItem
        label = {({focused, color }) => <Text style = {{color: '#000' }}>Profile</Text> }
        onPress = {() => props.navigation.navigate('Profile')}
        icon = {({color, size}) => <Icon name = 'ios-person' color = '#000' size = {size} />}
    />
    <DrawerItem
        label = {({focused, color }) => <Text style = {{color: '#000' }}>Explore</Text> }
        onPress = {() => props.navigation.navigate('Explore')}
        icon = {({color, size}) => <Icon name = 'map-outline' color = '#000' size = {size} />}
    />
    <DrawerItem
        label = {({focused, color }) => <Text style = {{color: '#000' }}>Edit</Text> }
        onPress = {() => props.navigation.navigate('EditProfile')}
        icon = {({color, size}) => <Icon name = 'pencil-outline' color = '#000' size = {size} />}
    />
</Drawer.Section>
<Divider/>
<Drawer.Section>
    <View>
        <Text style = {{color: colors.drawerText, marginLeft: 15, marginTop: 15, fontWeight: 'bold', }}>Preferences</Text>
        <TouchableRipple onPress = {toggleTheme}>
            <View style = {styles.switchContainer}>
                <Text style = {{color: '#000'}}>Dark Theme</Text>
                <Switch value = {PaperTheme.dark} onValueChange = {toggleTheme} />
            </View>
        </TouchableRipple>
    </View>
</Drawer.Section>
<Divider />
<Drawer.Section>
    <DrawerItem
        label = {({focused, color }) => <Text style = {{color: '#000' }}>Sign Out</Text> }
        onPress = {signOut}
        icon = {({color, size}) => <Icon name = 'exit-outline' size = {25} color = '#000' />}
    />
</Drawer.Section>
</DrawerContentScrollView>

)
}

const styles = StyleSheet.create({
sections:{},
container:{
    flex: 1,
},
switchContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    marginLeft: 20,
},
})