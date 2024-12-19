import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { moderateScale, scale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'


interface IRequestButton {
    backgroundColor?: string
    title?: string
    onPress?: Function
    isloading: boolean
}
const RequestButton = (Props: IRequestButton) => {
    return (
        <Pressable onPress={() => Props.onPress ? Props.onPress() : null}
            style={[styles.container, { backgroundColor: Props.backgroundColor ? Props.backgroundColor : Color.orange }]}>
            {Props.isloading ?
                <ActivityIndicator color={Color.orange} size={'small'} />
                :
                <Text style={[Typography.samll_bold, { color: Color.white }]}>{Props.title}</Text>}

        </Pressable>
    )
}

export default RequestButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: scale(40),
        marginHorizontal: scale(15),
        borderRadius: moderateScale(7),
        alignItems: "center",
        justifyContent: "center"

    }
})