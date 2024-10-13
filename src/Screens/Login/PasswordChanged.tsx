import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Typography } from '../../Theme/Typography';
import Button from '../../Component/Buttons/Button';
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';


// const SuccessImage = require('../assets/Image/smallTik.png');

const PasswordChange = () => {
    console.warn(' Your password has been changed successfully.')
}

const PasswordChanged = () => {
    return (
        <View style={styles.safeArea}>
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
                {/* <Image source={SuccessImage} style={styles.icon} /> */}
                <Text style={[Typography.main_heading, styles.heading]}>Password Changed!</Text>
                <Text style={[styles.text, Typography.body, styles.successText]}>
                    Your password has been changed successfully.
                </Text>
                <Button title='Back To Login' onPress={PasswordChange} mainStyle={styles.btn} />
            </View>
        </View>
    );
};

export default PasswordChanged;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.white,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: moderateScale(20),
    },
    icon: {
        height: moderateScale(100),
        width: moderateScale(100),
        alignSelf: 'center',
        marginBottom: moderateScale(20),
    },
    heading: {
        textAlign: 'center',
        marginBottom: moderateScale(10),
    },
    text: {
        marginTop: moderateScale(5),
        color: Color.chatBg,
        textAlign: 'center',
    },
    successText: {
        marginTop: moderateScale(5),
        color: Color.chatBg,
    },
    btn: {
        marginTop: moderateScale(30)
    },
});
