import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Theme/ResposiveSize'
import BackHeader from '../../Component/Header/BackHeader'
import { images } from '../../Theme/Image'
import ProfileTabCard from '../Profile/ProfileTab'
import { Color } from '../../Theme'

const ProfileSettings = () => {

    const TabName = [
        {
          id: 1,
          title: 'Personal Details',
          icon: images.PersonalIcon,
          screen: "PersonalDetails"
        },
    
        {
          id: 2,
          title: 'Education Details',
          icon: images.EducationIcon,
          screen: "Education"
        },
        {
          id: 3,
          title: 'Profession Details',
          icon: images.ProfessionIcon,
          screen: "Profession"
        },
        {
          id: 4,
          title: 'Family Details',
          icon: images.FamilyIcon,
          screen: "FamilyDetails",
        },
        {
          id: 5,
          title: 'Preferences Details',
          icon: images.PreferencesIcon,
          screen: "Preferences"
        },
        {
          id: 6,
          title: 'Location Details',
          icon: images.LocationIcon,
          screen: "Location"
        },
      ]
    

  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>    
    <BackHeader leftTitle='Profile Settings' />
        <View style={{marginTop: 16}}>
        <ProfileTabCard Data={TabName} />

        </View>
    </View>
  )
}

export default ProfileSettings

const styles = StyleSheet.create({})