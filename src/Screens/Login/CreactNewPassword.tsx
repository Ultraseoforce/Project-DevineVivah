import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Image, StatusBar, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate, navigationRef } from '../../Navigator/Utils';
import BackHeader from '../../Component/Header/BackHeader';
import Toast from '../../Component/Modal/ToastMessage';
import { useNewPasswordMutation } from '../../Store/auth/authApiSlice';

const CreactNewPassword = ({ route }: any) => {
    const { type } = route.params;
    const { showToast } = Toast();
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<PasswordErrors>({});
    const [ChangePassword, { isLoading }] = useNewPasswordMutation();

    const BackButton = require('../../assets/Image/arrow-left.png')


    const validatePasswords = (): boolean => {
        let formErrors: PasswordErrors = {};
        if (!newPassword.trim()) {
            formErrors.newPassword = 'New password is required';
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
                    console.log("ChangePassword repose", respo)
                    navigate("PasswordChangeSuccess", {})

                } else {
                    showToast(respo?.message, { type: 'normal' });
                }

            } catch (error) {
                console.error(error);
            }
        }
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
                <View>
                    <NameInput
                        placeholder='New Password'
                        nameStyle
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    {errors.newPassword && <Text style={styles.errorText}>{errors.newPassword}</Text>}
                </View>
                <View>
                    <NameInput
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        nameStyle
                    />
                    {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                </View>
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
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});