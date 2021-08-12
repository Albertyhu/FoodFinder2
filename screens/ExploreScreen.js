import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button, Dimensions, ActivityIndicator, Image, ImageBackground} from 'react-native';
import {openDrawer} from '@react-navigation/drawer';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

export default function App({navigation}){
const [location, setLocation] = React.useState({
 latitude: 0,
 longitude: 0,
 latitudeDelta: 0.0922,
 longitudeDelta: 0,
 loading: false,
})
const foodImage = require('../assets/banner/food-banner1.jpg');
const window = Dimensions.get('window');
const { width, height }  = window;

return(
<View style = {styles.container}>
{  location.loading ?
    <ActivityIndicator />
    :
    <View style = {styles.container}>
    <Text>Explore</Text>
    <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       region={{
         latitude: 34.120880,
         longitude: -118.066250,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
        <Marker
          coordinate={{
            latitude: 34.120880,
            longitude: -118.066250,
          }}
          image = {require('../assets/map_marker.png')}
          title = 'Home'
          description = 'This is the headquarters of Albert Hu.'
        >
        <Callout tootip = {true}>
            <View>
                <Text style = {styles.title}>Favorite Restaurant</Text>
                <Text>A short description</Text>
             </View>
        </Callout>
        </Marker>
     </MapView>
    <Button title = "Open Drawer" onPress = {() => {navigation.openDrawer()}} />
    </View>
    }
</View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
image:{
    width: 50,
    height: 50,
    resizeMode: 'cover',
},
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})