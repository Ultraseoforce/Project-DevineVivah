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
import { useUpdateFamilyDetailsMutation } from '../../Store/profile/ProfileApiSlice'
import Toast from '../../Component/Modal/ToastMessage'

const SiblingDetails = () => {
  const route = useRoute();
  const { showToast } = Toast();
  const  Familydata =  route?.params
  const [siblingCount, setSiblingCount] = useState(Familydata?.FamilyDetails?.siblings || 1); 
  const [siblingData, setSiblingData] = useState(
    Array.from({ length: siblingCount }, () => ({
      name: '',
      gender: '',
      age: '',
      maritalstatus: '',
    }))
  );
    

  const [addFamilyDetails, { isLoading }] = useUpdateFamilyDetailsMutation()

  const [errors, setErrors] = useState<SiblingDetailsErrors[]>([]);

  console.log("FamilyDetails", Familydata?.FamilyDetails?.siblings)
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



  console.log("siblingData", siblingData)

  const Save = async () => {
    const request = {
      father_name: "",
      mother_name: "",
      father_profession: "",
      mother_profession: "",
      siblings: siblingData.map(sibling => ({
        name: sibling.name,
        gender: sibling.gender?.id,
        age: sibling.age,
        maritalstatus: sibling?.maritalstatus?.id 
      }))
    }
    console.log("siblingData request", request)
    try {
      if (validateForm()) {
        const respo = await addFamilyDetails(request).unwrap();
        console.log('add FamilyDetails details->>', respo);
        if (respo?.status == true) {
          showToast(respo?.message, { type: 'normal' });
          navigate("CreationSteps", { key: "SiblingDetails" })
        } else {
          showToast(respo?.message, { type: 'normal' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }



  return (
    // <View style={{ flex: 1, backgroundColor: Color.white }}>
    //   <BackHeader />
    //   <ScrollView showsVerticalScrollIndicator={false}>
    //     <View style={styles.container}>
    //       <Text style={Typography.main_heading}>Sibling Details</Text>
    //       <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
    //         <View>
    //           <NameInput
    //             placeholder='Sibling Name'
    //             title='Sibling 1'
    //             value={name}
    //             onChangeText={setName}
    //             nameStyle />
    //           {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
    //         </View>
    //         <View>
    //           <CustomDropdown
    //             items={Sibling_Gender}
    //             selectedValue={gender}
    //             onSelect={setGender}
    //             placeholder='Select Gender'
    //           />
    //           {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
    //         </View>
    //         <View>
    //           <NameInput
    //             placeholder='Sibling Age'
    //             value={age}
    //             onChangeText={setAge}
    //             keyboardType="numeric"
    //           />
    //           {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
    //         </View>

    //         <View>
    //           <CustomDropdown
    //             items={sibling_marital_status}
    //             selectedValue={maritalstatus}
    //             onSelect={setMaritalStatus}
    //             placeholder='Select Martial Status'
    //           />
    //           {errors.maritalstatus && <Text style={styles.errorText}>{errors.maritalstatus}</Text>}
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    //     <Button title='SAVE' mainStyle={styles.btn} />
    // </View>

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