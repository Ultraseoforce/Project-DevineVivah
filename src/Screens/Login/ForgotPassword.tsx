import { SafeAreaView, View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import React from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate, navigationRef } from '../../Navigator/Utils';



const BackButton = require('../../assets/Image/arrow-left.png')

const ForgotPassword = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <Pressable onPress={() => navigationRef.goBack()} style={styles.back}>
                <Image source={BackButton} style={styles.icon} />
            </Pressable>
            <View style={styles.container}>
                <Text style={Typography.main_heading}>Forgot Password?</Text>
                <Text style={[styles.text, Typography.body]}>Don’t worry! It occurs. Please enter the email address linked with your account.</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <NameInput
                            placeholder='Enter your email'
                            nameStyle
                        />
                    </View>
                </ScrollView>
                <Button title='Send Code' mainStyle={styles.btn} onPress={() => navigate("OTPVerification", {})} />
            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: moderateScale(20),
        // alignItems:"center"
    },
    content: {
        flexGrow: 1,
        marginTop: moderateScale(10),
        gap: moderateScale(20),
    },
    btn: {
        marginTop: moderateScale(30),
    },
    text: {
        marginTop: moderateScale(3),
        color: Color.chatBg
    },
    icon: {
        height: moderateScale(30),
        width: moderateScale(30),

    },
    back: {
        marginTop: moderateScale(50),
        backgroundColor: Color.boxBg,
        borderWidth: 1,
        borderColor: Color.border,
        marginLeft: moderateScale(16),
        alignItems: "center",
        justifyContent: "center",
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(50)
    }
});
