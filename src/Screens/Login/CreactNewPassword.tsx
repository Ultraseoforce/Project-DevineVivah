import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Image, StatusBar, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate, navigationRef } from '../../Navigator/Utils';
import BackHeader from '../../Component/Header/BackHeader';

const CreactNewPassword = ({ route }: any) => {
    const { type } = route.params;
    const [otp, setOtp] = useState(['', '', '', '',]);
    const inputs = useRef([]);
    const BackButton = require('../../assets/Image/arrow-left.png')

    const handleContinue = () => {
        navigate("PasswordChangeSuccess", {})
        console.warn('OTP entered:', otp.join(''));
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>

            {type === "CreactNewPassword" ? <Pressable onPress={() => navigationRef.goBack()} style={styles.back}>
                <Image source={BackButton} style={styles.icon} />
            </Pressable> : <BackHeader leftTitle='Change Password' />}


            <StatusBar backgroundColor={'white'} barStyle={"dark-content"} />
            <View style={styles.container}>
                <Text style={Typography.main_heading}>Create new password</Text>
                <Text style={[styles.text, Typography.body]}>Your new password must be unique from those previously used.</Text>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <NameInput
                        placeholder='New Password'
                    />

                    <NameInput
                        placeholder='Confirm Password'
                    />
                </ScrollView>
                <Button title='Update' mainStyle={styles.btn} onPress={handleContinue} />
            </View>
        </SafeAreaView>
    );
};

export default CreactNewPassword;

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