// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Color } from '../../Theme'

// const OrderDetails = () => {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: Color.white}}>
//       <Text>OrderDetails</Text>
//     </SafeAreaView>
//   )
// }

// export default OrderDetails

// const styles = StyleSheet.create({})

import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import { Color } from '../../Theme'
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import ProductCard from '../../Component/Cards/ProductCard';
import BackHeader from '../../Component/Header/BackHeader';
import CheckOutProduct from '../Checkout/CheckOutProduct';
import ShippingAddressCard from '../../Component/Shipping/ShippingAddressCard';

const Logistics = require('../../assets/Image/Logistics.png')
const data = [
    {
        id: 1,
        name: "Product name",
        price: "500",
        lessprice: "400",
        off: "-10% off",
        reting: "4.2",
        review: "23",
        solds: "700+ solds",
        image: require("../../assets/Image/product.png")
    },
    {
        id: 2,
        name: "Product name",
        price: "700",
        lessprice: "500",
        off: "-30% off",
        reting: "2.2",
        review: "25",
        solds: "300+ solds",
        image: require("../../assets/Image/product.png")
    },
    {
        id: 3,
        name: "Product name",
        price: "200",
        lessprice: "50",
        off: "-30% off",
        reting: "4.2",
        review: "23",
        solds: "600+ solds",
        image: require("../../assets/Image/product.png")
    },
    {
        id: 4,
        name: "Product name",
        price: "300",
        lessprice: "200",
        off: "-5% off",
        reting: "3.2",
        review: "22",
        solds: "300+ solds",
        image: require("../../assets/Image/product.png")
    }
]

const OrderDetails = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <BackHeader leftTitle='Order Details'  />
            <ScrollView>
                <LinearGradient
                    colors={['#FFBABC', '#DC777B']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={styles.innerContainer}>
                        <View style={styles.textContainer}>
                            <Text style={[Typography.samll_bold, styles.heading]}>
                                Completed!
                            </Text>
                            <Text style={[Typography.smallTitle, styles.subText]}>
                                Paid by Cash on Delivery. Your order has been completed. We look forward to seeing you again!!
                            </Text>
                        </View>
                        <Image source={Logistics} style={styles.image} />
                    </View>
                </LinearGradient>


                <View style={styles.contentContainer}>
                <ShippingAddressCard  mainStyle= {{marginTop: 5}} toptitle='Delivered at'  heading="Address 1" name='Person Name' phoneNumber="1234567890" address="House#, Street no. Street name, city, state, country." />
                <CheckOutProduct status="Received" date="Product Detail" />
                    <Text style={[Typography.samll_bold, styles.subHeading]}>Completed!</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Sub Total(1 Item)</Text>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Delivery Charge</Text>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Total</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>INR. 450</Text>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>INR. 50</Text>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>INR. 500</Text>
                        </View>
                    </View>

                    <Text style={[Typography.smallTitle, styles.sectionTitle]}>Paid by</Text>

                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={[Typography.smallTitle, styles.label]}>Cash on Delivery</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>INR. 500</Text>
                        </View>
                    </View>

                    <View style={[styles.row, { borderBottomWidth: 0, marginBottom: -10, }]}>
                        <Text style={[styles.sectionTitle, Typography.smallTitle]}>Order No.</Text>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={[styles.orderNumber, Typography.smallTitle]}>1808910447661231</Text>
                            <Text style={[styles.copyText, Typography.smallTitle]}>Copy</Text>
                        </View>
                    </View>

                    <Text style={[styles.moreDetails, Typography.smallTitle]}>More Details:</Text>

                    <View style={[styles.row, { borderBottomWidth: 0 }]}>
                        <View style={styles.column}>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Placed on</Text>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Paid</Text>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Delivered on</Text>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Completed on</Text>
                            <Text style={[Typography.smallTitle, { color: Color.chatBg }]}>Paid by</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>06 March 2024 20:00:47</Text>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>06 March 2024 20:00:47</Text>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>06 March 2024 20:00:47</Text>
                            <Text style={[Typography.smallTitle, { color: Color.black }]}>06 March 2024 20:00:47</Text>
                            <Text style={[Typography.smallTitle, { color: Color.black, textAlign: "right" }]}>Cash on Delivery</Text>
                        </View>
                    </View>
                </View>
                    <ProductCard heding={'Similar Products'} data={data} />
                    <ProductCard heding={'Similar Products'} data={data} />
            </ScrollView>
        </View>
    )
}

export default OrderDetails

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        // marginTop: 10
    },
    textContainer: {
        flex: 1,
        paddingRight: 16,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    heading: {
        fontSize: FontSize.Font24,
        marginBottom: 10,
        color: Color.black,
    },
    subText: {
        fontSize: FontSize.Font16,
        letterSpacing: 0,
        lineHeight: 22,
        color: Color.black,
    },
    contentContainer: {
        padding: 16,
    },
    subHeading: {
        fontSize: FontSize.Font16,
        marginBottom: 10,
        color: Color.black,
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: Color.chatBg,
        marginBottom: 10,
        // paddingBottom: 10,
    },
    column: {
        flexDirection: 'column',
        justifyContent: "space-between",
    },
    label: {
        // fontSize: FontSize.Font16,
        color: Color.chatBg,
        marginBottom: 10,
    },
    value: {
        // fontSize: FontSize.Font16,
        // color: Color.black,
        // marginBottom: 10,
    },
    sectionTitle: {
        fontSize: FontSize.Font16,
        color: Color.black,
        marginTop: 10,
    },
    orderNumber: {
        fontSize: FontSize.Font16,
        color: Color.black,
        marginRight: 10,
        marginTop: 10
    },
    copyText: {
        fontSize: FontSize.Font16,
        color: Color.orange,
        marginTop: 10,
    },
    moreDetails: {
        fontSize: FontSize.Font16,
        color: Color.chatBg,
        // marginBottom: 10,
    },
})
