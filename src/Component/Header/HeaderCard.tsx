// import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Color } from '../../Theme'
// import { height, moderateScale } from '../../Theme/ResposiveSize'
// import { Typography } from '../../Theme/Typography'
// import SearchContent from '../Search/SearchCard'
// import Filters from '../Filters/Filters'
// import { navigate } from '../../Navigator/Utils'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// interface IHeader {
//     BgWhite?: boolean
//     showCard?: boolean
//     showNotification?: boolean
// }

// const HeaderCard = (Props: IHeader) => {

//     console.log("header call=>>>>>>>>>")

//     const profile = require("../../assets/Image/avatar.png")
//     const bell = require("../../assets/Image/bell.png")

//     return (
//         <View style={[styles.mainView, { backgroundColor: Props.BgWhite ? Color.white : Color.orange, }]}>
//             <StatusBar backgroundColor={Color.orange} barStyle={'light-content'} />
//             <View style={{ marginTop: moderateScale(30), padding: moderateScale(10), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
//                 <View style={styles.profileCard}>
//                     <Image source={profile} style={styles.profile} />
//                     <Text style={[styles.name, Typography.samll_bold, { color: Props.BgWhite ? Color.black : Color.white }]}>Good Evening, Joe</Text>
//                 </View>
//                 {!Props.showCard ? <Pressable onPress={() => navigate("Notifacations", {})}>
//                     <Image source={bell} style={styles.bell} />
//                 </Pressable>
//                     :
//                     <Pressable>
//                         <FontAwesome5 name="shopping-cart" size={26} color={Color.orange} />
//                     </Pressable>

//                 }
//             </View>
//             <View style={styles.searchCard}>
//                 <SearchContent style={{ width: Props.showNotification ? "65%" : "80%", backgroundColor: Color.boxBg }} />
//                 <Filters onFilter={() => navigate("Filters", {})} mainStyle={{ backgroundColor: Color.boxBg }} />
//                 {Props.BgWhite ? <Pressable onPress={() => navigate("Notifacations", {})} style={styles.bgball}>
//                     <Image source={bell} style={{ height: 24, width: 24 }} tintColor={Color.bellbg} />
//                 </Pressable> : ""}
//             </View>
//         </View>
//     )
// }

// export default HeaderCard

// const styles = StyleSheet.create({
//     mainView: {
//         minHeight: moderateScale(170),
//         borderBottomLeftRadius: 13,
//         borderBottomRightRadius: 13,
//         paddingTop: 10
//     },
//     name: {
//         color: Color.white
//     },
//     profileCard: {
//         flexDirection: "row",
//         alignItems: "center",
//         gap: 15
//     },
//     profile: {
//         height: moderateScale(47),
//         width: moderateScale(47),
//         borderRadius: moderateScale(50)
//     },
//     searchCard: {
//         flexDirection: "row",
//         alignSelf: "center",
//         alignItems: "center",
//         gap: 10
//     },
//     bell: {
//         height: moderateScale(27),
//         width: moderateScale(27),
//     },
//     bgball: {
//         height: moderateScale(48),
//         width: moderateScale(48),
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: Color.boxBg,
//         borderRadius: 5,
//     }
// })


import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { Color } from '../../Theme'
import { height, moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import SearchContent from '../Search/SearchCard'
import Filters from '../Filters/Filters'
import { navigate } from '../../Navigator/Utils'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface IHeader {
    BgWhite?: boolean
    showCard?: boolean
    showNotification?: boolean
    StatusBarColor?: string
}

const HeaderCard = (Props: IHeader) => {

    const profile = require("../../assets/Image/avatar.png")
    const bell = require("../../assets/Image/bell.png")


console.log("headre caall =>>>>>>>>>>>>>>>>>>>>")

    // Memoize the style based on BgWhite
    const backgroundColor = useMemo(() => {
        return Props.BgWhite ? Color.white : Color.orange;
    }, [Props.BgWhite]);

    // Memoize the name color
    const nameColor = useMemo(() => {
        return Props.BgWhite ? Color.black : Color.white;
    }, [Props.BgWhite]);

    return (
        <View style={[styles.mainView, { backgroundColor }]}>
            {/* <StatusBar backgroundColor={Props.StatusBarColor} barStyle={'light-content'} /> */}
            <View style={{ marginTop: moderateScale(30), padding: moderateScale(10), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={styles.profileCard}>
                    <Image source={profile} style={styles.profile} />
                    <Text style={[styles.name, Typography.samll_bold, { color: nameColor }]}>Good Evening, Joe</Text>
                </View>
                {!Props.showCard ? (
                    <Pressable onPress={() => navigate("Notifacations", {})}>
                        <Image source={bell} style={styles.bell} />
                    </Pressable>
                ) : (
                    <Pressable>
                        <FontAwesome5 name="shopping-cart" size={26} color={Color.orange} />
                    </Pressable>
                )}
            </View>
            <View style={styles.searchCard}>
                <SearchContent style={{ width: Props.showNotification ? "65%" : "80%", backgroundColor: Color.boxBg }} />
                <Filters onFilter={() => navigate("Filters", {})} mainStyle={{ backgroundColor: Color.boxBg }} />
                {Props.BgWhite && (
                    <Pressable onPress={() => navigate("Notifacations", {})} style={styles.bgball}>
                        <Image source={bell} style={{ height: 24, width: 24 }} tintColor={Color.bellbg} />
                    </Pressable>
                )}
            </View>
        </View>
    )
}

export default HeaderCard

const styles = StyleSheet.create({
    mainView: {
        minHeight: moderateScale(170),
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        paddingTop: 10,
        // flex: 1
    },
    name: {
        color: Color.white
    },
    profileCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    profile: {
        height: moderateScale(47),
        width: moderateScale(47),
        borderRadius: moderateScale(50)
    },
    searchCard: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        gap: 10
    },
    bell: {
        height: moderateScale(27),
        width: moderateScale(27),
    },
    bgball: {
        height: moderateScale(48),
        width: moderateScale(48),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.boxBg,
        borderRadius: 5,
    }
})
