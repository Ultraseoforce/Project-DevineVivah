import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'
import { scale } from '../../Theme/ResposiveSize'
import Smile from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Entypo';
import Send from '../../assets/svg/Send.svg'


const Reviews = () => {
    const [seletedindex, setSeletedIndex] = useState(0)

    const profile = require("../../assets/Image/profile1.png")
    const star = require("../../assets/Image/star.png")
    const CameraImage = require("../../assets/Image/money.png")

    const tik = require("../../assets/Image/smallTik.png")
    const tab = ["Latest", "With Photos", "Detailed Reviews"]

    const DATA = [
        {
            id: '1',
            name: 'Dale Thiel',
            profile: require('../../assets/Image/profile1.png'), // Your profile image
            rating: 5.0,
            time: '11 months ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
            id: '2',
            name: 'Jay Patel',
            profile: require('../../assets/Image/profile1.png'), // Your profile image
            rating: 5.0,
            time: '11 months ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
            id: '3',
            name: 'Hit Patel',
            profile: require('../../assets/Image/profile1.png'), // Your profile image
            rating: 5.0,
            time: '11 months ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
    ];

    const RenderItem = ({ item }: any) => (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={tik} style={{ height: 20, width: 20, position: "absolute", zIndex: 1, alignSelf: "flex-end", left: 25 }} />
                <Image source={profile} style={{ height: 40, width: 40, borderRadius: 50, }} />
                <Text style={[Typography.samll_bold, { color: 'black', letterSpacing: 0 }]}>
                    {item.name}
                </Text>
            </View>
            <View style={{ position: 'absolute', padding: 10, alignSelf: 'flex-end', gap: 3 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, alignSelf: 'flex-end' }}>
                    <Image source={star} style={{ height: 19, width: 19, alignSelf: "flex-end" }} />
                    <Text style={[Typography.samll_bold, { textAlign: 'right', color: 'black' }]}>
                        {item.rating.toFixed(1)}
                    </Text>
                </View>
                <Text style={[Typography.tab, { color: "#797979" }]}>{item.time}</Text>
            </View>
            <Text style={[Typography.title, { marginTop: 15, color: "#797979" }]}>
                {item.message}
                <Text style={{ color: Color.orange, fontSize: FontSize.Font16 }}> Reply</Text>
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15 }} />
        </View>
    );


    return (
        <View style={{ marginBottom: 30, padding: 10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
            <View style={styles.tab}>
                {tab.map((item, index) => (
                    <Pressable onPress={() => setSeletedIndex(index)} style={{ borderWidth: 1, borderColor: Color.border, padding: 7, backgroundColor: seletedindex == index ? Color.orange : Color.white, borderRadius: 50, paddingHorizontal: 20 }}>
                        <Text style={[Typography.smallTitle, { color: seletedindex == index ? Color.white : Color.black, letterSpacing: 0 }]}>{item}</Text>
                    </Pressable>
                ))}
            </View>
                </ScrollView>
            <View  style={{borderBottomWidth : 1 , borderBottomColor: "#080B111A", marginTop: scale(15), marginBottom: 10}}/>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item) => item.id}
            />
             <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <Smile name='smile' size={24} color={Color.chatBg} style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    placeholder='Make a Comment'
                    placeholderTextColor={Color.chatBg}
                />
                {/* <View style={styles.iconContainer}>
                    <Pressable>
                        <Icon name='attachment' size={19} color={Color.chatBg} style={styles.icon} />
                    </Pressable>
                    <Pressable>
                        <Icon name='camera' size={19} color={Color.chatBg} style={styles.icon} />
                    </Pressable>
                </View> */}
            </View>

            <TouchableOpacity style={styles.sendButton}>
                {/* <Image source={CameraImage} style={styles.sendIcon} /> */}
                <Send />
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    tab: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    container: {
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
      inputContainer: {
        flexDirection: 'row',
        backgroundColor: Color.inputBg,
        borderRadius: 13,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flex: 1,
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        color: '#000',
        fontFamily: "Urbanist-Medium"
        // marginLeft: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: 7,
    },
    icon: {
        marginHorizontal: 5,
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: Color.orange,
        borderRadius: 50,
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    sendIcon: {
        height: 31,
        width: 31,
    },
})