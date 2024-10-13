import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import Button from '../../Component/Buttons/Button'
import About from '../../Component/Placeholder/About'

const Preferences = () => {

  const [abouttext, setAboutText] = useState("")
  const [likingstext, setLikingsText] = useState("")
  const [dislikingstext, setDislikingsText] = useState("")
  const [smokestatus, setSmokeStatus] = useState("")
  const [drinktatus, setDrinkStatus] = useState("")


  const status = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '2' },
  ];


  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Preferences Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <About
              placeholder='Enter about yourself...'
              title='About You'
              numberOfLines={4}
              value={abouttext}
              onChangeText={setAboutText}
            />
            <About
              placeholder='Enter your Liking'
              title='Your Liking/Dislikings'
              value={likingstext}
              onChangeText={setLikingsText}
              numberOfLines={4}
            />
            <About
              placeholder='Enter your disliking'
              title='Your Dislikings'
              value={dislikingstext}
              onChangeText={setDislikingsText}
              numberOfLines={4}
            />
            <CustomDropdown
              items={status}
              placeholder='Select'
              title='Do you Smoke?'
              selectedValue={smokestatus}
              onSelect={(item: any) => setSmokeStatus(item)}
            />
            <CustomDropdown
              items={status}
              placeholder='Select'
              title='Do you Drink?'
              selectedValue={drinktatus}
              onSelect={(item: any) => setDrinkStatus(item)}
            />
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </ScrollView>
    </View>
  )
}

export default Preferences

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(10)
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  btn: {
    margin: moderateScale(10),
    marginVertical: moderateScale(25)
  }
})