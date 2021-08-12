import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {NavigationContainer, DefaultTheme as NavDefaultTheme, DarkTheme as NavDarkTheme, useTheme as useNavTheme} from '@react-navigation/native';
import {createDrawerNavigator, openDrawer} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/HomeScreen.js';
import About from './screens/AboutScreen.js';
import Profile from './screens/ProfileScreen.js';
import Explore from './screens/ExploreScreen.js';
import MainTab, {HomeStackScreen, AboutStackScreen, ProfileStackScreen, ExploreStackScreen,
 ExploreTabScreen, AboutTabScreen, ProfileTabScreen,
 } from './screens/MainTab.js';
import {MainDrawer} from './screens/MainDrawer.js';
import RootScreen from './screens/RootNonMemberScreen.js';
import {generateToken} from './screens/TokenGenerator.js';
import {AuthContext} from './component/AuthContext.js';
import EditProfile from './screens/EditProfile.js';
import Loading from './screens/loadingscreen.js';

const Drawer = createDrawerNavigator();

export default function App() {

const CustomDefaultTheme = {
    ...NavDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
       ...NavDefaultTheme.colors,
       ...PaperDefaultTheme.colors,
       homeTab: '#33DDFF',
       homeIconBackground: '#33DDFF',
       aboutIconBackground: '#33FF58',
       profileIconBackground: '#A8FF33',
       exploreIconBackground: '#FF8333',
       drawerText: '#000',
       backgroundColor: '#23B525',
       linearButton: ['#23B525','#1B861D'],
       buttonText: '#fff',
       borderWidth: 0,
       borderRadius: 15,
       iconColor: '#fff',
       secondaryButtonBackgroundColor: '#fff',
       secondaryButtonText: '#000',
       secondaryIcon: '#000',
       splashLinear: ['#23B525','#1B861D'],
       editPageBackgroundColor: '#fff',
       editBurger: '#000',
       editBurgerBackground: '#fff',
       subtitle: '#9B9B9B',

    },
}

const CustomDarkTheme = {
    ...NavDarkTheme,
    ...PaperDarkTheme,
    colors:{
        ...NavDarkTheme.colors,
        ...PaperDarkTheme.colors,
        tabBarColor: '#fff',
        homeTab: '#fff',
        text: "#fff",
        iconActive: '#fff',
        iconInactive: 'ABABAB',
        stackBarColor: '#333',
        homeIconBackground: '#333',
        aboutIconBackground: '#333',
        profileIconBackground: '#333',
        exploreIconBackground: '#333',
        drawerBackgroundcolor: '#fff',
        drawerText: '#000',
        backgroundColor: '#333',
        linearButton: ['#fff','#fff'],
        buttonText: '#000',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
        iconColor: '#000',
        secondaryButtonBackgroundColor: '#333',
        secondaryButtonText: '#fff',
        secondaryIcon: '#fff',
        splashLinear: ['#000', '#000'],
        editPageBackgroundColor: '#333333',
        editBurger: '#fff',
       editBurgerBackground: '#000',
       subtitle: '#fff',
    },
}
const [isLoading, setLoading] = React.useState(true);
const [theme, setTheme] = React.useState(true);
let currentTheme = theme ? CustomDefaultTheme : CustomDarkTheme;

const initialLogin = {
    token: null,
    username: '',
    email: '',
    password: '',
}

const loginReducer = (prevState, action) =>{
switch(action.type){
    case 'RETRIEVE':
        return{...prevState,
            token: action.userToken,
        };
    case 'LOGIN':
        return{...prevState,
            token: action.userToken,
            username: action.id,
            email: action.mail,
            password: action.pass,
        };
    case 'LOGOUT':
        return{
            token: null,
            username: '',
            email: '',
            password: '',
        };
     case 'REGISTER':
        return{
            token: action.token,
            username: action.id,
            password: action.pass,
            email: action.mail,
        };
}
}

const [data, setData] = React.useReducer(loginReducer, initialLogin);

const context = React.useMemo(() =>({
signIn: async (username, email, password, token) =>{
    try{
        await AsyncStorage.setItem('Token', token)

    }catch (e){
        alert(e);
    }
    setData({type: 'LOGIN', id: username, mail: email, pass: password, userToken : token});
},
signOut: async ()=>{
    try{
        await AsyncStorage.removeItem('Token');
    }catch(e){
        alert(e);
    }
    setData({type: 'LOGOUT'});
},
createAccount: async (user, email, password) =>{
    let userToken = generateToken();
    try{
        await AsyncStorage.setItem('Token', userToken);
    }catch (e){
        alert(e);
    }
    setData({type: 'REGISTER', token: userToken, id: user, mail: email, pass: password})
},
toggleTheme: () =>{
    setTheme(theme => !theme)
},
}), []);

useEffect(()=>{
    setTimeout( async ()=>{
        let userToken;
        userToken = null;
        try{
            userToken = await AsyncStorage.getItem('Token')
        } catch(e){
            alert(e);
        }
        if(userToken !== null){
            setData({type: 'RETRIEVE', token: userToken,})
            }
        setLoading(false);
    }, 2000)

},[])

return (
<PaperProvider theme = {currentTheme}>
<AuthContext.Provider value = {context}>
    { isLoading ?
    <Loading />
         :
    <NavigationContainer theme = {currentTheme}>
    {data.token !== null ?
        <Drawer.Navigator drawerContent = {props => <MainDrawer {...props}  screenOptions = {{
        }}/>} >
            <Drawer.Screen name = 'Home' component = {MainTab} options = {{
/* When I migrated the project to bare minimum project, I had to write this line because prior to writing this, the app was showing a double header for some reason.*/
                headerShown: false,
            }}/>
            <Drawer.Screen name = 'EditProfile' component = {EditStackScreen} options = {{
                headerShown: false,
            }}/>
        </Drawer.Navigator>
        :
        <RootScreen />
    }
    </NavigationContainer>

    }
</AuthContext.Provider>
</PaperProvider>

  );
}

{/* The following code for creating a stack for the Edit Profile page is necessary to make the bottom sheet work.
For some reason, it doesn't work the screen is handled with the drawer navigator. */}
const EditStack = createStackNavigator();

const EditStackScreen = ({navigation}) =>{
const {colors} = useNavTheme();
return(
    <EditStack.Navigator screenOptions ={{

    }}>
        <EditStack.Screen name = 'EditProfileStack' component = {EditProfile} options = {{ title: "Edit Profile",

        headerLeft: ()=> <Icon.Button
            name = 'ios-menu'
            color = {colors.editBurger}
            size = {25}
            onPress = {() => navigation.openDrawer()}
            style = {[styles.iosMenu, {backgroundColor: colors.editBurgerBackground}]}/>
        }} />
    </EditStack.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iosMenu:{
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
});
