import { View, Text, Pressable, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { height, moderateScaleVertical } from '../../Theme/ResposiveSize';

export default function NetworkConnection({ Start }) {
    const navigation = useNavigation();
    const currentTheme = useSelector(state => {
        return state.myDarMode
    })

    const InternetConnection = useSelector(state => { return state.InternetConnection.error });
    const [internet, setInternet] = useState(InternetConnection)
    const [Retry, setRetry] = useState()

    const startLoading = () => {
        setRetry(true);
        setTimeout(() => {
            setRetry(false)
        }, 3000);
    };
    const netInfo = useNetInfo();

    return (
        <>
            {!netInfo.isConnected ? <View style={{
                height: height,
                backgroundColor: 'white',
            }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                    {/* <Image source={require('../assets/images/wi-fi-disconnected.png')} style={{height:moderateScale(100),width:moderateScale(100)}}/> */}
                    <Text style={{ marginTop: moderateScaleVertical(20), color: '#f0960e', fontWeight: '700', fontSize: textScale(17) }}>No internet connection found</Text>
                    <Text style={{ width: '70%', textAlign: 'center', marginTop: moderateScaleVertical(10) }}>You are not connected to internet . Please check your onnection</Text>
                    <View style={{ marginTop: moderateScaleVertical(30) }}>
                        {Retry ? (<ActivityIndicator size="large" color="#f0960e" />) : <Pressable onPress={() => { startLoading() }} ><Text style={{ color: '#f0960e', fontWeight: '600', fontSize: textScale(14) }}>Retry</Text></Pressable>}

                    </View>
                </View>
            </View> : <></>}
        </>
    )
}