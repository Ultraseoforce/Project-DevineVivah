import { View, Text, StyleSheet, Image, FlatList, Pressable, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import { Typography } from '../../Theme/Typography';
import { Color } from '../../Theme';
import { scale } from '../../Theme/ResposiveSize';
import { FontSize } from '../../Theme/FontSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../Navigator/Utils';
import BackHeader from '../../Component/Header/BackHeader';

const { width } = Dimensions.get('window'); // Get the screen width

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
];

const MyWishlist = () => {
    const star = require("../../assets/Image/star.png");

    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate("ProductView", { item })} style={styles.itemContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.save}>
                <FontAwesome name="heart" size={20} color={Color.orange} />
            </View>
            <View style={styles.productInfo}>
                <Text style={[Typography.samll_bold, { color: Color.black }]}>{item.name}</Text>
                <View style={styles.priceRow}>
                    <Text style={[Typography.small, styles.lessPrice,{color: Color.black}]}>RS.{item.lessprice}</Text>
                    <Text style={[Typography.small, styles.price,{color: Color.black}]}>RS.{item.price}</Text>
                    <View style={styles.off}>
                        <Text style={[Typography.small, { fontSize: FontSize.Font12, color: Color.white }]}>{item.off}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Image source={star} style={styles.starIcon} />
                <Text style={[Typography.small, styles.rating,{color: Color}]}>{item.reting}</Text>
                <Text style={[Typography.small, styles.review,{color: Color.black}]}>{item.review}</Text>
                <Text style={[Typography.small, styles.solds,{color: Color.black}]}>{item.solds}</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={{ backgroundColor: Color.white, flex: 1 }}>
            <BackHeader leftTitle="My Wishlist" />
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 10 }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </View>
        </View>
    );
};

export default MyWishlist;

const styles = StyleSheet.create({
    container: {
        padding: scale(16),
        flex: 1,
    },
    itemContainer: {
        width: (width / 2) - scale(20), 
        backgroundColor: Color.boxBg,
        borderRadius: 10,
        // marginVertical: 8,
        overflow: 'hidden',
    },
    productImage: {
        width: '100%',
        height: scale(175),
        resizeMode: 'contain',
    },
    save: {
        backgroundColor: Color.white,
        height: scale(30),
        width: scale(30),
        borderRadius: 50,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        alignSelf: 'flex-end',
        right: 5,
        top: 5,
    },
    productInfo: {
        marginTop: 10,
        marginLeft: 10,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 5,
    },
    lessPrice: {
        fontSize: FontSize.Font15,
    },
    price: {
        fontSize: FontSize.Font15,
        textDecorationLine: 'line-through',
        color: Color.grey,
    },
    off: {
        backgroundColor: Color.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        height: scale(20),
        width: scale(50),
    },
    footer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginVertical: 10,
        gap: 5,
        alignItems: 'center',
    },
    starIcon: {
        height: 16,
        width: 16,
    },
    rating: {
        fontSize: FontSize.Font15,
    },
    review: {
        fontSize: FontSize.Font15,
        marginRight: 5,
    },
    solds: {
        fontSize: FontSize.Font15,
    },
});
