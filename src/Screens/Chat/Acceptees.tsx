import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Color } from '../../Theme';
import { moderateScale, scale } from '../../Theme/ResposiveSize';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import { navigate } from '../../Navigator/Utils';

const ProfileImage = require('../../assets/Image/profile2.png');

const chatData = [
    {
        id: 1,
        name: 'Iheme',
        status: 'Iheme is typing...',
        time: '14:28',
        unreadCount: 1,
    },
    {
        id: 2,
        name: 'druids',
        status: 'I thought it was you, lol',
        time: 'yesterday',
        unreadCount: 13,
        // badge: 'Astrologer'
    },
    {
        id: 3,
        name: 'Minari',
        status: 'Just sent the design.....',
        time: 'yesterday',
        unreadCount: 1,
    },
    {
        id: 4,
        name: '0x71C7656EC7ab4...dFB7',
        status: 'Whats up Sam, it’s Frankie. 😏',
        time: 'Friday',
        // unreadCount: 10,
    },
    {
        id: 5,
        name: 'Samuel Garry',
        status: 'Done, 😏',
        time: '07/21/2022',
        // unreadCount: 1,
    },
    {
        id: 6,
        name: 'Anthony (Web3.io)',
        status: 'Lemme join ur club, buddy',
        time: 'yesterday',
        unreadCount: 1,
    },
    {
        id: 7,
        name: 'Samuel Garry',
        status: 'Done, 😏',
        time: '07/21/2022',
        // unreadCount: 1,
    },
    {
        id: 8,
        name: 'Anthony (Web3.io)',
        status: 'Lemme join ur club, buddy',
        time: '07/18/2022',
        unreadCount: 0,
    },
    {
        id: 9,
        name: 'Samuel Garry',
        status: 'Done, 😏',
        time: 'Monday',
        // unreadCount: 1,
    },
    {
        id: 10,
        name: 'Anthony (Web3.io)',
        status: 'Lemme join ur club, buddy',
        time: '07:34',
        unreadCount: 1,
    },

];

const handleContinue = () => {
    navigate("LiveChat", {})
};

const Acceptees = () => {

    const renderItem = ({ item }: any) => (
        <Pressable style={styles.chatContainer} onPress={handleContinue}>
            <View style={styles.chatRow}>
                <Image source={ProfileImage} style={styles.profileImage} />
                <View style={styles.chatDetails}>
                    <View style={styles.nameBadgeContainer}>
                        <Text style={[styles.userName, Typography.smallTitle,]}>{item.name}</Text>
                        {item.badge && (<View style={{
                                    backgroundColor: Color.orange,
                                    color: Color.white,
                                    borderRadius: 8,
                                    paddingHorizontal: 5,
                                    paddingVertical: 3,
                                    marginLeft: 5,
                        }}>
                            
                                <Text style={styles.badgeText}>{item.badge}</Text>
                        </View>)}
                    </View>
                    <Text style={[styles.statusText, Typography.small,{color: Color.chatBg}]}>{item.status}</Text>
                </View>
            </View>
            <View style={styles.timeContainer}>
                <Text style={[styles.timeText, Typography.smallText,]}>{item.time}</Text>
                <View style={{
                    color: Color.white,
                    fontSize: FontSize.Font14,
                    backgroundColor: Color.orange,
                    borderRadius: 100,
                    alignSelf: 'flex-end',
                    // padding: 3,
                    textAlign: 'center',
                }}>
                    {item.unreadCount > 0 && (
                        <Text style={styles.unreadCount}>{item.unreadCount}</Text>
                    )}
                </View>
            </View>
        </Pressable>
    );


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <FlatList
                data={chatData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ padding: moderateScale(16) }}
            />
        </SafeAreaView>
    );
};

export default Acceptees;

const styles = StyleSheet.create({
    chatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: Color.border,
        paddingVertical: moderateScale(10),
    },
    chatRow: {
        flexDirection: 'row',
    },
    profileImage: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(50)
    },
    chatDetails: {
        marginLeft: moderateScale(10),
    },
    nameBadgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        color: Color.black,
        fontSize: FontSize.Font20,

    },
    badgeText: {
        backgroundColor: Color.orange,
        color: Color.white,
        // borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginLeft: 5,
    },
    statusText: {
        color: Color.chatBg,
        fontSize: FontSize.Font14,
    },
    timeContainer: {
        // justifyContent: 'space-around',
        marginLeft: moderateScale(10),
    },
    timeText: {
        color: Color.chatBg,
        fontSize: FontSize.Font12,
        alignSelf: 'flex-end',
    },
    unreadCount: {
        color: Color.white,
        fontSize: FontSize.Font14,
        backgroundColor: Color.orange,
        borderRadius: 40,
        alignSelf: 'flex-end',
        paddingHorizontal: 7,
        textAlign: 'center',
    },
});
