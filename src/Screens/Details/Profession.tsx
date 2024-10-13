import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import NameInput from '../../Component/Placeholder/NameInput'
import Button from '../../Component/Buttons/Button'

const Profession = () => {
  const [currentlyworking, setCurrentlyWorking] = useState("")
  const [skill, setSkill] = useState("")
  const [officename, setOfficeName] = useState("")
  const [salary, setSalary] = useState("")

  const Currently_Working = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '2' },

  ];

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <View style={styles.container}>
        <Text style={Typography.main_heading}>Profession Details</Text>
        <View style={styles.content}>
          <CustomDropdown
            title='Currently Working?'
            placeholder='Selecte currently working'
            items={Currently_Working}
            selectedValue={currentlyworking}
            onSelect={setCurrentlyWorking}
          />
          <NameInput
            placeholder='Enter your skill'
            title='Your Skill'
            value={skill}
            onChangeText={setSkill}
            nameStyle
          />
          <NameInput
            placeholder='Enter your office name'
            title='Offce Name'
             value={officename}
             onChangeText={setOfficeName}
            nameStyle
          />
          <NameInput
            placeholder='Yearly Salary'
            title='Enter your yearly salary'
            value={salary}
            onChangeText={setSalary}
            nameStyle
            keyboardType="numeric"
          />
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </View>
    </View>
  )
}

export default Profession

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    marginTop: moderateScale(20),
    gap: moderateScale(20),
  },
  btn: {
    marginBottom: moderateScale(10),
  },
})