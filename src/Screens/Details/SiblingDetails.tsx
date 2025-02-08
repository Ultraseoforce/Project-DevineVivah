import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import Button from '../../Component/Buttons/Button'
import { useRoute } from '@react-navigation/native'
import { navigate } from '../../Navigator/Utils'
import { useGetProfileQuery, useUpdateFamilyDetailsMutation } from '../../Store/profile/ProfileApiSlice'
import Toast from '../../Component/Modal/ToastMessage'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../Store/auth/authSlice'
import { getObject } from '../../Component/Utils/helper'

const SiblingDetails = () => {
  const route = useRoute();
  const { showToast } = Toast();
  // const profiledata = useSelector(selectProfile);
  const { data: profiledata, refetch } = useGetProfileQuery({});
  const  Familydata =  route?.params?.FamilyDetails
  const [addFamilyDetails, { isLoading }] = useUpdateFamilyDetailsMutation()
  const [errors, setErrors] = useState<SiblingDetailsErrors[]>([]);
  const [siblingCount, setSiblingCount] = useState(Familydata?.siblings || 1); 
  const [siblingData, setSiblingData] = useState(
    Array.from({ length: siblingCount }, () => ({
      name: '',
      gender: '',
      age: '',
      maritalstatus: '',
    }))
  );
    
  
  useEffect(() => {
    refetch();
  }, []);

  // console.log("profiledata", profiledata.member_siblings)

  const Sibling_Gender = [
    { name: 'Male', id: '0' },
    { name: 'Female', id: '1' },
  ];

  const sibling_marital_status = [
    { name: 'Never Married', id: '1' },
    { name: 'Widower', id: '2' },
    { name: 'Widow', id: '3' },
    { name: 'Divorced', id: '4' },
    { name: 'Awaiting Divorce', id: '5' },
  ];

useEffect(() => {
  if (profiledata && profiledata.member_siblings != 0) {
    let Marital = getObject(sibling_marital_status, profiledata?.marital_status.toString());
    let gender = getObject(Sibling_Gender, profiledata?.member_gender.toString());
    const Siblings= profiledata?.member_siblings.map((sibling: any) => ({
      name: sibling.sibling_name || '',
      gender: gender || '', 
      age: sibling.sibling_age?.toString() || '', 
      maritalstatus: Marital || '', 
    }));
    setSiblingData(Siblings); 
    setSiblingCount(Siblings.length); 
  }
}, [profiledata]);


  const validateForm = (): boolean => {
    let formErrors: SiblingDetailsErrors[] = [];

    siblingData.forEach((sibling, index) => {
      let siblingErrors: SiblingDetailsErrors = {};

      if (!sibling.name) {
        siblingErrors.name = 'Name is required';
      }

      if (!sibling.gender) {
        siblingErrors.gender = 'Gender is required';
      }

      if (!sibling.age || isNaN(Number(sibling.age)) || Number(sibling.age) <= 0) {
        siblingErrors.age = 'Please enter a valid age';
      }

      if (!sibling.maritalstatus) {
        siblingErrors.maritalstatus = 'Marital status is required';
      }

      formErrors[index] = siblingErrors;
    });

    setErrors(formErrors);
    return formErrors.every((error) => Object.keys(error).length === 0);
  };




  const handleSiblingChange = (index: number, field: string, value: string) => {
    const updatedData = [...siblingData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setSiblingData(updatedData);
  };




  const Save = async () => {
    const request: any = {
      about_family: Familydata?.about_family,
      father_name: Familydata?.father_name,
      mother_name: Familydata?.mother_name,
      father_profession: Familydata?.father_profession,
      mother_profession: Familydata?.mother_profession,
      siblings: siblingData.length, 
    };
  
    siblingData.forEach((sibling, index) => {
      request[`sibling_name[]`] = request[`sibling_name[]`] || [];
      request[`sibling_name[]`].push(sibling.name);
  
      request[`sibling_gender[]`] = request[`sibling_gender[]`] || [];
      request[`sibling_gender[]`].push(sibling.gender?.id);
  
      request[`sibling_age[]`] = request[`sibling_age[]`] || [];
      request[`sibling_age[]`].push(sibling.age);
  
      request[`sibling_marital_status[]`] = request[`sibling_marital_status[]`] || [];
      request[`sibling_marital_status[]`].push(sibling.maritalstatus?.id);
    });
    console.log("siblingData request", request)
    try {
      if (validateForm()) {
        const respo = await addFamilyDetails(request).unwrap();
        console.log('add siblingData details->>', respo);
        if (respo?.status == true) {
          showToast(respo?.message, { type: 'normal' });
          navigate(route.params.type ? "CreationSteps" : "MainNavigator", {});
        } else {
          showToast(respo?.message, { type: 'normal' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {Array.from({ length: siblingCount }).map((_, index) => (
            <View key={index} style={{ marginTop: 20, gap: 20 }}>
              <View>
                <NameInput
                  placeholder={`Sibling ${index + 1} Name`}
                  title={`Sibling ${index + 1}`}
                  value={siblingData[index].name}
                  nameStyle
                  onChangeText={(value: string) => handleSiblingChange(index, 'name', value)}
                />
                {errors[index]?.name && <Text style={styles.errorText}>{errors[index].name}</Text>}
              </View>

              <View>
                <CustomDropdown
                  items={Sibling_Gender}
                  selectedValue={siblingData[index].gender}
                  onSelect={(value: string) => handleSiblingChange(index, 'gender', value)}
                  placeholder="Select Gender"
                />
                {errors[index]?.gender && <Text style={styles.errorText}>{errors[index].gender}</Text>}
              </View>

              <View>
                <NameInput
                  placeholder="Sibling Age"
                  value={siblingData[index].age}
                  onChangeText={(value :string) => handleSiblingChange(index, 'age', value)}
                  keyboardType="numeric"
                />
                {errors[index]?.age && <Text style={styles.errorText}>{errors[index].age}</Text>}
              </View>

              <View>
                <CustomDropdown
                  items={sibling_marital_status}
                  selectedValue={siblingData[index].maritalstatus}
                  onSelect={(value :string) => handleSiblingChange(index, 'maritalstatus', value)}
                  placeholder="Select Marital Status"
                />
                {errors[index]?.maritalstatus && (
                  <Text style={styles.errorText}>{errors[index].maritalstatus}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Button title="SAVE" mainStyle={styles.btn} onPress={Save} />
    </View>
  )
}

export default SiblingDetails
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16)
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