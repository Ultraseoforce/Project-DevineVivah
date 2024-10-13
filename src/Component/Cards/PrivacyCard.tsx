import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { scale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'

const PrivacyCard = () => {

    const items = [
        {
            title: "Private & Confidential",
            icon: require("../../assets/Image/private.png")
        },
        {
            title: "Verified Astrologers",
            icon: require("../../assets/Image/verified.png")
        },
        {
            title: "Secure Payments",
            icon: require("../../assets/Image/secure.png")
        }
    ]

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {items.map((item, index) => (
                    <View key={index} style={styles.itemColumn}>
                        <View style={styles.iconContainer}>
                            <Image source={item.icon} style={styles.icon} resizeMode='contain' />
                        </View>
                        <Text style={[Typography.samll_bold, { maxWidth: scale(100), textAlign: "center", color: Color.black }]}>{item.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default PrivacyCard

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 16,
        backgroundColor: Color.boxBg,
        height: scale(153),
        borderRadius: 18,
        justifyContent: "center"
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    itemColumn: {
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: Color.orange,
        height: scale(67),
        width: scale(67),
        borderRadius: scale(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        height: scale(40),
        width: scale(40),
    },
})