import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import Button from '../../Component/Buttons/Button'
import { useGetCityQuery, useGetCountryQuery, useGetStateQuery } from '../../Store/dropdown/dropdownApiSlice'
import { useUpdateLocationDetailsMutation } from '../../Store/profile/ProfileApiSlice'
import { navigate } from '../../Navigator/Utils'
import Toast from '../../Component/Modal/ToastMessage'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../Store/auth/authSlice'
import { getObject } from '../../Component/Utils/helper'

const Location = () => {
  const { showToast } = Toast();
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")

  const [postalcode, setPostalCode] = useState("");
  const { data: CountryData } = useGetCountryQuery();
  const { data: stateData, isLoading } = useGetStateQuery();
  const { data: Citydata, error } = useGetCityQuery(state?.id || 4852);
  const [errors, setErrors] = useState<LocationDetailsErrors>({});
  const profiledata = useSelector(selectProfile)

  const [addLocation, { }] = useUpdateLocationDetailsMutation()
console.log(CountryData)   //    console.log('setPostalCode', )

const Data = 
  [{ name: "India", id: 101}]

useEffect(() => {
  if(profiledata){
    // let countrydut = getObject(Data, "101");
    // console.log("seleted", countrydut)
    // let state = getObject(stateData, "4009");
    // let City = getObject(Citydata, profiledata.city_id.toString());

    setCountry("")
    setState(state)
    // setCity(City)
    setPostalCode(profiledata.postalcode)
  }
}, [profiledata])


  const validation = (): boolean => {
    let formErrors: LocationDetailsErrors = {};

    if (!country) {
      formErrors.country = "Country is required";
    }

    if (!state) {
      formErrors.state = "State is required";
    }

    if (!city) {
      formErrors.city = "City is required";
    }
    if (!postalcode) {
      formErrors.postalcode = "Postal code is required";
    } else if (!/^\d{5,6}$/.test(postalcode)) {
      formErrors.postalcode = "Please enter a valid postal code";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const Save = async () => {
    const request = {
      country_id: country.id,
      state_id: state.id,
      city_id: city.id,
      postalcode: postalcode,

    }
    try {
      if (validation()) {
        const respo = await addLocation(request).unwrap();
        console.log("addLocation", respo)
        if (respo?.status == true) {
          showToast(respo?.message, { type: 'normal' });
          navigate("MainNavigator", {})
        } else {
          showToast(respo?.message, { type: 'normal' });
        }
      }

    } catch (error) {
      console.log(error)
    }

  }



  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Location Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <View>
              <CustomDropdown
                items={CountryData}
                placeholder='Select country'
                title='Country'
                selectedValue={country}
                onSelect={setCountry}
              />
              {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
            </View>
            <View>
              <CustomDropdown
                items={stateData}
                placeholder='Select state'
                title='State'
                selectedValue={state}
                onSelect={setState}
              />
              {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
            </View>
            <View>
              <CustomDropdown
                items={Citydata}
                placeholder='Select'
                title='City'
                selectedValue={city}
                onSelect={setCity}
              />
              {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
            </View>
            <View>
              <NameInput
                nameStyle
                placeholder='Enter postal code here..'
                title='Postal Code'
                value={postalcode}
                onChangeText={setPostalCode}
                keyboardType={"numeric"}
                maxLength={6}
              />
              {errors.postalcode && <Text style={styles.errorText}>{errors.postalcode}</Text>}
            </View>
          </View>
        </View>
      </ScrollView>
        <Button title='Continue' mainStyle={styles.btn} onPress={Save} />
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(17)
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  btn: {
    margin: moderateScale(17),
    marginVertical: moderateScale(25)
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
})