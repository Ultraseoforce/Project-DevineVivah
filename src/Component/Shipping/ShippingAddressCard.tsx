import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'
import { moderateScale, scale } from '../../Theme/ResposiveSize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Right from '../../assets/svg/Right.svg'


interface ShippingCard {
  heading?: string
  phoneNumber?: any
  address?: any
  name?: string
  mainStyle?: any
  ShowEdit?: boolean
  addressBtton?: boolean
  toptitle?: string
}

const ShippingAddressCard = (Props: ShippingCard) => {



  const location = require("../../assets/Image/addlocation.png")
  const right = require("../../assets/Image/right.png")


  return (
    <View>
      {Props.toptitle && <Text style={[Typography.small,{color: Color.chatBg}]}>{Props.toptitle}</Text> }
      <View style={[styles.container, Props.mainStyle]}>
        <Image source={location} style={{ height: 45, width: 45 }} />
        <View style={{ gap: 3 }}>
          <Text style={[Typography.smallText, { fontSize: FontSize.Font16, lineHeight: 18, color: Color.black }]}>{Props.heading}</Text>
          {!Props.ShowEdit ?
            <Image source={right} style={{ height: 15, width: 15, position: "absolute", alignSelf: "flex-end",  tintColor: Color.orange }} resizeMode='contain' />
            :
            <View style={{ flexDirection: "row", position: "absolute", alignSelf: "flex-end", gap: 5,  alignItems: "center" }}>
              <FontAwesome name='edit' size={20} color={Color.orange}    />
              <Text style={[Typography.smallText, { fontSize: FontSize.Font18, lineHeight: 22, color: Color.orange }]}>Edit</Text>
            </View>

          }

          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={[Typography.smallText, { fontSize: FontSize.Font14, lineHeight: 18, color: Color.black }]}>{Props.name}</Text>
            <Text style={[Typography.small, { fontSize: FontSize.Font15, color: Color.chatBg }]}>+{Props.phoneNumber}</Text>
          </View>
          <Text style={[Typography.small, { maxWidth: scale(250), fontSize: FontSize.Font15 }]}>{Props.address}</Text>
          {Props.addressBtton && <View style={{ borderWidth: 1, borderRadius: 8, borderColor: Color.orange, padding: 5, marginTop: 5, maxWidth: moderateScale(200) }}>
            <Text style={[Typography.small, { color: Color.orange }]} >Default primary address</Text>
          </View>}


        </View>

      </View>
    </View>
  )
}

export default ShippingAddressCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.border,
    padding: 15,
    flexDirection: "row",
    //  alignItems: "center",
    gap: 10,
    borderRadius: 8

  }
})