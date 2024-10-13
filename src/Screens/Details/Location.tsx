import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import Button from '../../Component/Buttons/Button'

const Location = () => {
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [postalcode, setPostalCode] = useState("");


  const items = [
    { label: 'Religion 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];


  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Location Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <CustomDropdown
              items={items}
              placeholder='Select country'
              title='Country'
              selectedValue={country}
              onSelect={(item: any) => setCountry(item)}
            />
            <CustomDropdown
              items={items}
              placeholder='Select state'
              title='State'
              selectedValue={state}
              onSelect={(item: any) => setState(item)}
            />
            <CustomDropdown
              items={items}
              placeholder='Select'
              title='City'
              selectedValue={city}
              onSelect={(item: any) => setCity(item)}
            />
            <NameInput
              nameStyle
              placeholder='Enter postal code here..'
              title='Postal Code'
              value={postalcode}
              onChangeText={setPostalCode}
              keyboardType={"numeric"}
              maxLength={6}
            />
          </View>
        </View>
        <Button title='Continue' mainStyle={styles.btn} />
      </ScrollView>
    </View>
  )
}

export default Location

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