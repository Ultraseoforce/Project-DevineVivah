import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, scale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'
import WhiteButton from '../Buttons/WhiteButton'
import { Color } from '../../Theme'

const ShopStoreCard = () => {
  const jewelry = require("../../assets/Image/jewelryprecious.png")

  return (
    <View style={{ marginTop: moderateScale(5), }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={Color.gradient} style={styles.linearGradient}>
          <View style={{ padding: 15 }}>
            <Text style={[Typography.samll_bold, { fontSize: FontSize.Font24, lineHeight: 30, maxWidth: moderateScale(250), color: Color.black }]}>
              Shop Store Jewelry Online
            </Text>
            <Text style={[Typography.small, { maxWidth: moderateScale(250) }]}>Lorem ipsum dolor sit amet, consectetur adipisci elit,</Text>
            <WhiteButton  title="Shope Now" mainStyle={{marginTop: scale(15)}} />
          </View>
          <Image source={jewelry} resizeMode='contain' style={{ height: scale(130), width: scale(180), alignSelf: "flex-end", position: "absolute", marginTop: moderateScale(50) }} />
        </LinearGradient>

      </View>
  )
}

export default ShopStoreCard

const styles = StyleSheet.create({
    linearGradient: {
        height: scale(194),
        borderRadius: 14,
        marginHorizontal: 10
      }
})