// import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Typography } from '../Theme/Typography'
// import { moderateScale } from '../Theme/ResposiveSize'
// import BackHeader from '../Component/Header/BackHeader'
// import { Color } from '../Theme'
// import { navigate } from '../Navigator/Utils'
// import Button from '../Component/Buttons/Button'
// import { useGetProfileQuery } from '../Store/auth/authApiSlice'
// import Right from "../assets/svg/Right.svg"


// const CreationSteps = () => {
//     const { data: getProfile, } = useGetProfileQuery();

//     const details = [
//         { id: '1', title: 'Personal Details', screen: 'PersonalDetails' },
//         { id: '2', title: 'Education', screen: 'Education' },
//         { id: '3', title: 'Profession', screen: 'Profession' },
//         { id: '4', title: 'Family Details', screen: 'FamilyDetails' },
//         { id: '5', title: 'Preferences', screen: 'Preferences' },
//         { id: '6', title: 'Location', screen: 'Location' },
//         { id: '7', title: 'Verification', screen: 'Verification' },
//     ]


//     console.log("getProfile", getProfile)
//     const detailspage = (screen: string) => {
//         navigate(screen, {});
//     };


//     return (
//         <View style={{ flex: 1, backgroundColor: Color.white }}>
//             <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
//             <BackHeader />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <View style={styles.container}>
//                     <Text style={[styles.heading, Typography.main_heading]}>Provide some details to enjoy using divinevivah!</Text>
//                     <Text style={[styles.text, Typography.body]}>You’re almost ready to go just need your verifications.</Text>

//                     <FlatList
//                         data={details}
//                         renderItem={({ item }) => {
//                             return (
//                                 <Pressable onPress={() => detailspage(item.screen)}>
//                                     <View
//                                         style={{
//                                             flexDirection: 'row',
//                                             alignItems: 'center',
//                                             gap: 10,
//                                             marginTop: moderateScale(15),
//                                         }}
//                                     >
//                                         <View
//                                             style={{
//                                                 backgroundColor: Color.orange,
//                                                 height: moderateScale(36),
//                                                 width: moderateScale(36),
//                                                 borderRadius: moderateScale(50),
//                                             }}
//                                         />
//                                         <Text style={[Typography.body, { letterSpacing: 0 }]}>{item.title}</Text>
//                                         {/* <Image
//                                             source={right}
//                                             style={styles.icon}
//                                             resizeMode="contain"
//                                         /> */}
//                                     </View>
//                                 </Pressable>
//                             )
//                         }}
//                         keyExtractor={(item) => item.id}
//                         contentContainerStyle={{ marginBottom: moderateScale(15) }}
//                         ItemSeparatorComponent={() => (
//                             <View
//                                 style={{
//                                     borderBottomWidth: 1,
//                                     borderColor: Color.border,
//                                     marginTop: moderateScale(15),
//                                 }}
//                             />
//                         )}
//                     />
//                 </View>
//                 <Button title='Submit' onPress={() => navigate("SelectInterests", {})} mainStyle={styles.btn} />
//             </ScrollView>
//         </View>
//     )
// }

// export default CreationSteps

// const styles = StyleSheet.create({
//     container: {
//         marginHorizontal: moderateScale(10)
//     },
//     heading: {
//         marginTop: moderateScale(15)
//     },
//     text: {
//         marginTop: moderateScale(20),
//         color: Color.chatBg
//     },
//     icon: {
//         height: 15,
//         width: 10,
//         position: 'absolute',
//         right: 5
//     },
//     btn: {
//         marginVertical: moderateScale(40),
//         marginHorizontal: moderateScale(10)
//     }
// })


import { FlatList, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Typography } from '../Theme/Typography'
import { moderateScale } from '../Theme/ResposiveSize'
import BackHeader from '../Component/Header/BackHeader'
import { Color } from '../Theme'
import { navigate } from '../Navigator/Utils'
import Button from '../Component/Buttons/Button'
import { useGetProfileQuery } from '../Store/auth/authApiSlice'
import Done from "../assets/svg/Done.svg"

