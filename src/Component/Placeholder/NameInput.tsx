import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import { FontSize } from '../../Theme/FontSize'
import { Typography } from '../../Theme/Typography'

interface Input {
    title?: string,
    value?: string,
    placeholder?: string,
    onChangeText?: any
    mainStyle?: any
    nameStyle?: boolean
    keyboardType?: any
    maxLength?: number
}


const NameInput = (auto: Input) => {
    return (
        <View style={[styles.container, auto.mainStyle,]}>
            <Text style={[Typography.title, {marginBottom: auto.nameStyle ? 5 : 0}]}>{auto.title}</Text>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder={auto.placeholder}
                    onChangeText={auto.onChangeText}
                    style={styles.input}
                    value={auto.value}
                    keyboardType={auto.keyboardType}
                    maxLength={auto.maxLength}
                    
                    />
            </View>
        </View>
    )
}

export default NameInput

const styles = StyleSheet.create({
    container: {
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: moderateScale(50),
        borderColor: Color.border,
        backgroundColor: Color.inputBg,
        paddingHorizontal: moderateScale(15),
    },
    input: {
        fontFamily: "Urbanist-Medium",
        fontSize: FontSize.Font16,
        color: Color.placeholderText,
        fontWeight: "500",
        paddingVertical: 10
    }
})