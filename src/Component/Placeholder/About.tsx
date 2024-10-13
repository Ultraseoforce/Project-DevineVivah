import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'

interface IAbout {
    title?: string,
    placeholder?: string
    value?: string
    numberOfLines?: number
    onChangeText?: any

}


const About = (auto: IAbout) => {
    const [aboutYou, setAboutYou] = useState('');
    return (
        <View>
            <Text style={[Typography.title, { marginBottom: auto.title ? 5 : 0 }]}>{auto.title}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={auto.placeholder}
                placeholderTextColor={Color.chatBg}
                multiline={true}
                numberOfLines={auto.numberOfLines}
                value={auto.value}
                onChangeText={auto.onChangeText}
            />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    textInput: {
        height: moderateScale(135),
        borderColor: Color.border,
        borderWidth: 1,
        fontFamily: "Urbanist-SemiBold",
        fontSize: FontSize.Font16,
        borderRadius: moderateScale(30),
        paddingHorizontal: moderateScale(20),
        textAlignVertical: 'top',
        backgroundColor: Color.inputBg,
        color: Color.black,
    },
})