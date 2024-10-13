import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { navigate } from '../../Navigator/Utils'

const FavoritesPeoples = () => {
    const right = require("../../assets/Image/smallTik.png")

    const data = [
        {
            id: 1,
            name: "Full Name",
            detalis: "Age.Height",
            image: require("../../assets/Image/profile1.png")
        },
        {
            id: 2,
            name: "Full Name",
            detalis: "Age.Height",
            image: require("../../assets/Image/profile2.png")
        },
        {
            id: 3,
            name: "Full Name",
            detalis: "Age.Height",
            image: require("../../assets/Image/profile3.png")
        },
        {
            id: 4,
            name: "Full Name",
            detalis: "Age.Height",
            image: require("../../assets/Image/profile3.png")
        },
        {
            id: 5,
            name: "Full Name",
            detalis: "Age.Height",
            image: require("../../assets/Image/profile3.png")
        }
    ]

    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate("ViewProfile",{})} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={[Typography.small, { color: Color.black }]}>{item.name}</Text>
                <Image source={right} style={styles.rightIcon} />
            </View>
            <Text style={Typography.smallText}>{item.detalis}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{gap: 10, justifyContent: 'space-between',}}
            />
        </View>
    )
}

export default FavoritesPeoples

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(16),
        
    },
    itemContainer: {
        width: '48%', 
        marginBottom: 15,
    },
    image: {
        width: '100%', 
        height: moderateScale(145),
        borderRadius: 6,
        marginBottom: 5,
    },
    flatListContent: {
         
    },
    textContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    rightIcon: {
        height: 14,
        width: 14,
    }
})
