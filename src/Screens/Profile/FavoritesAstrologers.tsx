
// import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Typography } from '../../Theme/Typography'
// import { Color } from '../../Theme'
// import { moderateScale, scale } from '../../Theme/ResposiveSize'
// import { FontSize } from '../../Theme/FontSize'
// import { navigate } from '../../Navigator/Utils'

// const FamousAstrologers = () => {
//     const right = require("../../assets/Image/smallTik.png")
//     const star = require("../../assets/Image/star.png")


//     const data = [
//         {
//             id: 1,
//             name: "Full Name",
//             detalis: "4.5 rating ",
//             image: require("../../assets/Image/profile1.png")
//         },
//         {
//             id: 2,
//             name: "Full Name",
//             detalis: "4.5 rating ",
//             image: require("../../assets/Image/profile2.png")
//         },
//         {
//             id: 3,
//             name: "Full Name",
//             detalis: "4.5 rating ",
//             image: require("../../assets/Image/profile3.png")
//         },
//         {
//             id: 4,
//             name: "Full Name",
//             detalis: "4.5 rating ",
//             image: require("../../assets/Image/profile3.png")
//         },
//         {
//             id: 5,
//             name: "Full Name",
//             detalis: "4.5 rating ",
//             image: require("../../assets/Image/profile3.png")
//         }
//     ]


//     const renderItem = ({ item }: any) => (
//         <Pressable onPress={() => navigate("AstrologerProfileView", {})} style={styles.itemContainer}>
//             <Image source={item.image} style={styles.image} />
//             <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
//             <Text style={[Typography.small,{color:Color.black, alignSelf: "flex-start"} ]}>{item.name}</Text>
//               <Image source={right} style={{height: 14, width: 14}} />
//             </View>
//             <View  style={{flexDirection: "row", alignItems: "center", gap: 5}}>
//              <Image source={star} style={{height: 15, width: 15}}/>
//             <Text style={Typography.smallText}>{item.detalis}</Text>

//             </View>
//         </Pressable>
//     );

//     return (
//         <View style={{marginHorizontal: scale(16)}}>
//             <FlatList
//                 data={data}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id.toString()}
//                 numColumns={2}
//                 showsVerticalScrollIndicator={false}
//                 columnWrapperStyle={{gap: 10, justifyContent: 'space-between',}}
//             />
//         </View>
//     )
// }

// export default FamousAstrologers

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginHorizontal: moderateScale(16),
        
//     },
//     itemContainer: {
//         width: '48%', 
//         marginBottom: 15,
//     },
//     image: {
//         width: '100%', 
//         height: moderateScale(145),
//         borderRadius: 6,
//         marginBottom: 5,
//     },
//     flatListContent: {
         
//     },
//     textContainer: {
//         flexDirection: "row",
//         gap: 5,
//         alignItems: "center"
//     },
//     rightIcon: {
//         height: 14,
//         width: 14,
//     }
// })

import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
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
        },
        {
            id: 4,
            name: "Full Name",
            detalis: "4.5 rating ",
            image: require("../../assets/Image/profile3.png")
        },
        {
            id: 5,
            name: "Full Name",
            detalis: "4.5 rating ",
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
            <View  style={{flexDirection: "row", alignItems: "center", gap: 5}}>
              <Image source={star} style={{height: 15, width: 15}}/>
             <Text style={Typography.smallText}>{item.detalis}</Text>

            </View>
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

export default FamousAstrologers

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
