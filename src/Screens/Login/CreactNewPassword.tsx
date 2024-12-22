import { SafeAreaView, View, Text, StyleSheet, Image, StatusBar, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate, navigationRef } from '../../Navigator/Utils';
import BackHeader from '../../Component/Header/BackHeader';
import Toast from '../../Component/Modal/ToastMessage';
import { useNewPasswordMutation } from '../../Store/auth/authApiSlice';
import { useRoute } from '@react-navigation/native';

const CreactNewPassword = () => {
    const route = useRoute();
    const navigationType = route.params;
    const { showToast } = Toast();
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ newPassword?: string; confirmPassword?: string }>({});
    const [ChangePassword, { isLoading }] = useNewPasswordMutation();

    const BackButton = require('../../assets/Image/arrow-left.png');

    const validatePasswords = (): boolean => {
        let formErrors: { newPassword?: string; confirmPassword?: string } = {};
        if (!newPassword.trim()) {
            formErrors.newPassword = 'New password is required';
        } else if (newPassword.length < 6) {
            formErrors.newPassword = 'Password must be at least 6 characters long';
        }
        if (!confirmPassword.trim()) {
            formErrors.confirmPassword = 'Confirm password is required';
        } else if (confirmPassword !== newPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleContinue = async () => {
        if (validatePasswords()) {
            try {
                const respo = await ChangePassword({ password: newPassword }).unwrap();
                if (respo?.status == true) {
                    showToast(respo?.message, { type: 'normal' });
                    navigate("PasswordChangeSuccess", {});
                    console.log("ChangePassword response", respo);
                } else {
                    showToast(respo?.message, { type: 'error' });
                }
            } catch (error) {
                console.error('Change Password Failed:', error);
                showToast("Failed to change password. Please try again.", { type: 'error' });
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            {navigationType.type === "forgotpassword" ? (
                <Pressable onPress={() => navigationRef.goBack()} style={styles.back}>
                    <Image source={BackButton} style={styles.icon} />
                </Pressable>
            ) : (
                <BackHeader leftTitle='Change Password' />
            )}
            <StatusBar backgroundColor={'white'} barStyle={"dark-content"} />
            <View style={styles.container}>
                <Text style={Typography.main_heading}>Create new password</Text>
                <Text style={[styles.text, Typography.body]}>Your new password must be unique from those previously used.</Text>
                <View>
                    <NameInput
                        placeholder='New Password'
                        nameStyle
                        value={newPassword}
                        onChangeText={setNewPassword}
                        isPassword
                    />
                    {errors.newPassword && <Text style={styles.errorText}>{errors.newPassword}</Text>}
                </View>
                <View>
                    <NameInput
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        nameStyle
                        isPassword
                    />
                    {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                </View>
                <Button title='Update' mainStyle={styles.btn} onPress={handleContinue} isLoading={isLoading} />
            </View>
        </SafeAreaView>
    );
};

export default CreactNewPassword;

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(20),
    },
    text: {
        marginTop: moderateScale(3),
        color: Color.chatBg,
    },
    icon: {
        height: moderateScale(30),
        width: moderateScale(30),
    },
    back: {
        marginTop: moderateScale(30),
        backgroundColor: Color.boxBg,
        borderWidth: 1,
        borderColor: Color.border,
        marginLeft: moderateScale(16),
        alignItems: "center",
        justifyContent: "center",
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(50),
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
    btn: {
        marginTop: moderateScale(30),
    },
});