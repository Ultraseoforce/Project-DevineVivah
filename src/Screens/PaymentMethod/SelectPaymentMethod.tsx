import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { moderateScale } from '../../Theme/ResposiveSize'
import { FontSize } from '../../Theme/FontSize'
import Icon from 'react-native-vector-icons/FontAwesome'
import RadioButton from '../../Component/Buttons/RadioButton'
import Button from '../../Component/Buttons/Button'
import { Typography } from '../../Theme/Typography'
import { navigate } from '../../Navigator/Utils'

const Razorpay = require('../../assets/Image/Razorpay.png')
const Cash = require('../../assets/Image/Cash.png')

const SelectPaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <BackHeader centerTitle='Select PaymentMethod' />
            <View style={{ flex: 1, padding: moderateScale(16) }}>
                <Text style={[Typography.small,{fontSize: FontSize.Font18, color: Color.chatBg}]}>Payment Methods</Text>

                <Pressable
                    style={styles.paymentMethod}
                    onPress={() => setSelectedMethod('Razorpay')}>
                    <View style={styles.paymentDetails}>
                        <Image source={Razorpay} />
                        <Text style={[Typography.samll_bold,{color: Color.black}]}>Razorpay</Text>
                    </View>
                    <Icon name='angle-right' size={25} color={'#FF5A60'} />
                </Pressable>

                <Pressable
                    style={styles.paymentMethod}
                    onPress={() => setSelectedMethod('CashonDelivery')}>
                    <View style={styles.paymentDetails}>
                        <Image source={Cash} style={styles.cashImage} />
                        <View style={styles.paymentDescription}>
                            <Text style={[Typography.samll_bold,{color: Color.black}]}>Cash on Delivery</Text>
                            <Text style={[Typography.small,{fontSize: FontSize.Font14, color: Color.chatBg}]}>Pay on Delivery</Text>
                        </View>
                    </View>
                    <RadioButton selected={selectedMethod === 'Cash on Delivery'} onPress={() => setSelectedMethod('Cash on Delivery')} mainStyle={{ left: moderateScale(20)}} />
                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.totalContainer}>
                    <Text style={[Typography.body,{letterSpacing: 0}]}>Sub Total:</Text>
                    <Text style={[Typography.body,{color: Color.black}]}>Rs. 1400</Text>
                </View>
                <Button title='Place Order' onPress={() => navigate("Orderplaced", {})} />
            </View>
        </SafeAreaView>
    )
}

export default SelectPaymentMethod

const styles = StyleSheet.create({
    paymentMethod: {
        borderWidth: 1,
        borderColor: Color.border,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginTop: 10,
       
        
    },
    paymentDetails: {
        flexDirection: 'row',
    },
    cashImage: {
        marginRight: 10,
        alignSelf: 'center'
    },
    paymentDescription: {
        flexDirection: 'column',
    },  
    paymentText: {
        fontSize: 16,
        color: "#000000",
        fontFamily: 'Urbanist',
    },
    subText: {
        fontSize: 14,
        color: "#8391A1",
        fontFamily: 'Urbanist',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: moderateScale(16),
        backgroundColor: Color.white,
        borderTopWidth: 1,
        borderTopColor: Color.border,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: moderateScale(8),
    },
    subTotalText: {
        color: "#8391A1",
        fontSize: 14,
        fontFamily: "Urbanist",
    },
    amountText: {
        color: "#000000",
        fontSize: 16,
        fontFamily: "Urbanist",
        fontWeight: "bold",
    },
});
