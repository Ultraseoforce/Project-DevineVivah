import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RightIcon from 'react-native-vector-icons/Feather'
import { moderateScale, scale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'
import { Color } from '../../Theme'
import { navigate } from '../../Navigator/Utils'

interface Details {
    Data?: any
};





const ProfileTabCard = (Props: Details) => {

    const renderItem = ({ item }) => (
        <Pressable onPress={() => item.screen && navigate(item.screen,{})} style={styles.itemContainer}>
            <View style={styles.textImageContainer}>
                <Image source={item.icon} style={styles.imageStyle} resizeMode='contain' />
                <Text style={[Typography.smallText, { fontSize: FontSize.Font18, lineHeight: 22, marginLeft: moderateScale(13), color: Color.black }]}>{item.title}</Text>
            </View>
            <RightIcon name="chevron-right" size={30} color="#292D32" />
        </Pressable>
    );


    return (
        <View>
            <FlatList
                data={Props.Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ProfileTabCard;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 7,
        marginHorizontal: 16,
        backgroundColor: Color.boxBg,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    textImageContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyle: {
        height: scale(20),
        width: scale(20)
    },
    textStyle: {
        fontSize: 16,
        fontFamily: 'Profile',
        color: '#000',
        marginLeft: 10,
        // alignSelf: "center"
    },
});
