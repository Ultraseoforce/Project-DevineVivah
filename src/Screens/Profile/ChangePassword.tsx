import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import BackHeader from '../../Component/Header/BackHeader'
import NameInput from '../../Component/Placeholder/NameInput'
import { Typography } from '../../Theme/Typography'
import Button from '../../Component/Buttons/Button'
import { navigate } from '../../Navigator/Utils'
import { useChangePasswordMutation } from '../../Store/auth/authApiSlice'
import Toast from '../../Component/Modal/ToastMessage'

const ChangePassword = () => {
    const [password, setPassword] = useState("")
    const { showToast } = Toast();
    const [errors, setErrors] = useState<PasswordErrors>({});
    const [passwordCheck, { isLoading }] = useChangePasswordMutation()


    const validation = (): boolean => {
        let formErrors: PasswordErrors = {};
        if (!password.trim()) {
            formErrors.newPassword = 'password is required';
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const oldPasswordCheck = async () => {
        if (validation()) {
            try {
                const respo = await passwordCheck({ password: password }).unwrap();
                if (respo?.status == true) {
                    showToast(respo?.message, { type: 'normal' });
                    console.log("oldPasswordCheck repose", respo?.message)
                    navigate("CreactNewPassword", {})

                } else {
                    showToast(respo?.message, { type: 'normal' });
                }
            } catch (error) {
                console.error(error);
            }
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
            <BackHeader leftTitle='Change Password' />

            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={Typography.main_heading}>Change Password?</Text>
                    <Text style={[styles.text, Typography.body]}>Enter your current password to continue</Text>

                    <View style={styles.content}>
                        <NameInput
                            placeholder='Current Password'
                            nameStyle
                            value={password}
                            onChangeText={setPassword}
                        />
                        {errors.newPassword && <Text style={styles.errorText}>{errors.newPassword}</Text>}
                    </View>
                </View>

                <Button title='Send Code' mainStyle={styles.btn} onPress={oldPasswordCheck} />
            </View>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: moderateScale(16),
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1,
    },
    content: {
        marginTop: moderateScale(10),
    },
    btn: {
        marginTop: moderateScale(30),
    },
    text: {
        marginTop: moderateScale(3),
        color: Color.chatBg,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
})
