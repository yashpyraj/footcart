import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { AntDesign } from '@expo/vector-icons';
import "expo-dev-client"
const LoginScr = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#86A335", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: 'white', fontWeight: '800', letterSpacing: 5 }}>FOODCORT</Text>
            <Text style={{ fontSize: 14, color: 'white', fontWeight: '200', letterSpacing: 2 }}>FOOD DELIVER SERVICE</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{ borderRadius: 40, position: 'absolute', bottom: 150, backgroundColor: '#FEB74D', width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="down" size={20} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default LoginScr

const styles = StyleSheet.create({})