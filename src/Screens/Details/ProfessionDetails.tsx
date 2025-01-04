import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import NameInput from '../../Component/Placeholder/NameInput'
import Button from '../../Component/Buttons/Button'
import Toast from '../../Component/Modal/ToastMessage'
import { useGetProfileQuery, useUpdateProfessionDetailsMutation } from '../../Store/profile/ProfileApiSlice'
import { navigate } from '../../Navigator/Utils'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../Store/auth/authSlice'
import { getObject } from '../../Component/Utils/helper'

const Profession = () => {
  const [currentlyworking, setCurrentlyWorking] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [officename, setOfficeName] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [errors, setErrors] = useState<ProfessionDetailsErrors>({});
  const { showToast } = Toast();
  // const profiledata = useSelector(selectProfile)
  const [addProfessionDetails, { isLoading }] = useUpdateProfessionDetailsMutation()
  const { data: profiledata, refetch } = useGetProfileQuery({});


  useEffect(() => {
    refetch();
  }, [refetch]);

  const Currently_Working = [
    { name: 'Yes', id: '0' },
    { name: 'No', id: '1' },

  ];

  useEffect(() => {
  if(profiledata &&  profiledata.profession_details != 0){
    let working = getObject(Currently_Working, profiledata.currently_working.toString());
    setCurrentlyWorking(working)
    setSkill(profiledata.skill)
    setOfficeName(profiledata.office)
    setSalary(profiledata.salary.toString())
  }
  }, [profiledata])


  const validateForm = (): boolean => {
    let formErrors: ProfessionDetailsErrors = {};

    if (!currentlyworking) {
      formErrors.currentlyworking = 'Please specify if you are currently working';
    }

    if (!skill) {
      formErrors.skill = 'Skill is required';
    }

    if (!officename) {
      formErrors.officename = 'Office name is required';
    }

    if (!salary || isNaN(Number(salary))) {
      formErrors.salary = 'Please enter a valid salary';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const Save = async () => {
    const request = {
      currently_working: currentlyworking.id,
      skill: skill,
      office: officename,
      salary: salary,
      
    }
    try {
      if (validateForm()) {
        const respo = await addProfessionDetails(request).unwrap();
        console.log('add Profession details->>', respo);
        if (respo?.status == true) {
          showToast(respo?.message, { type: 'normal' });
          navigate("CreationSteps", { key: "ProfessionDetails" })
        } else {
          showToast(respo?.message, { type: 'normal' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }



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
        <Button title='SAVE' mainStyle={styles.btn} onPress={Save} />
      </View>
    </View>
  )
}

export default Profession

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(17),
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    marginTop: moderateScale(20),
    gap: moderateScale(20),
  },
  btn: {
    marginBottom: moderateScale(30),
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
})