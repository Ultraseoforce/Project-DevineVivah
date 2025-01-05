import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import NameInput from '../../Component/Placeholder/NameInput';
import { Typography } from '../../Theme/Typography';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import Authenticate from '../../Component/Cards/Authenticate';
import { Color } from '../../Theme';
import { FontSize } from '../../Theme/FontSize';
import { navigate } from '../../Navigator/Utils';
import { useLoginMutation } from '../../Store/auth/authApiSlice';
import Toast from '../../Component/Modal/ToastMessage';
import {selectFcmToken, setCredentials } from '../../Store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loder from '../../Component/Modal/Loder';

const Login = () => {
    const [phonenumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading }] = useLoginMutation();
    const fcmToken = useSelector(selectFcmToken);
    const { showToast } = Toast();
    const dispatch = useDispatch();

    const validatePhoneNumber = (phone: string) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const validatePassword = (password: string) => {
        return password.length >= 5;
    };

    const userlogin = async () => {
        const trimmedPhoneNumber = phonenumber.trim();
        const trimmedPassword = password.trim();

        if (!validatePhoneNumber(trimmedPhoneNumber)) {
            showToast("Please enter a valid 10-digit phone number", { type: 'error' });
            return;
        }

        // if (validatePassword(trimmedPassword)) {
        //     showToast("Password must be at least 5 characters long", { type: 'error' });
        //     return;
        // }

        const requestBody = {
            mobile: trimmedPhoneNumber,
            password: trimmedPassword,
            firebase_token: "fjsdjfgsajgfjasgfagfdashgfashj"
        };

        try {
            const respo = await login(requestBody).unwrap();
            console.log('Login respo->>', respo);
            if (respo?.status == true) {
                showToast(respo?.message, { type: 'normal' });
                dispatch(
                    setCredentials({
                        user: respo?.user || "User",
                        token: respo?.token,
                    })
                );
                navigate("MainNavigator", {});
            } else {
                showToast(respo?.message, { type: 'error' });
            }
        } catch (error) {
            console.error('Login Failed:', error);
            showToast("Login failed. Please try again.", { type: 'error' });
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
                <Loder Start={isLoading} />
                <View style={styles.container}>
                    <Text style={[styles.heading, Typography.main_heading]}>Welcome back! Glad to see you, Again!</Text>
                    <NameInput
                        placeholder='Phone No'
                        value={phonenumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    <NameInput
                        placeholder='Enter Your Password '
                        value={password}
                        onChangeText={setPassword}
                        nameStyle
                        isPassword={true}
                    />
                    <Text onPress={() => navigate("ForgotPassword", {})} style={[styles.forget, Typography.small, { color: Color.orange }]}>Forgot Password?</Text>
                    <Button mainStyle={styles.btn} title='Login' onPress={userlogin} />
                    <Text style={styles.register}>Don’t have an account? <Text onPress={() => navigate("Singup", {})} style={{ fontWeight: "bold", color: Color.orange }}>Register Now</Text></Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(16),
        flex: 1,
        backgroundColor: Color.white,
    },
    heading: {
        marginBottom: moderateScale(25)
    },
    container: {
        marginTop: moderateScale(110),
    },
    forget: {
        textAlign: "right",
        paddingVertical: moderateScale(10)
    },
    btn: {
        marginTop: moderateScale(10)
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E8ECF4',
    },
    text: {
        marginHorizontal: 10,
        color: "#8391A1",
    },
    register: {
        textAlign: "center",
        marginTop: moderateScale(40),
        fontSize: FontSize.Font16,
        fontFamily: "Urbanist-Medium",
        color: Color.darkBlack
    }
});