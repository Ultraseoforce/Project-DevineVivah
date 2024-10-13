import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import InputDropdown from '../../Component/Dropdowns/InputDropdown'
import Button from '../../Component/Buttons/Button'

const FamilyDetails = () => {

  const [fathername, setFatheName] = useState("")
  const [mothername, setMotherName] = useState("")
  const [siblingsno, setSiblingsNo] = useState("")
  const [fatherprofession, setFatherProfession] = useState("")
  const [motherprofession, setMotherProfession] = useState("")



  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Family Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <NameInput
              placeholder='Enter Father Name'
              title='Father Name'
              value={fathername}
              onChangeText={setFatheName}
              nameStyle
            />
            <NameInput
              placeholder='Enter Mother Name'
              title='Mother Name'
              value={mothername}
              onChangeText={setMotherName}
              nameStyle
            />
            <InputDropdown
              placeholder='0'
              title='No. of siblings'
              value={siblingsno}
              onChangeText={setSiblingsNo}
              nameStyle
            />
            <NameInput
              placeholder='Father job details'
              title='Father Profession'
              value={fatherprofession}
              onChangeText={setFatherProfession}
              nameStyle
            />
            <NameInput
              placeholder='Mother job details'
              title='Mother Profession'
              value={motherprofession}
              onChangeText={setMotherProfession}
              nameStyle
            />
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </ScrollView>
    </View>
  )
}

export default FamilyDetails

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