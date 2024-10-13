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

const PersonalDetails = () => {

  const [fullname, setFullName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [religion, setReligion] = useState("")
  const [caste, setCaste] = useState("")
  const [mothertongue, setMotherTongue] = useState("")
  const [maritalstatus, setMaritalStatus] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")


  const marital_status = [
    { label: 'Never Married', value: '1' },
    { label: 'Widower', value: '2' },
    { label: 'Widow', value: '3' },
    { label: 'Divorced', value: '4' },
    { label: 'Awaiting Divorce', value: '5' },
  ];


  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Personal Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <NameInput
              placeholder='Enter your Full Name'
              title='Your Full Name'
              value={fullname}
              onChangeText={setFullName}
              nameStyle />
            <NameInput
              placeholder='Mobile'
              title='Mobile'
              value={mobile}
              nameStyle
              onChangeText={setMobile}
            />
            <NameInput
              placeholder='Email'
              title='Email'
              value={email}
              nameStyle
              onChangeText={setEmail}
            />
            <NameInput
              placeholder='Date of Birth'
              title='Date of Birth'
              value={dob}
              nameStyle
              onChangeText={setDob}
            />
            <NameInput
              placeholder='Religion'
              title='Religion'
              nameStyle
              value={religion}
              onChangeText={setReligion}
            />
            {/* <CustomDropdown
              items={items}
              selectedValue={selected}
              onSelect={(item: any) => setSelected(item)}
              placeholder='Select Religion'
              title='Your Religion'
            /> */}

            <NameInput
              placeholder='You Caste'
              title='Caste'
              value={caste}
              nameStyle
              onChangeText={setCaste}
            />
            <NameInput
              placeholder='Mother Tongue'
              title='Mother Tongue'
              value={mothertongue}
              nameStyle
              onChangeText={setMotherTongue}
            />
            {/* <NameInput
              placeholder='Marital Status'
              title='Select Mother Tongue'
              value={caste}
              onChangeText={setCaste}
            /> */}
             <CustomDropdown
              items={marital_status}
              selectedValue={maritalstatus}
              onSelect={(item: any) => setMaritalStatus(item)}
              placeholder='Marital Status'
              title='Select Mother Tongue'
            />
          
            {/* <InputDropdown
              placeholder='0'
              title='No. of siblings'
              nameStyle
            /> */}
            <InputDropdown
              placeholder='0'
              title='Your Height(cm)'
              nameStyle
              value={height}
              onChangeText={setHeight}
            />
            <InputDropdown
              placeholder='0'
              title='Your Weight(Kg)'
              nameStyle
              value={weight}
              onChangeText={setWeight}
            />
             <NameInput
              placeholder='Password'
              title='Password'
              value={password}
              nameStyle
              onChangeText={setPassword}
            />
             <NameInput
              placeholder='Confirm Password'
              title='Confirm Password'
              value={confirmpassword}
              nameStyle
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </ScrollView>
    </View>
  )
}

export default PersonalDetails

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