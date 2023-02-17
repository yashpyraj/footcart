import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import MyTextInput from "../components/textInput"
import { Switch } from 'react-native-switch';

export default function SignIN({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1, backgroundColor: "#86A335" }}>

            <View style={{ height: 100 }}>
                <View style={{ justifyContent: "space-between", margin: 20, alignItems: 'center', flexDirection: 'row', marginTop: 40 }} >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>Forget your Password?</Text>
                </View>
            </View>
            <View style={{
                flex: 1, backgroundColor: "white", borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                paddingTop: 20,
                padding: 10
            }}>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: "500" }}>Let's get something</Text>
                    <Text style={{ fontSize: 15, fontWeight: "300" }}>Good to see you back</Text>


                </View>
                <View style={{
                    flexDirection: 'row', margin: 20,
                    padding: 10
                }}>
                    <TouchableOpacity style={styles.logo}>
                        <FontAwesome name="google-plus-circle" size={34} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.logo}>

                        <Entypo name="facebook-with-circle" size={34} color="#3C5998" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>

                        <Entypo name="twitter-with-circle" size={34} color="#56ACEE" />
                    </TouchableOpacity>
                </View>

                <View>
                    <MyTextInput placeholder='Username' />
                    <MyTextInput placeholder='Password' secureTextEntry />
                    {/* <MyTextInput placeholder='Email' keyboardType='email-address' /> */}
                </View>
                <View style={{ margin: 10, marginLeft: 15, justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                    <Text>
                        Reminder me next time

                    </Text>
                    <Switch
                        value={isEnabled}
                        onValueChange={toggleSwitch}
                        circleSize={20}
                        barHeight={25}
                        circleBorderWidth={0}
                        backgroundActive={'#FEB74D'}
                        backgroundInactive={'gray'}
                        circleActiveColor={'white'}
                        circleInActiveColor={'white'}
                        // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                        innerCircleStyle={{ alignItems: "center", justifyContent: "center", width: 10 }} // style for inner animated circle for what you (may) be rendering inside the circle
                        renderActiveText={false}
                        renderInActiveText={false}
                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                        switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                    />
                </View>
                <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#FEB74D', justifyContent: 'center', alignItems: 'center', width: "80%", padding: 20, margin: 20, borderRadius: 40 }}>
                        <Text style={{ color: 'white', fontSize: 17 }}>SIGN IN</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17, color: '#9595b7' }}>
                        Don't have a account? <Text style={{ fontSize: 17, color: '#FEB74D' }}>
                            Sign Up
                        </Text>
                    </Text>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    logo: {

        marginHorizontal: 5
    },
    switch: {

    },
})
