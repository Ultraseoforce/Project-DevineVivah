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
import { useUpdatePersonalDetailsMutation } from '../../Store/profile/ProfileApiSlice'
import Toast from '../../Component/Modal/ToastMessage'
import { navigate } from '../../Navigator/Utils'

const PersonalDetails = () => {
  const [email, setEmail] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [religion, setReligion] = useState<string>('');
  const [caste, setCaste] = useState<string>('');
  const [mothertongue, setMotherTongue] = useState<string>('');
  const [maritalstatus, setMaritalStatus] = useState<Dropdown | null>(null);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState<Dropdown | null>(null);
  const [errors, setErrors] = useState<PersonalDetailsErrors>({});


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
  interface Dropdown {
    name: string,
    id: number
  }


  //   email
  // apiprofileupdate3@gmail.com

  // gender
  // 0

  // dob
  // 1995-01-11

  // religion
  // Muslim

  // caste
  // Shia

  // mother_tongue
  // Urdu

  // height
  // 5.04

  // weight
  // 64.24

  // marital_status
  // 1


  const validateForm = (): boolean => {
    let formErrors: PersonalDetailsErrors = {};

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Please enter a valid email';
    }

    // Basic DOB validation (YYYY-MM-DD)
    // if (!dob || !/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
    //   formErrors.dob = 'Please enter date of birth in YYYY-MM-DD format';
    // }

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

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const save = async () => {
    const request = {
      email: email,
      gender: gender?.id,
      dob: "1995-01-11",
      religion: religion,
      caste: caste,
      mother_tongue: mothertongue,
      height: height,
      weight: weight,
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
    <View style={{ flex: 1, backgroundColor: Color.white }}>
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
            {/* <CustomDropdown
              items={items}
              selectedValue={selected}
              onSelect={(item: any) => setSelected(item)}
              placeholder='Select Religion'
              title='Your Religion'
            /> */}
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
            {/* <NameInput
              placeholder='Marital Status'
              title='Select Mother Tongue'
              value={caste}
              onChangeText={setCaste}
            /> */}
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

            {/* <InputDropdown
              placeholder='0'
              title='No. of siblings'
              nameStyle
            /> */}
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
            {/* <NameInput
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
            /> */}
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
    margin: moderateScale(10)
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