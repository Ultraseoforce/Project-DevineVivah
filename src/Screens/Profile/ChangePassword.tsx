import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import BackHeader from '../../Component/Header/BackHeader'
import NameInput from '../../Component/Placeholder/NameInput'
import { Typography } from '../../Theme/Typography'
import Button from '../../Component/Buttons/Button'
import { navigate } from '../../Navigator/Utils'

const ChangePassword = () => {
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
                        />
                    </View>
                </View>

                <Button title='Send Code' mainStyle={styles.btn} onPress={() => navigate("CreactNewPassword", {})} />
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
        gap: moderateScale(20),
    },
    btn: {
        marginTop: moderateScale(30),
    },
    text: {
        marginTop: moderateScale(3),
        color: Color.chatBg,
    },
})
