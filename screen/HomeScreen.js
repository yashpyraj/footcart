import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

    const onSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button onPress={onSignOut} title='sign Out'></Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
