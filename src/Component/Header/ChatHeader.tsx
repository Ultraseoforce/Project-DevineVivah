// Header.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LeftIcon from 'react-native-vector-icons/Entypo';
import { Color } from '../../Theme';
import { navigate, navigationRef } from '../../Navigator/Utils';
import { scale } from '../../Theme/ResposiveSize';
import Left from '../../assets/svg/Left.svg'
import VoiceCall from '../../assets/svg/Voice.svg';
import VideoCall from '../../assets/svg/Video.svg';
import Three_Dot from '../../assets/svg/Three-Dot.svg';


const ProfileImage = require('../../assets/Image/Notification1.png');

const ChatHeader = ({ toggleModal, Navigation }: any) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Pressable style={{ flexDirection: "row" }} onPress={() => navigationRef.goBack()}>
                    <Left style={styles.LeftIcon} />
                    {/* <LeftIcon name='chevron-thin-left' size={24} color={'black'} style={styles.LeftIcon} /> */}
                </Pressable>
                <Image source={ProfileImage} style={styles.profilePic} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.userName}>kevin.eth</Text>
                    <Text style={styles.typing}>Typing...</Text>
                </View>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <VoiceCall style={styles.icon} />
                    {/* <Icon name="call-outline" size={24} color="#000" style={styles.icon} /> */}
                </TouchableOpacity>

                <TouchableOpacity>
                    <VideoCall style={styles.icon} />
                    {/* <Icon name="videocam-outline" size={24} color="#000" style={styles.icon} /> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleModal}>
                    <Three_Dot />
                    {/* <Icon name="ellipsis-vertical" size={24} color="#000" style={styles.icon} /> */}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        marginTop: scale(35),
        borderBottomColor: '#ddd',
    },
    profilePic: {
        width: 48,
        height: 48,
        borderRadius: 25,
    },
    LeftIcon: {
        alignSelf: "center",
        marginHorizontal: 10,

    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.black,
    },
    icons: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 5,
    },
    typing: {
        color: 'gray',
        textAlign: 'left',
    },
});

export default ChatHeader;
