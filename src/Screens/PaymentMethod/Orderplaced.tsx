// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, Pressable } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { Color } from '../../Theme';
// import Button from '../../Component/Buttons/Button';
// import { Typography } from '../../Theme/Typography';
// import { FontSize } from '../../Theme/FontSize';
// import { moderateScale, scale } from '../../Theme/ResposiveSize';
// import ProductCard from '../../Component/Cards/ProductCard';
// import { navigationRef } from '../../Navigator/Utils';

// const Close = require('../../assets/Image/close.png');
// const Cash = require('../../assets/Image/Cash.png');

// const Orderplaced = () => {

//     const data = [
//         {
//             id: 1,
//             name: "Product name",
//             price: "500",
//             lessprice: "400",
//             off: "-10% off",
//             reting: "4.2",
//             review: "23",
//             solds: "700+ solds",
//             image: require("../../assets/Image/bigprofile.png")
//         },
//         {
//             id: 2,
//             name: "Product name",
//             price: "700",
//             lessprice: "500",
//             off: "-30% off",
//             reting: "2.2",
//             review: "25",
//             solds: "300+ solds",
//             image: require("../../assets/Image/bigprofile.png")
//         },
//         {
//             id: 3,
//             name: "Product name",
//             price: "200",
//             lessprice: "50",
//             off: "-30% off",
//             reting: "4.2",
//             review: "23",
//             solds: "600+ solds",
//             image: require("../../assets/Image/bigprofile.png")
//         },
//         {
//             id: 4,
//             name: "Product name",
//             price: "300",
//             lessprice: "200",
//             off: "-5% off",
//             reting: "3.2",
//             review: "22",
//             solds: "300+ solds",
//             image: require("../../assets/Image/bigprofile.png")
//         }
//       ]
      

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
//             <StatusBar backgroundColor={"transparent"} translucent barStyle={'dark-content'} />
//             <ScrollView>
//             <LinearGradient
//                 colors={[ '#FFBABC', '#DC777B',]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 0, y: 1 }}
//                 style={styles.container}
//             >
//                 <View style={styles.content}>
//                     <View style={{ flexDirection: "row", alignItems: "center" }}>
//                         <Pressable onPress={() => navigationRef.goBack()}>
//                         <Image  source={Close} style={{ marginRight: 50,  height: 22, width: 22 }} resizeMode='contain' />
//                         </Pressable>
//                         <Text style={[Typography.samll_bold,{ fontSize: FontSize.Font20 , color: Color.white, textAlign:"center" }]}>Pay at your address</Text>
//                     </View>
//                     <View style={{ backgroundColor: "white", marginTop: moderateScale(25), borderRadius: 10, padding: 15 }}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems :"center" }}>
//                             <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
//                                 <Image source={Cash} style={{ marginRight: 10 }} />
//                                 <Text style={[ Typography.samll_bold,{color: Color.black }]}>Cash on Delivery</Text>
//                             </View>
//                             <Text style={[Typography.samll_bold,{color: '#FF5A60' }]}>Rs. 1400</Text>
//                         </View>
//                         <View style={{ borderStyle: 'dashed', borderTopWidth: 1, borderColor: '#FF5A60', marginVertical: 15 }}>
//                             <Text style={[Typography.large_headings,{alignSelf: 'center', letterSpacing: 0, color: Color.chatBg, marginTop: 10,fontSize:FontSize.Font13 }]}>Please have this amount ready on delivery day.</Text>
//                         </View>
//                     </View>
//                     <Button title='View Order' mainStyle={{marginTop: 15}} />
//                 </View>
//             </LinearGradient>
//             <ProductCard heding="Similar Products" data={data} />
//             <ProductCard heding="Similar Products" data={data} />

//             </ScrollView>
//         </SafeAreaView>

//     );
// };

// const styles = StyleSheet.create({
//     container: {
//     },
//     content: {
//         marginTop: moderateScale(25),
//         padding: moderateScale(16)
//     },
//     text: {
//         fontSize: 24,
//         color: '#fff',
//     },
// });

// export default Orderplaced;





import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../Theme';
import Button from '../../Component/Buttons/Button';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import { moderateScale, scale } from '../../Theme/ResposiveSize';
import ProductCard from '../../Component/Cards/ProductCard';
import { navigationRef } from '../../Navigator/Utils';

const Close = require('../../assets/Image/close.png');
const Cash = require('../../assets/Image/Cash.png');

const Orderplaced = () => {
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
            image: require("../../assets/Image/bigprofile.png"),
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
            image: require("../../assets/Image/bigprofile.png"),
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={"transparent"} translucent barStyle={'dark-content'} />
            <ScrollView>
                <LinearGradient
                    colors={['#FFBABC', '#DC777B']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradientContainer}
                >
                    <View style={styles.header}>
                        <Pressable onPress={() => navigationRef.goBack()} style={styles.backButton}>
                            <Image source={Close} style={styles.closeIcon} resizeMode="contain" />
                        </Pressable>
                        <Text style={styles.title}>Pay at your address</Text>
                    </View>

                    <View style={styles.paymentContainer}>
                        <View style={styles.paymentRow}>
                            <View style={styles.paymentDetails}>
                                <Image source={Cash} style={styles.cashIcon} />
                                <Text style={styles.paymentText}>Cash on Delivery</Text>
                            </View>
                            <Text style={styles.paymentAmount}>Rs. 1400</Text>
                        </View>
                        <View style={styles.dashedLine} />
                        <Text style={styles.infoText}>
                            Please have this amount ready on delivery day.
                        </Text>
                    </View>

                    <Button title="View Order" mainStyle={styles.viewOrderButton} />
                </LinearGradient>
                <ProductCard heading="Similar Products" data={data} />
                <ProductCard heading="Similar Products" data={data} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.white,
    },
    gradientContainer: {
        padding: moderateScale(16),
        borderBottomLeftRadius: moderateScale(10),
        borderBottomRightRadius: moderateScale(10),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(25),
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    closeIcon: {
        height: moderateScale(22),
        width: moderateScale(22),
    },
    title: {
        ...Typography.samll_bold,
        fontSize: FontSize.Font20,
        color: Color.white,
        textAlign: 'center',
    },
    paymentContainer: {
        backgroundColor: Color.white,
        marginTop: moderateScale(25),
        borderRadius: moderateScale(10),
        padding: moderateScale(15),
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    paymentDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cashIcon: {
        marginRight: moderateScale(10),
        height: moderateScale(20),
        width: moderateScale(20),
    },
    paymentText: {
        ...Typography.samll_bold,
        color: Color.black,
        fontSize:FontSize.Font16
    },
    paymentAmount: {
        ...Typography.samll_bold,
        color: '#FF5A60',
        fontSize:FontSize.Font20
    },
    dashedLine: {
        borderStyle: 'dashed',
        borderTopWidth: 1,
        borderColor: '#FF5A60',
        marginTop: moderateScale(15),
    },
    infoText: {
        ...Typography.large_headings,
        alignSelf: 'center',
        letterSpacing: 0,
        color: Color.chatBg,
        marginTop: moderateScale(10),
        fontSize: FontSize.Font13,
    },
    viewOrderButton: {
        marginTop: moderateScale(15),
    },
});

export default Orderplaced;
