import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import BackHeader from '../../Component/Header/BackHeader';
import CustomDropdown from '../../Component/Dropdowns/Dropdown';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { useUpdateEducationDetailsMutation } from '../../Store/profile/ProfileApiSlice';
import Toast from '../../Component/Modal/ToastMessage';
import { navigate } from '../../Navigator/Utils';
import { selectProfile } from '../../Store/auth/authSlice';
import { useSelector } from 'react-redux';
import { getObject } from '../../Component/Utils/helper';


const EducationDetails = () => {
  const [studying, setStudying] = useState<string>('');
  const [educationlevel, setEducationLevel] = useState<string>('');
  const [institutename, setInstituteName] = useState<string>('');
  const [errors, setErrors] = useState<EducationDetailsErrors>({});
  const [addEducation, { isLoading }] = useUpdateEducationDetailsMutation()
  const profiledata = useSelector(selectProfile)

  const { showToast } = Toast();

  const Studying = [
    { name: 'Yes', id: '1' },
    { name: 'No', id: '2' },
  ]


  const educationLevelData = [
    { id: 1, name: '8th' },
    { id: 2, name: '10th' },
    { id: 3, name: '12th' },
    { id: 4, name: 'UG' },
    { id: 5, name: 'PG' },
    { id: 6, name: 'PhD' },
  ]

  useEffect(() => {
    if (profiledata && profiledata?.education_details != 0) {
      let Study = getObject(Studying, profiledata.currently_studying.toString());
      setStudying(Study);
      setEducationLevel(profiledata.education_level)
      setInstituteName(profiledata.institute)
    }
  }, [profiledata])





  const validateForm = (): boolean => {
    let formErrors: EducationDetailsErrors = {};

    if (!studying) {
      formErrors.studying = 'Please specify if you are studying or not';
    }

    if (!educationlevel) {
      formErrors.educationlevel = 'Education level is required';
    }

    if (!institutename) {
      formErrors.institutename = 'Institute name is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const Save = async () => {
    const request = {
      currently_studying: studying.id,
      education_level: educationlevel.id,
      institute: institutename,
    }
    try {
      if (validateForm()) {
        const respo = await addEducation(request).unwrap();
        console.log('add Education details->>', respo);
        if (respo?.status == true) {
          showToast(respo?.message, { type: 'normal' });
          navigate("CreationSteps", { key: "EducationDetails" })
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
          <Text style={Typography.main_heading}>Education Details</Text>
          <View style={styles.content}>
            <View>
              <CustomDropdown
                placeholder='Currently Studying'
                title='Currently Studying?'
                items={Studying}
                onSelect={setStudying}
                selectedValue={studying}
              />
              {errors.studying && <Text style={styles.errorText}>{errors.studying}</Text>}
            </View>
            <View>
              <CustomDropdown
                title='Education Level'
                placeholder='Selecte Education Level'
                items={educationLevelData}
                selectedValue={educationlevel}
                onSelect={setEducationLevel}
              />
              {errors.educationlevel && <Text style={styles.errorText}>{errors.educationlevel}</Text>}
            </View>

            <View>
              <NameInput
                placeholder='Enter your Institute name'
                title='Institute'
                value={institutename}
                onChangeText={setInstituteName}
                nameStyle
              />
              {errors.institutename && <Text style={styles.errorText}>{errors.institutename}</Text>}
            </View>
          </View>
        </View>
      </ScrollView>
      <Button title='SAVE' onPress={Save} mainStyle={styles.btn} />
    </View>
  );
};

export default EducationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(17),
    justifyContent: 'space-between',
  },
  content: {
    marginTop: moderateScale(20),
    gap: moderateScale(20)
  },
  btn: {
    marginHorizontal: moderateScale(17),
    marginBottom: moderateScale(50),
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
