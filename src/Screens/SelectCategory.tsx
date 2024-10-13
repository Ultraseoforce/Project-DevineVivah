import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../Theme'
import { scale } from '../Theme/ResposiveSize'
import Feather from 'react-native-vector-icons/Feather';
import { Typography } from '../Theme/Typography';
import { FontSize } from '../Theme/FontSize';
import { navigationRef } from '../Navigator/Utils';
import SearchBar from '../Component/Search/SearchCard';
import ShopeCategoryCard from '../Component/Cards/ShopeCategoryCard';

const SelectCategory = () => {

    const data = [
        { id: 1, title: "Jewelry", icon: require("../assets/Image/jewelry.png") },
        { id: 2, title: "Stones", icon: require("../assets/Image/jewelry.png") },
        { id: 3, title: "Mugs", icon: require("../assets/Image/jewelry.png") },
        { id: 4, title: "Shirts", icon: require("../assets/Image/jewelry.png") },
        { id: 5, title: "Watches", icon: require("../assets/Image/jewelry.png") },
    ];

    return (
        <SafeAreaView style={{ backgroundColor: Color.white, flex: 1 }}>
            <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
            <View style={{ marginTop: scale(20), padding: 20, flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => navigationRef.goBack()} style={styles.back}>
                    <Feather name="chevron-left" size={30} color={Color.black} />
                </Pressable>
            </View>
            <Text style={[Typography.samll_bold, styles.heading]}>SelectCategory</Text>
            {/* <SearchBar placeHolder='Search Category' style={styles.search} tinColor="#8391A1" inputStyle={Typography.small} searchData={data} /> */}
            <ShopeCategoryCard showsVertical />
        </SafeAreaView>
    )
}

export default SelectCategory

const styles = StyleSheet.create({
    back: {
        height: scale(49),
        width: scale(49),
        backgroundColor: Color.inputBg,
        borderRadius: scale(50),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Color.border

    },
    heading: {
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: scale(50),
        fontSize: FontSize.Font24,
        lineHeight: 26,
        color: Color.black
    },
    search:{
        backgroundColor: Color.boxBg,
        width: "90%",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Color.border
        },
})