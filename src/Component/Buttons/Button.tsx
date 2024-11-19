import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'


interface Ibutton {
    onPress?: Function
    mainStyle?: any
    title?: string
    disabled?: boolean
    
}

const Button = (auto: Ibutton) => {
    return (
        <Pressable disabled={auto.disabled} style={[styles.container, auto.mainStyle]} onPress={() => auto.onPress ? auto.onPress() : null}>
            <Text style={[styles.text, Typography.small]}>{auto.title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.orange,
        padding: 17,
        borderRadius: moderateScale(50),
        alignContent: "center",
        alignItems: "center"
    },
    text: {
        color: Color.white
    }
})