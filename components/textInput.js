import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Octicons, Feather } from '@expo/vector-icons';

export default function MyTextInput(props) {
    const { onFocus, onBlur, secureTextEntry, ...otherProps } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
        onFocus && onFocus();
    }

    const handleBlur = () => {
        setIsFocused(false);
        onBlur && onBlur();
    }
    const handlePasswordVisibilityToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }


    return (
        <View style={{ borderWidth: 1, borderColor: isFocused ? '#FEB74Dd' : '#FAFAFA', flexDirection: 'row', padding: 5, margin: 20, backgroundColor: isFocused ? 'white' : '#FAFAFA', alignItems: 'center', paddingVertical: 15, borderRadius: 30 }}>
            <Octicons style={{ marginHorizontal: 10 }} name="person" size={20} color="black" />
            <TextInput
                {...otherProps}
                secureTextEntry={!isPasswordVisible && secureTextEntry}
                cursorColor="#FEB74D"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ width: "80%" }}
            />
            {secureTextEntry && (
                <Feather
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    color="#757575"
                    size={20}
                    onPress={handlePasswordVisibilityToggle}
                />
            )}
        </View>
    );
}


