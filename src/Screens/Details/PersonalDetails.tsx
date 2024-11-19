import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import InputDropdown from '../../Component/Dropdowns/InputDropdown'
import Button from '../../Component/Buttons/Button'
import { useUpdatePersonalDetailsMutation } from '../../Store/profile/ProfileApiSlice'
import Toast from '../../Component/Modal/ToastMessage'
import { navigate } from '../../Navigator/Utils'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../Store/auth/authSlice'
import { getObject } from '../../Component/Utils/helper'
// import { getObject } from '../../Component/Utils/helper'

const PersonalDetails = () => {
  const [email, setEmail] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [religion, setReligion] = useState<string>('');
  const [caste, setCaste] = useState<string>('');
  const [mothertongue, setMotherTongue] = useState<string>('');
  const [maritalstatus, setMaritalStatus] = useState<Dropdown | null>(null);
  const [dietname, setDietName] = useState<Dropdown | null>(null);
  const [height, setHeight] = useState<string>();
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState<Dropdown | null>(null);
  const [errors, setErrors] = useState<PersonalDetailsErrors>({});
  const profiledata = useSelector(selectProfile)

  const { showToast } = Toast();
  const [addPersonalDetails, { isLoading }] = useUpdatePersonalDetailsMutation()

  const marital_status = [
    { name: 'Never Married', id: '1' },
    { name: 'Widower', id: '2' },
    { name: 'Widow', id: '3' },
    { name: 'Divorced', id: '4' },
    { name: 'Awaiting Divorce', id: '5' },
  ];
  const Gender = [
    { name: 'Male', id: '0' },
    { name: 'Female', id: '1' },
  ];
  const dietItem = [
    { name: 'Veg', id: '1' },
    { name: 'Non Veg', id: '2' },
    { name: 'Jain', id: '3' },
    { name: 'Swami Narayan', id: '4' },
  ];
  interface Dropdown {
    name: string,
    id: number
  }

  useEffect(() => {
    if (profiledata && profiledata.personal_details != 0) {
      let Marital = getObject(marital_status, profiledata?.marital_status.toString());
      let gender = getObject(Gender, profiledata?.member_gender.toString());
      let diet = getObject(dietItem, profiledata?.diet.toString());
      setMaritalStatus(Marital);
      setGender(gender)
      setEmail(profiledata?.member_email)
      setDob(profiledata?.dob)
      setReligion(profiledata?.religion)
      setCaste(profiledata.caste)
      setMotherTongue(profiledata?.mother_tongue)
      setHeight(profiledata?.height.toString())
      setWeight(profiledata?.weight.toString())
      setDietName(diet)
    }
  }, [profiledata])
  const validateForm = (): boolean => {
    let formErrors: PersonalDetailsErrors = {};

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Please enter a valid email';
    }

    if (!dob || !/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
      formErrors.dob = 'Please enter date of birth in YYYY-MM-DD format';
    }

    if (!religion) {
      formErrors.religion = 'Religion is required';
    }

    if (!caste) {
      formErrors.caste = 'Caste is required';
    }

    if (!mothertongue) {
      formErrors.mothertongue = 'Mother tongue is required';
    }

    if (!maritalstatus) {
      formErrors.maritalstatus = 'Marital status is required';
    }

    if (!height || isNaN(Number(height))) {
      formErrors.height = 'Please enter a valid height';
    }

    if (!weight || isNaN(Number(weight))) {
      formErrors.weight = 'Please enter a valid weight';
    }

    if (!gender) {
      formErrors.gender = 'Gender is required';
    }
    if (!dietname) {
      formErrors.gender = 'Diet name is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const save = async () => {
    const request = {
      email: email,
      gender: gender?.id,
      dob: dob,
      religion: religion,
      caste: caste,
      mother_tongue: mothertongue,
      height: height,
      weight: weight,
      diet: dietname?.id,
      marital_status: maritalstatus?.id,
    }
    try {
      if (validateForm()) {
        const respo = await addPersonalDetails(request).unwrap();
        console.log('add personal details->>', respo);
        if (respo?.status == true) {
          showToast(respo?.message, { type: 'normal' });
          navigate("CreationSteps", { key: "PersonalDetails" })
        } else {
          showToast(respo?.message, { type: 'normal' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: Color.white, }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Personal Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            {/* <NameInput
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
            /> */}
            <View>
              <NameInput
                placeholder='Email'
                title='Email'
                value={email}
                nameStyle
                onChangeText={setEmail}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            <View>
              <CustomDropdown
                items={Gender}
                selectedValue={gender}
                onSelect={setGender}
                placeholder='Select Gender'
                title='Your Gender'
              />
              {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
            </View>

            <View>
              <NameInput
                placeholder='Date of Birth'
                title='Date of Birth'
                value={dob}
                nameStyle
                isDate={true}
                onChangeText={setDob}
              />
              {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}
            </View>
            <View>
              <NameInput
                placeholder='Religion'
                title='Religion'
                nameStyle
                value={religion}
                onChangeText={setReligion}
              />
              {errors.religion && <Text style={styles.errorText}>{errors.religion}</Text>}
            </View>
            <View>
              <NameInput
                placeholder='You Caste'
                title='Caste'
                value={caste}
                nameStyle
                onChangeText={setCaste}
              />
              {errors.caste && <Text style={styles.errorText}>{errors.caste}</Text>}
            </View>
            <View>
              <NameInput
                placeholder='Mother Tongue'
                title='Mother Tongue'
                value={mothertongue}
                nameStyle
                onChangeText={setMotherTongue}
              />
              {errors.mothertongue && <Text style={styles.errorText}>{errors.mothertongue}</Text>}
            </View>
            <View>
              <CustomDropdown
                items={marital_status}
                selectedValue={maritalstatus}
                onSelect={setMaritalStatus}
                placeholder='Marital Status'
                title='Select Mother Tongue'
              />
              {errors.maritalstatus && <Text style={styles.errorText}>{errors.maritalstatus}</Text>}
            </View>
            <View>
              <CustomDropdown
                items={dietItem}
                selectedValue={dietname}
                onSelect={setDietName}
                placeholder='Select Diet'
                title='Diet'
              />
              {errors.dietname && <Text style={styles.errorText}>{errors.dietname}</Text>}
            </View>
            <View>
              <InputDropdown
                placeholder='0'
                title='Your Height(cm)'
                nameStyle
                value={height}
                onChangeText={setHeight}
              />
              {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}
            </View>

            <View>
              <InputDropdown
                placeholder='0'
                title='Your Weight(Kg)'
                nameStyle
                value={weight}
                onChangeText={setWeight}
              />
              {errors.weight && <Text style={styles.errorText}>{errors.weight}</Text>}

            </View>
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} onPress={save} />
      </ScrollView>
    </View>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  container: {
    padding: 17,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  btn: {
    margin: moderateScale(10),
    marginVertical: moderateScale(25)
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
})