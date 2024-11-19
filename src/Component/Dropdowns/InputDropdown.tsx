import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import { FontSize } from '../../Theme/FontSize'
import { Typography } from '../../Theme/Typography'
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Input {
    title?: string,
    value?: string,
    placeholder?: string,
    onChangeText?: (value: string) => void
    mainStyle?: object
    nameStyle?: boolean
}

const InputDropdown = (auto: Input) => {
    const [value, setValue] = useState('');
console.log("auto value", auto.value)

    useEffect(() => {
        if (auto.value !== value) {
            setValue(auto.value || '');
        }
    }, [auto.value]);

    const Increment = () => {
        const numericValue = parseInt(value, 10) || 0;
        const newValue = (numericValue + 1).toString();
        setValue(newValue);
        if (auto.onChangeText) {
            auto.onChangeText(newValue);
        }
    };

    const Decrement = () => {
        const numericValue = parseInt(value, 10) || 0;
        if (numericValue > 0) {
            const newValue = (numericValue - 1).toString();
            setValue(newValue);
            if (auto.onChangeText) {
                auto.onChangeText(newValue);
            }
        }
    };

    const ChangeText = (text: string) => {
        setValue(text);
        if (auto.onChangeText) {
            auto.onChangeText(text);
        }
    };

    return (
        <View style={[styles.container, auto.mainStyle]}>
            <Text style={[Typography.title, { marginBottom: auto.nameStyle ? 5 : 0 }]}>{auto.title}</Text>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder={auto.placeholder}
                    onChangeText={ChangeText}
                    style={styles.input}
                    value={value}
                    keyboardType="numeric"
                />
                <View style={styles.iconContainer}>
                    <Pressable onPress={Increment}>
                        <AntDesign name="up" size={16} color={Color.black} />
                    </Pressable>
                    <Pressable onPress={Decrement}>
                        <AntDesign name="down" size={16} color={Color.black} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default InputDropdown

const styles = StyleSheet.create({
    container: {},
    inputBox: {
        borderWidth: 1,
        borderRadius: moderateScale(50),
        borderColor: Color.border,
        backgroundColor: Color.inputBg,
        paddingHorizontal: moderateScale(15),
        justifyContent: "center"
    },
    input: {
        fontFamily: "Urbanist-Medium",
        fontSize: FontSize.Font16,
        color: Color.placeholderText,
        fontWeight: "500",
        paddingVertical: 10
    },
    iconContainer: {
        position: "absolute",
        right: moderateScale(20),
        gap: 3
    }
})
