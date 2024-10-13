import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { FontSize } from '../../Theme/FontSize'
import { navigate } from '../../Navigator/Utils'

const YourMatches = () => {
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
        }
    ]


    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate("ViewProfile",{})} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
            <Text style={[Typography.small,{color:Color.black, alignSelf: "flex-start"} ]}>{item.name}</Text>
              <Image source={right} style={{height: 14, width: 14}} />
            </View>
            <Text style={Typography.smallText}>{item.detalis}</Text>
        </Pressable>
    );

    return (
        <View style={{ marginTop: moderateScale(20) }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={[Typography.title, { color: Color.chatBg }]}>Your Matches</Text>
                <Text style={[Typography.title, { color: Color.orange, fontSize: FontSize.Font16}]}>View All</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    )
}

export default YourMatches

const styles = StyleSheet.create({
    itemContainer: {
       marginTop: moderateScale(7)
    },
    image: {
        width: moderateScale(138),
        height: moderateScale(136),
        borderRadius: 6,
        marginBottom: 5,
    },
    flatListContent: {
        gap: 15
    },
})