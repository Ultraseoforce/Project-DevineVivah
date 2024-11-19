



import React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import { moderateScale, moderateScaleVertical } from '../../Theme/ResposiveSize';
import { navigate } from '../../Navigator/Utils';
import { images } from '../../Theme/Image';

interface CheckOut {
    status?: string
    date?: any
}

const CheckOutProduct = (Props: CheckOut) => {
    const product = require('../../assets/Image/bigprofile.png');
    return (
        <View style={styles.container}>
            {Props.status && <Text style={[Typography.small,{color: Color.chatBg}]}>{Props.date}</Text>}
            <Pressable onPress={() => navigate("OrderDetails", {})} style={styles.card}>
                <View style={styles.row}>
                    <Image source={images.jeweleryImage} style={styles.productImage} />
                    <View style={styles.productDetails}>
                        <Text style={[Typography.samll_bold, { color: Color.black, fontSize: FontSize.Font20 }]}>Product Name</Text>
                        <View style={styles.categoryRow}>
                            <Text style={[Typography.body, { letterSpacing: 0, color: Color.chatBg }]}>Category :</Text>
                            <Text style={[Typography.small, { color: Color.black }]}>Jewelery</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={[Typography.body, { color: Color.chatBg, letterSpacing: 0, fontSize: FontSize.Font18, textDecorationLine: 'line-through', }]}>RS.500</Text>
                            <View style={styles.discountRow}>
                                <Text style={styles.discountLabel}>-10% off</Text>
                                <Text style={[Typography.samll_bold, { fontSize: FontSize.Font21, color: Color.black }]}>450</Text>
                            </View>
                        </View>
                        {Props.status && (
                            <Text style={Typography.small}>
                                Status :{' '}
                                <Text
                                    style={{
                                        color:
                                            Props.status === 'Parceled'
                                                ? '#FFC107'
                                                : Props.status === 'Received'
                                                    ? '#0DB60D'
                                                    : Props.status === 'Delivered'
                                                        ? '#FF6041'
                                                        : Color.black,
                                    }}
                                >
                                    {Props.status}
                                </Text>
                            </Text>
                        )}
                    </View>

                    <View style={[styles.qtyContainer, { marginTop: Props.status ? moderateScale(37) : moderateScale(60) }]}>
                        <Text style={[Typography.body, { color: Color.chatBg, letterSpacing: 0 }]}>Qty : </Text>
                        <Text style={[Typography.samll_bold, { color: Color.black }]}> 1</Text>
                    </View>
                </View>
                {Props.status === "Received" &&
                    <>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: Color.border, marginVertical: 10 }} />
                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center", alignSelf: "flex-end" }}>
                            <Pressable style={styles.btn}>
                                <Text style={[Typography.smallText, { fontSize: FontSize.Font16, lineHeight: 21 }]}>Leave Feedback</Text>
                            </Pressable>
                            <Pressable style={[styles.btn, { backgroundColor: Color.orange, width: moderateScale(85), }]} >
                                <Text style={[Typography.smallText, { fontSize: FontSize.Font16, color: Color.white, lineHeight: 21 }]}> Buy Again</Text>
                            </Pressable>
                        </View>
                    </>
                }
                {/* <View style={styles.card} /> */}
            </Pressable>
        </View>
    );
};

export default CheckOutProduct;

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    card: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Color.border,
        marginTop: 5,
        padding: 10,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productImage: {
        width: moderateScale(99),
        height: moderateScale(100),
        borderRadius: 8
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-evenly',
    },
    productName: {
        ...Typography.smallTitle,
        color: '#000000',
        fontSize: 20,
    },
    categoryRow: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 2
    },
    categoryLabel: {
        color: '#8391A1',
        marginRight: 5,
    },
    categoryText: {
        color: '#000000',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    oldPrice: {
        color: '#8391A1',
        textDecorationLine: 'line-through',
        fontSize: 18,
    },
    discountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        gap: 10,

    },
    discountLabel: {
        backgroundColor: '#FF5A60',
        color: Color.white,
        padding: 3,
        borderRadius: 5,
        fontSize: 10,
    },
    newPrice: {
        color: '#000000',
        fontSize: 22,
        marginLeft: 5,
    },
    qtyContainer: {
        // justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: "row",
    },
    qtyLabel: {
        fontSize: 17,
        color: '#8391A1',
    },
    qtyValue: {
        fontSize: 17,
        color: '#000000',
    },
    btn: {
        height: moderateScale(34),
        width: moderateScale(140),
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Color.border
    }
})

