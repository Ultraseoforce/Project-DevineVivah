import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, scale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import { navigationRef } from '../../Navigator/Utils'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'

interface Back {
  centerTitle?: string
  rightTitle?: string
  onpress?: Function
  leftTitle?: string
  rightBtn?: string
  onpressButton?: Function
}
const BackHeader = (Props: Back) => {
  const back = require("../../assets/Image/leftarrow.png")
  const arrowleft = require("../../assets/Image/arrow-left.png")


  return (
    <View style={styles.mainContainer}>
      <View style={[styles.headerContainer, { justifyContent: Props.leftTitle ? "flex-start" : "space-between" }]}>
        <Pressable onPress={() => navigationRef.goBack()}>
          {Props.leftTitle ? <Image source={arrowleft} style={{ width: 24, height: 24 }} /> : <View style={styles.container}>
            <Image source={back} style={{ width: 22, height: 18 }} />
          </View>}
        </Pressable>

        {Props.leftTitle ?
          <Text style={[Typography.smallText, { lineHeight: 22, marginLeft: moderateScale(7), fontSize: FontSize.Font18, color: Color.black }]}>{Props.leftTitle}</Text>
          :
          <Text
            style={[
              Typography.samll_bold,
              styles.centerTitle,
              Props.rightTitle ? { transform: [{ translateX: scale(40) }] } : { transform: [{ translateX: scale(-15) }] }
            ]}
          >
            {Props.centerTitle}
          </Text>}
        <Text onPress={() => Props.onpress ? Props.onpress() : null} style={[Typography.samll_bold, styles.rightTitle]}>{Props.rightTitle}</Text>
        {Props.rightBtn &&  <Pressable onPress={() => Props.onpressButton ? Props.onpressButton() : null} style={{position: "absolute", right: moderateScale(16), backgroundColor: Color.orange, padding: 10, borderRadius: 8}}>
        <Text  style={[Typography.smallText, styles.rightTitle, {color:Color.white, lineHeight: 20}]}>{Props.rightBtn}</Text>
        </Pressable>}
       
      </View>
    </View>
  )
}

export default BackHeader

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    height: moderateScaleVertical(100),
    elevation: 5,
    justifyContent: "center"
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",

    padding: 10,
    marginTop: scale(25),
  },
  container: {
    borderRadius: moderateScale(50),
    borderWidth: 1,
    borderColor: Color.border,
    height: moderateScale(40),
    width: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  centerTitle: {
    color: Color.black,
    fontSize: FontSize.Font18,
    alignSelf: "center",

  },
  rightTitle: {
    color: Color.orange,
    fontSize: FontSize.Font18,
  }
})
