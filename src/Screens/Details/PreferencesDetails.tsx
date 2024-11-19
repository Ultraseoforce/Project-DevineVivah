import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import Button from '../../Component/Buttons/Button'
import About from '../../Component/Placeholder/About'
import { navigate } from '../../Navigator/Utils'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../Store/auth/authSlice'
import { getObject } from '../../Component/Utils/helper'

const Preferences = () => {
  const [abouttext, setAboutText] = useState<string>('');
  const [likingstext, setLikingsText] = useState<string>('');
  const [dislikingstext, setDislikingsText] = useState<string>('');
  const [smokestates, setSmokeStates] = useState<string>('');
  const [drinkstates, setDrinkStates] = useState<string>('');
  const [errors, setErrors] = useState<PreferencesErrors>({});
  const profiledata = useSelector(selectProfile)

  const status = [
    { name: 'Yes', id: '0' },
    { name: 'No', id: '1' },
  ];


  useEffect(() => {
   if(profiledata){
    let smake = getObject(status, profiledata.smoke.toString());
    let drink = getObject(status, profiledata.drink.toString());
    setSmokeStates(smake)
    setDrinkStates(drink)
    setAboutText(profiledata.about_you)
    setLikingsText(profiledata.likes)
    setDislikingsText(profiledata.dislikes)
   }
  }, [profiledata])

  const validation = (): boolean => {
    let formErrors: PreferencesErrors = {};
    if (!abouttext.trim()) {
      formErrors.abouttext = "About text is required";
    }
    if (!likingstext.trim()) {
      formErrors.likingstext = "Likings are required";
    }
    if (!dislikingstext.trim()) {
      formErrors.dislikingstext = "Dislikings are required";
    }
    if (!String(smokestates).trim()) {
      formErrors.smokestates = "Smoking status is required";
    }
    if (!String(drinkstates).trim()) {
      formErrors.drinkstates = "Drinking status is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const Save = () => {
    if (validation()) {
      let data = {
        about_you: abouttext,
        likes: likingstext,
        dislikes: dislikingstext,
        smoke: smokestates?.id,
        drink: drinkstates?.id,
      }
      navigate("SelectInterests", { Preferencesdata: data })
      console.log("Preferences", data)

    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Preferences Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <View>
              <About
                placeholder='Enter about yourself...'
                title='About You'
                numberOfLines={4}
                value={abouttext}
                onChangeText={setAboutText}
              />
              {errors.abouttext && <Text style={styles.errorText}>{errors.abouttext}</Text>}
            </View>
            <View>
              <About
                placeholder='Enter your Liking...'
                title='Your Liking'
                value={likingstext}
                onChangeText={setLikingsText}
                numberOfLines={4}
              />
              {errors.likingstext && <Text style={styles.errorText}>{errors.likingstext}</Text>}
            </View>
            <View>
              <About
                placeholder='Enter your disliking...'
                title='Your Dislikings'
                value={dislikingstext}
                onChangeText={setDislikingsText}
                numberOfLines={4}
              />
              {errors.dislikingstext && <Text style={styles.errorText}>{errors.dislikingstext}</Text>}
            </View>
            <View>
              <CustomDropdown
                items={status}
                placeholder='Select'
                title='Do you Smoke?'
                selectedValue={smokestates}
                onSelect={setSmokeStates}
              />
              {errors.smokestates && <Text style={styles.errorText}>{errors.smokestates}</Text>}
            </View>
            <View>
              <CustomDropdown
                items={status}
                placeholder='Select'
                title='Do you Drink?'
                selectedValue={drinkstates}
                onSelect={setDrinkStates}
              />
              {errors.drinkstates && <Text style={styles.errorText}>{errors.drinkstates}</Text>}
            </View>
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} onPress={Save} />
      </ScrollView>
    </View>
  )
}

export default Preferences

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