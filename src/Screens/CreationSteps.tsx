import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Typography } from '../Theme/Typography'
import { moderateScale } from '../Theme/ResposiveSize'
import BackHeader from '../Component/Header/BackHeader'
import { Color } from '../Theme'
import { navigate } from '../Navigator/Utils'
import Button from '../Component/Buttons/Button'
import { useSelector } from 'react-redux'
import { selectAuthToken } from '../Store/auth/authSlice'

const CreationSteps = () => {
    const profileData = useSelector(selectAuthToken);
    console.log("token-----",profileData)

    const right = require("../assets/Image/right.png")

    const details = [
        { id: '1', title: 'Personal Details', screen: 'PersonalDetails' },
        { id: '2', title: 'Education', screen: 'Education' },
        { id: '3', title: 'Profession', screen: 'Profession' },
        { id: '4', title: 'Family Details', screen: 'FamilyDetails' },
        { id: '5', title: 'Preferences', screen: 'Preferences' },
        { id: '6', title: 'Location', screen: 'Location' },
        { id: '7', title: 'Verification', screen: 'Verification' },
    ]

    const detailspage = (screen: string) => {
        navigate(screen, {});
    };

    const submit = () => {
         navigate("SelectInterests", {})
    }

    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <BackHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={[styles.heading, Typography.main_heading]}>Provide some details to enjoy using divinevivah!</Text>
                    <Text style={[styles.text, Typography.body]}>You’re almost ready to go just need your verifications.</Text>

                    <FlatList
                        data={details}
                        renderItem={({ item }) => {
                            return (
                                <Pressable onPress={() => detailspage(item.screen)}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 10,
                                            marginTop: moderateScale(15),
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: Color.orange,
                                                height: moderateScale(36),
                                                width: moderateScale(36),
                                                borderRadius: moderateScale(50),
                                            }}
                                        />
                                        <Text style={[Typography.body, { letterSpacing: 0 }]}>{item.title}</Text>
                                        <Image
                                            source={right}
                                            style={styles.icon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </Pressable>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ marginBottom: moderateScale(15) }}
                        ItemSeparatorComponent={() => (
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderColor: Color.border,
                                    marginTop: moderateScale(15),
                                }}
                            />
                        )}
                    />
                </View>
                <Button title='Submit' onPress={submit} mainStyle={styles.btn} />
            </ScrollView>
        </View>
    )
}

export default CreationSteps

const styles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(10)
    },
    heading: {
        marginTop: moderateScale(15)
    },
    text: {
        marginTop: moderateScale(20),
        color: Color.chatBg
    },
    icon: {
        height: 15,
        width: 10,
        position: 'absolute',
        right: 5
    },
    btn: {
        marginVertical: moderateScale(40),
        marginHorizontal: moderateScale(10)
    }
})