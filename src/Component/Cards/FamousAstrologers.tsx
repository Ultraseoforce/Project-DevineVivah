// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const FamousAstrologers = () => {
//   return (
//     <View>
//       <Text>FamousAstrologers</Text>
//     </View>
//   )
// }

// export default FamousAstrologers

// const styles = StyleSheet.create({})

import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { FontSize } from '../../Theme/FontSize'
import { navigate } from '../../Navigator/Utils'

const FamousAstrologers = () => {
    const right = require("../../assets/Image/smallTik.png")
    const star = require("../../assets/Image/star.png")


    const data = [
        {
            id: 1,
            name: "Full Name",
            detalis: "4.5 rating ",
            image: require("../../assets/Image/profile1.png")
        },
        {
            id: 2,
            name: "Full Name",
            detalis: "4.5 rating ",
            image: require("../../assets/Image/profile2.png")
        },
        {
            id: 3,
            name: "Full Name",
            detalis: "4.5 rating ",
            image: require("../../assets/Image/profile3.png")
        }
    ]


    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate("AstrologerProfileView", {})} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
            <Text style={[Typography.small,{color:Color.black, alignSelf: "flex-start"} ]}>{item.name}</Text>
              <Image source={right} style={{height: 14, width: 14}} />
            </View>
            <View  style={{flexDirection: "row", alignItems: "center", gap: 5}}>
             <Image source={star} style={{height: 15, width: 15}}/>
            <Text style={Typography.smallText}>{item.detalis}</Text>

            </View>
        </Pressable>
    );

    return (
        <View style={{ marginTop: moderateScale(20) }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={[Typography.title, { color: Color.chatBg }]}>Famous Astrologers</Text>
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

export default FamousAstrologers

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