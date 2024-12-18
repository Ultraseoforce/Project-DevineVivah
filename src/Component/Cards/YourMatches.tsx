// import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Typography } from '../../Theme/Typography'
// import { Color } from '../../Theme'
// import { moderateScale } from '../../Theme/ResposiveSize'
// import { FontSize } from '../../Theme/FontSize'
// import { navigate } from '../../Navigator/Utils'

// const YourMatches = () => {
//     const right = require("../../assets/Image/smallTik.png")

//     const data = [
//         {
//             id: 1,
//             name: "Full Name",
//             detalis: "Age.Height",
//             image: require("../../assets/Image/profile1.png")
//         },
//         {
//             id: 2,
//             name: "Full Name",
//             detalis: "Age.Height",
//             image: require("../../assets/Image/profile2.png")
//         },
//         {
//             id: 3,
//             name: "Full Name",
//             detalis: "Age.Height",
//             image: require("../../assets/Image/profile3.png")
//         }
//     ]


//     const renderItem = ({ item }: any) => (
//         <Pressable onPress={() => navigate("ViewProfile",{})} style={styles.itemContainer}>
//             <Image source={item.image} style={styles.image} />
//             <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
//             <Text style={[Typography.small,{color:Color.black, alignSelf: "flex-start"} ]}>{item.name}</Text>
//               <Image source={right} style={{height: 14, width: 14}} />
//             </View>
//             <Text style={Typography.smallText}>{item.detalis}</Text>
//         </Pressable>
//     );

//     return (
//         <View style={{ marginTop: moderateScale(20) }}>
//             <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//                 <Text style={[Typography.title, { color: Color.chatBg }]}>Your Matches</Text>
//                 <Text style={[Typography.title, { color: Color.orange, fontSize: FontSize.Font16}]}>View All</Text>
//             </View>
//             <FlatList
//                 data={data}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id.toString()}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.flatListContent}
//             />
//         </View>
//     )
// }

// export default YourMatches

// const styles = StyleSheet.create({
//     itemContainer: {
//        marginTop: moderateScale(7)
//     },
//     image: {
//         width: moderateScale(138),
//         height: moderateScale(136),
//         borderRadius: 6,
//         marginBottom: 5,
//     },
//     flatListContent: {
//         gap: 15
//     },
// })

import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Typography } from '../../Theme/Typography';
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';
import { FontSize } from '../../Theme/FontSize';
import { navigate } from '../../Navigator/Utils';

const YourMatches = () => {
    const right = require('../../assets/Image/smallTik.png');

    const data = [
        {
            id: 1,
            name: 'Full Name',
            details: 'Age.Height',
            image: require('../../assets/Image/profile1.png'),
        },
        {
            id: 2,
            name: 'Full Name',
            details: 'Age.Height',
            image: require('../../assets/Image/profile2.png'),
        },
        {
            id: 3,
            name: 'Full Name',
            details: 'Age.Height',
            image: require('../../assets/Image/profile3.png'),
        },
    ];

    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate('ViewProfile', {})} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Image source={right} style={styles.tickIcon} />
            </View>
            <Text style={styles.detailsText}>{item.details}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Your Matches</Text>
                <Pressable onPress={() => navigate('ViewAll', {})}>
                    <Text style={styles.viewAllText}>View All</Text>
                </Pressable>
            </View>

            {/* Images Section */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.imageListContainer}
            />
        </View>
    );
};

export default YourMatches;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: FontSize.Font15,
        color: Color.chatBg,
    },
    viewAllText: {
        fontSize: FontSize.Font16,
        color: Color.orange,
        textDecorationLine: 'underline',
    },
    imageListContainer: {
        flexDirection: 'row',
        gap: moderateScale(15),
    },
    itemContainer: {
        marginTop: moderateScale(7),
    },
    image: {
        width: moderateScale(138),
        height: moderateScale(136),
        borderRadius: 6,
        marginBottom: moderateScale(5),
    },
    infoContainer: {
        flexDirection: 'row',
        gap: moderateScale(5),
        alignItems: 'center',
    },
    nameText: {
        fontSize: FontSize.Font14,
        color: Color.black,
        fontWeight: 'bold',
    },
    tickIcon: {
        height: moderateScale(14),
        width: moderateScale(14),
    },
    detailsText: {
        fontSize: FontSize.Font12,
        color: Color.black,
    },
});
