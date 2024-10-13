import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'

interface IFilters {
    onFilter?: Function
    mainStyle?: any
}
const Filters = (auto: IFilters) => {

    const Filter = require("../../assets/Image/Filters.png")
    return (
        <Pressable onPress={() => auto.onFilter ? auto.onFilter() : null} style={[styles.container, auto.mainStyle]}>
            <Image source={Filter} style={{ height: 18, width: 24 }} />
        </Pressable>
    )
}

export default Filters

const styles = StyleSheet.create({
    container: {
        height: moderateScale(48),
        width: moderateScale(48),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.white,
        borderRadius: 5,
    }
})