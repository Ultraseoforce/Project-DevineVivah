import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';

const CategoryCard = () => {

const data=[
    {
        id: 1,
        name: "Daily",
        body: "Horoscope",
        icon: require("../../assets/Image/daily.png")
    },
    {
        id: 2,
        name: "Free",
        body: "Kundii",
        icon: require("../../assets/Image/free.png")
    },
    {
        id: 3,
        name: "Horoscope",
        body: "Matching",
        icon: require("../../assets/Image/horoscope.png")
    },
    {
        id: 4,
        name: "Chogadiya",
        body: "",
        icon: require("../../assets/Image/chogadiya.png")
    },
    {
        id: 5,
        name: "Marriage",
        body: "Murat",
        icon: require("../../assets/Image/marriage.png")
    },
    {
        id: 6,
        name: "Numerology",
        body: "",
        icon: require("../../assets/Image/numerology.png")
    }
]


const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} />
        </View>
        <Text style={[Typography.small,  {color: Color.black}]}>{item.name}</Text>
        <Text style={[Typography.small,{color: Color.chatBg}]}>{item.body}</Text>
    </View>
);

  return (
    <View style={{backgroundColor: Color.boxBg, borderRadius: 18, padding: moderateScale(15), marginTop: moderateScale(15) }}>
       <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContainer}
        />
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    listContainer: {
    },
    row: {
        justifyContent: "space-between",
        marginBottom: moderateScale(15),
    },
    itemContainer: {        
        alignItems: "center",
    },
    iconContainer: {
        height: moderateScale(65),
        width: moderateScale(65),
        borderRadius: moderateScale(50),
        backgroundColor: Color.orange,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: moderateScale(10),
    },
    icon: {
        height: moderateScale(35),
        width: moderateScale(35),
        resizeMode: "contain",
    },
})