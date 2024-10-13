import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import Button from '../../Component/Buttons/Button'

const SiblingDetails = () => {

  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");


  const Sibling_Gender = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
  ];

  const sibling_marital_status = [
    { label: 'Never Married', value: '1' },
    { label: 'Widower', value: '2' },
    { label: 'Widow', value: '3' },
    { label: 'Divorced', value: '4' },
    { label: 'Awaiting Divorce', value: '5' },
  ];


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Sibling Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <NameInput
              placeholder='Sibling Name'
              title='Sibling 1'
              value={name}
              onChangeText={setName}
              nameStyle />
            <CustomDropdown
              items={Sibling_Gender}
              selectedValue={gender}
              onSelect={(item: any) => setGender(item)}
              placeholder='Select Gender'
            
            />
             <NameInput 
             placeholder='Sibling Age'
             value={age}
             onChangeText={setAge}
             />
              <CustomDropdown
              items={sibling_marital_status}
              selectedValue={maritalstatus}
              onSelect={(item: any) => setMaritalStatus(item)}
              placeholder='Select Martial Status'
              title= "Marital Status"
            />
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SiblingDetails

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(10)
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  btn:{
    margin: moderateScale(10),
    marginVertical: moderateScale(25)
  }
})