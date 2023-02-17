import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useContext, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import HomeScreen from './screen/HomeScreen';
import SignIN from './screen/SignIN';
import LoginScr from './screen/LoginScr';
import "expo-dev-client"
export default function App() {
  GoogleSignin.configure({
    webClientId: '810371018445-j643tm08rl3uuh4k5gmrg3uovjbe5pt9.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

  });
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({});
  const ThemeContext = createContext({});
  const userInfo = useContext(ThemeContext);
  const Stack = createNativeStackNavigator();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);



  const onFacebookButtonPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    // return auth().signInWithCredential(facebookCredential);
    const userData = auth().signInWithCredential(facebookCredential);
    userData.then((user) =>
      console.log(user)
    ).catch((e) =>
      console.log(e))
  }

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userData = auth().signInWithCredential(googleCredential);
    userData.then((user) =>
      console.log(user)
    ).catch((e) =>
      console.log(e))
  }
  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  if (initializing) return null

  // if (!user) {
  //   return (
  //     <View style={styles.container}>

  //       <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} onPress={onGoogleButtonPress}>
  //         <Text> google Login</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} onPress={onFacebookButtonPress}>
  //         <Text> faceBook Login</Text>
  //       </TouchableOpacity>
  //     </View>

  //   )
  // }
  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{ user, setUser }}>
        <Stack.Navigator >
          {user && <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />}
          <Stack.Screen name="Login" component={LoginScr} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignIN} options={{ headerShown: false }} />

        </Stack.Navigator>
        <StatusBar style="auto" />

      </ThemeContext.Provider>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