const CreationSteps = () => {
    const { data: getProfile } = useGetProfileQuery()

    const details = [
        {
            id: '1',
            title: 'Personal Details',
            screen: 'PersonalDetails',
            completed: getProfile?.personal_details === 1, active: false
        },
        {
            id: '2',
            title: 'Education',
            screen: 'Education',
            completed: getProfile?.education_details === 1, active: getProfile?.personal_details === 1 && getProfile?.education_details === 0
        },
        {
            id: '3',
            title: 'Profession',
            screen: 'Profession',
            completed: getProfile?.profession_details === 1, active: getProfile?.education_details === 1 && getProfile?.profession_details === 0
        },
        {
            id: '4',
            title: 'Family Details',
            screen: 'FamilyDetails',
            completed: getProfile?.family_details === 1, active: getProfile?.profession_details === 1 && getProfile?.family_details === 0
        },
        {
            id: '5',
            title: 'Preferences',
            screen: 'Preferences',
            completed: getProfile?.preferences_details === 1, active: getProfile?.family_details === 1 && getProfile?.preferences_details === 0
        },
        {
            id: '6',
            title: 'Location',
            screen: 'Location', completed: getProfile?.location_details === 1, active: getProfile?.preferences_details === 1 && getProfile?.location_details === 0
        },
        {
            id: '7',
            title: 'Verification',
            screen: 'Verification', completed: getProfile?.verification_details === 1, active: getProfile?.location_details === 1 && getProfile?.verification_details === 0
        },
    ]

    const allStepsCompleted = useMemo(() => {
        return details.every(step => step.completed)
    }, [details])

    const detailspage = (screen: string) => {
        navigate(screen, {})
    }

    const renderItem = ({ item }) => (
        <Pressable onPress={() => detailspage(item.screen)}>
            <View style={styles.itemContainer}>
                <View style={[
                    styles.iconContainer,
                    item.completed && styles.completedIconContainer,
                    item.active && styles.activeIconContainer
                ]}>
                    {item.completed ? (
                        <Done/>
                    ) : (
                        <View style={[styles.emptyCircle, item.active && { backgroundColor: Color.orange }]} />
                    )}
                </View>
                <Text style={[Typography.body, styles.itemTitle, item.active && { color: Color.orange }]}>{item.title}</Text>
                <Icon
                    name="chevron-right"
                    size={24}
                    color={item.active ? Color.orange : Color.chatBg}
                />
            </View>
        </Pressable>


    )

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <BackHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text style={[styles.heading, Typography.main_heading]}>
                        Provide some details to enjoy using divinevivah!
                    </Text>
                    <Text style={[styles.text, Typography.body]}>
                        You're almost ready to go just need your verifications.
                    </Text>

                    <FlatList
                        data={details}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContainer}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={() => navigate("SelectInterests", {})}
                    mainStyle={[styles.submitButton, { backgroundColor: !allStepsCompleted ? "#DEDEDE" : Color.orange }]}
                    disabled={!allStepsCompleted}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    content: {
        marginHorizontal: moderateScale(16),
    },
    heading: {
        marginTop: moderateScale(15),
    },
    text: {
        marginTop: moderateScale(20),
        color: Color.chatBg,
    },
    listContainer: {
        marginTop: moderateScale(20),
        marginBottom: moderateScale(15),
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: moderateScale(12),
    },
    iconContainer: {
        height: moderateScale(36),
        width: moderateScale(36),
        borderRadius: moderateScale(18),
        backgroundColor: Color.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    completedIconContainer: {
        backgroundColor: Color.orange,
    },
    activeIconContainer: {
        backgroundColor: Color.orange,
    },
    emptyCircle: {
        height: moderateScale(20),
        width: moderateScale(20),
        borderRadius: moderateScale(10),
        backgroundColor: "#DEDEDE",
    },
    itemTitle: {
        marginLeft: moderateScale(12),
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: Color.border,
    },
    submitButton: {
        marginVertical: moderateScale(40),
        marginHorizontal: moderateScale(16),
    },
})

export default CreationSteps