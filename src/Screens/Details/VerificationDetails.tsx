import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackHeader from '../../Component/Header/BackHeader'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import Button from '../../Component/Buttons/Button'
import { Typography } from '../../Theme/Typography'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DocumentScanner from 'react-native-document-scanner-plugin'


const CreationSteps = () => {
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument()
    if (scannedImages.length > 0) {
      setScannedImage(scannedImages[0])
    }
  }

  console.log("scannedImage", scannedImage)


  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={[styles.heading, Typography.main_heading]}>Upload your Identity proof</Text>
          <Text style={[styles.text, Typography.body]}>Kindly attach the front, back picture of your national identity card.</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(15) }}>
            <View style={styles.cardContainer}>
              <Pressable onPress={() => scanDocument()} style={styles.redBox}>
              <MaterialIcons name="add" size={29} color={Color.black} />
              </Pressable>
              <Text style={[styles.cardText, Typography.smallTitle]}>ID Card : front</Text>
            </View>

            <View style={styles.cardContainer}>
              <Pressable onPress={() => scanDocument()} style={styles.redBox}>
              <MaterialIcons name="add" size={29} color={Color.black} />
              </Pressable>
              <Text style={[styles.cardText, Typography.smallTitle]}>ID Card : back</Text>
            </View>
          </View>
          <View style={{marginTop: moderateScale(43)}}>
          <Text style={[Typography.smallTitle, {color: Color.black, paddingVertical: 5}]}>Upload your picture</Text>
          <View style={styles.cardContainer}>
              <Pressable style={styles.redBox}>
              <MaterialIcons name="add" size={29} color={Color.black} />
              </Pressable>
              <Text style={[styles.cardText, Typography.smallTitle]}>Take Selfie</Text>
            </View>
          </View>
        </View>
        <Button title='Next' mainStyle={styles.btn} />
      </ScrollView>
    </View>
  )
}

export default CreationSteps

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16)
  },
  heading: {
    // marginTop: moderateScale(15)
  },
  text: {
    marginTop: moderateScale(20),
    color: Color.chatBg
  },
  btn: {
    marginTop: moderateScale(80),
    marginBottom: moderateScale(30),
    marginHorizontal: moderateScale(10)
  },

  cardContainer: {
    position: 'relative',
    width: moderateScale(160),
  },
  redBox: {
    backgroundColor: Color.inputBg,
    height: moderateScale(110),
    width: '100%',
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  cardText: {
    position: "absolute",
    bottom: -35,
    left: 0,
    margin: moderateScale(5),
    fontSize: moderateScale(12),
    color: Color.black,
  },

})