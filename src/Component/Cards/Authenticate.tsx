import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'

const Authenticate = () => {
    const google = require("../../assets/Image/google.png")
    const facebook = require("../../assets/Image/facebook.png")
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(20) }}>
            <View style={styles.cards}>
                <Image source={google} style={styles.icon} resizeMode='contain' />
                <Text style={[styles.title, Typography.small,{color: Color.black}]}>Google</Text>
            </View>
            <View style={styles.cards}>
                <Image source={facebook} style={styles.icon} resizeMode='contain' />
                <Text style={[styles.title, Typography.small,{color: Color.black}]}>Facebook</Text>
            </View>
        </View>
    )
}

export default Authenticate

const styles = StyleSheet.create({
    cards: {
        backgroundColor: Color.inputBg,
        borderRadius: moderateScale(50),
        borderWidth: 1,
        borderColor: Color.border,
        flexDirection: "row",
        justifyContent: "center", 
        alignItems: "center", 
        gap: 10,
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        width: moderateScale(165),
    },
    icon: {
        height: 27,
        width: 27,
    },
    title: {
        color: "#4A4B4E"
    }
})
