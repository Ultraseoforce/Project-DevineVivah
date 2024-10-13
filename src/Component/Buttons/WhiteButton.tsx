import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'

interface IWhite {
    onPress?: Function,
    title?: String,
    mainStyle?: any
}

const WhiteButton = (Props: IWhite) => {
    return (
        <Pressable onPress={() => Props.onPress ? Props.onPress() : null} style={[styles.container, Props.mainStyle]}>
            <Text style={[Typography.samll_bold, { fontSize: FontSize.Font14, color: Color.black }]}>{Props.title}</Text>
        </Pressable>
    )
}

export default WhiteButton

const styles = StyleSheet.create({
    container: {
        height: scale(34),
        width: scale(95),
        backgroundColor: Color.white,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scale(25)
    }
})