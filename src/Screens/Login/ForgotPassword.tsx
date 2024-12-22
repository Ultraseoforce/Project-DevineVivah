import { SafeAreaView, View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate, navigationRef } from '../../Navigator/Utils';
import { useForgotPasswordMutation } from '../../Store/auth/authApiSlice';
import Toast from '../../Component/Modal/ToastMessage';

const ForgotPassword = () => {
    const [phonenumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState<{ phonenumber?: string }>({});
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    const { showToast } = Toast();
    const BackButton = require('../../assets/Image/arrow-left.png');

    const validatePhoneNumber = (phone: string) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const checkPhoneNumber = (): boolean => {
        const formErrors: { phonenumber?: string } = {};

        if (!phonenumber) {
            formErrors.phonenumber = 'Please specify your phone number';
        } else if (!validatePhoneNumber(phonenumber)) {
            formErrors.phonenumber = 'Please enter a valid 10-digit phone number';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const sendCode = async () => {
        if (checkPhoneNumber()) {
            try {
                const response = await forgotPassword(phonenumber).unwrap();
                console.log(response)
                if (typeof response === 'object' && response !== null && 'message' in response) {
                    showToast((response as { message: string }).message, { type: 'normal' });
                }
                setPhoneNumber("")
                navigate("OTPVerification", {phonenumber: phonenumber, type: "forgotPassword"});
            } catch (error) {
                showToast("Failed to send code. Please try again.", { type: 'error' });
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <Pressable onPress={() => navigationRef.goBack()} style={styles.back}>
                <Image source={BackButton} style={styles.icon} />
            </Pressable>
            <View style={styles.container}>
                <Text style={Typography.main_heading}>Forgot Password?</Text>
                <Text style={[styles.text, Typography.body]}>Don’t worry! It occurs. Please enter the mobile number linked with your account.</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <NameInput
                            placeholder='Enter Mobile Number'
                            value={phonenumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="numeric"
                            nameStyle
                        />
                        {errors.phonenumber && <Text style={styles.errorText}>{errors.phonenumber}</Text>}
                    </View>
                </ScrollView>
                <Button title='Send Code' mainStyle={styles.btn} onPress={sendCode} />
            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(20),
    },
    content: {
        flexGrow: 1,
        marginTop: moderateScale(10),
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
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});