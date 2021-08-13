import React, {createContext} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const FireAuthContext = createContext();


export const AuthProvider = ({children}) =>{
const [user, setUse] = React.useState();
return(
    <FireAuthContext.Provider value ={{
        user,
        setUser,
        login: async (email, password) => {
            try{
                await auth().signInWithEmailAndPassword(email, password)
                .then(()=> alert('User account created & signed in!'));
            } catch(e){
                alert(e)
            }
        },
        logout: async ()=>{
            try{
                await auth().signOut();

            }catch(e){
            alert(e);
            }
        },
        register: async (email., password)=>{
            try{
                await auth().createUserWithEmailAndPassword(email, password)
                .then(()=>{
                    firestore().collection('users').doc(auth().currentUser.uid)
                    .set({
                        fname: '',
                        lname: '',
                        email: email,
                        createAt: firestore.Timestamp.fromDate(new Date()),
                        userImg; null,
                    })
                    .catch(error=>{
                        alert('Something went wrong with added user to firestore: ' + error);
                    })
                })
            } catch(e){
                alert(e)
            }
        },

    }} >
    {children}
    </FireAuthContext.Provider>
)
}
