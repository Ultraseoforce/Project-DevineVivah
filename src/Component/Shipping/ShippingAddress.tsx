import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import BackHeader from '../Header/BackHeader'
import { height } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'
import ShippingAddressCard from './ShippingAddressCard'
import { navigate } from '../../Navigator/Utils'

const ShippingAddress = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
            <BackHeader centerTitle='Shipping Address' />
            <View style={{ margin: 15 }}>
                <Pressable onPress={() => navigate("AddShippingAddress",{})} style={styles.address} >
                    <Text style={[Typography.samll_bold, { fontSize: FontSize.Font22, color: Color.orange }]}>Add Address</Text>
                </Pressable>
                <ShippingAddressCard  mainStyle= {{marginTop: 15}} addressBtton ShowEdit heading="Address 1" name='Person Name' phoneNumber="1234567890" address="House#, Street no. Street name, city, state, country." />

            </View>
        </SafeAreaView>
    )
}

export default ShippingAddress

const styles = StyleSheet.create({
    address: {
        height: 150,
        backgroundColor: "#FF5A6040",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Color.orange,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    }
})