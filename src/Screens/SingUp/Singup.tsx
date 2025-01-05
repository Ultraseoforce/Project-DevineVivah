import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import NameInput from '../../Component/Placeholder/NameInput';
import { Typography } from '../../Theme/Typography';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import Authenticate from '../../Component/Cards/Authenticate';
import { Color } from '../../Theme';
import { FontSize } from '../../Theme/FontSize';
import { navigate } from '../../Navigator/Utils';
import CheckBox from '../../Component/CheckBox/CheckBox';
import { useSingupMutation } from '../../Store/auth/authApiSlice';
import Toast from '../../Component/Modal/ToastMessage';
import { useSelector } from 'react-redux';
import { selectFcmToken } from '../../Store/auth/authSlice';

const Singup = () => {
    const [usersingup, { isLoading }] = useSingupMutation();
    const { showToast } = Toast();

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullName] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const fcmToken = useSelector(selectFcmToken);

    const validateInputs = (): boolean => {
        let formErrors: { [key: string]: string } = {};

        if (!fullname.trim()) {
            formErrors.fullname = 'Full name is required';
        }
        if (!number.trim()) {
            formErrors.number = 'Phone number is required';
        } else if (!/^\d{10}$/.test(number)) {
            formErrors.number = 'Please enter a valid 10-digit phone number';
        }
        if (!password.trim()) {
            formErrors.password = 'Password is required';
        } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters long';
        }
        if (!confirmpassword.trim()) {
            formErrors.confirmpassword = 'Confirm password is required';
        } else if (confirmpassword !== password) {
            formErrors.confirmpassword = 'Passwords do not match';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const singup = async () => {
        if (validateInputs()) {
            const request = {
                name: fullname,
                mobile: number,
                password: password,
                firebase_token: "sjdsafgasjhfgsjhafgasjfgasjhfgasjhasfgjh"
            };
            try {
                const singupResponse = await usersingup(request).unwrap();
                console.log("singupResponse", singupResponse);
                if (singupResponse?.status == true) {
                    showToast(singupResponse?.message, { type: 'normal' });
                    navigate("OTPVerification", {phonenumber: number, type: "singup"});
                } else {
                    showToast(singupResponse?.errors?.mobile[0], { type: 'normal' });
                }
            } catch (error) {
                console.log("login error", error);
            }
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    <Text style={Typography.main_heading}>Hello! Register to get started</Text>
                    <NameInput
                        placeholder='Full Name'
                        value={fullname}
                        onChangeText={setFullName}
                        nameStyle
                    />
                    {errors.fullname && <Text style={styles.errorText}>{errors.fullname}</Text>}
                    <NameInput
                        placeholder='Phone No'
                        value={number}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={setNumber}
                        nameStyle
                    />
                    {errors.number && <Text style={styles.errorText}>{errors.number}</Text>}
                    <NameInput
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        isPassword
                        nameStyle
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                    <NameInput
                        placeholder='Confirm Password'
                        value={confirmpassword}
                        onChangeText={setConfirmPassword}
                        isPassword
                        nameStyle
                    />
                    {errors.confirmpassword && <Text style={styles.errorText}>{errors.confirmpassword}</Text>}
                    <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 16 }}>
                        <CheckBox checkstyle />
                        <Text onPress={() => navigate("ForgotPassword", {})} style={[styles.forget, Typography.small, { color: Color.orange }]}>
                            <Text style={{ color: Color.chatBg }}>I agree to the </Text>
                            Terms and Services <Text style={{ color: Color.chatBg }}>and</Text> Privacy Policy.</Text>
                    </View>
                    <Button mainStyle={styles.btn} title='Register' onPress={singup} isLoading={isLoading} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(20)
                    }}>
                        <View style={styles.line} />
                        <Text style={[styles.text, Typography.small, { color: Color.border }]}>Or Register with</Text>
                        <View style={styles.line} />
                    </View>
                    <Authenticate />
                    <Text style={styles.register}>Already have an account? <Text onPress={() => navigate("Login", {})} style={{ fontWeight: "bold", color: Color.orange }}>Login Now</Text></Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Singup;

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: moderateScale(100),
        padding: moderateScale(16),
        flex: 1,
    },
    forget: {
        color: Color.orange,
        marginHorizontal: 2,
        paddingVertical: moderateScale(10)
    },
    btn: {
        marginTop: moderateScale(5)
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
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});