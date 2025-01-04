import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import InputDropdown from '../../Component/Dropdowns/InputDropdown'
import Button from '../../Component/Buttons/Button'
import { navigate } from '../../Navigator/Utils'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../Store/auth/authSlice'
import About from '../../Component/Placeholder/About'
import { useGetProfileQuery } from '../../Store/profile/ProfileApiSlice'

const FamilyDetails = () => {
  // const profiledata = useSelector(selectProfile)
  const { data: profiledata, isLoading, refetch } = useGetProfileQuery({});
  const [fathername, setFatherName] = useState<string>('');
  const [mothername, setMotherName] = useState<string>('');
  const [siblingsno, setSiblingsNo] = useState<string>('');
  const [familydetails, setFamilyDetails] = useState("")
  const [fatherprofession, setFatherProfession] = useState<string>('');
  const [motherprofession, setMotherProfession] = useState<string>('');
  const [errors, setErrors] = useState<FamilyDetailsErrors>({});

  useEffect(() => {
    refetch();
  }, [refetch]);


  useEffect(() => {
    if (profiledata && profiledata.family_details != 0) {
      setFatherName(profiledata?.father_name)
      setMotherName(profiledata?.mother_name)
      setFatherProfession(profiledata?.father_profession)
      setMotherProfession(profiledata?.mother_profession)
      setSiblingsNo(profiledata?.siblings.toString())
      setFamilyDetails(profiledata?.about_family)
    }
  }, [profiledata])

  const validateForm = (): boolean => {
    let formErrors: FamilyDetailsErrors = {};

    if (!fathername) {
      formErrors.fathername = 'Father name is required';
    }

    if (!mothername) {
      formErrors.mothername = 'Mother name is required';
    }

    if (!siblingsno || isNaN(Number(siblingsno)) || Number(siblingsno) < 1) {
      formErrors.siblingsno = 'Please enter a valid number of siblings';
    }

    if (!fatherprofession) {
      formErrors.fatherprofession = 'Father profession is required';
    }

    if (!motherprofession) {
      formErrors.motherprofession = 'Mother profession is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const Submit = async () => {
    const request = {
      father_name: fathername,
      mother_name: mothername,
      father_profession: fatherprofession,
      mother_profession: motherprofession,
      siblings: siblingsno,
      about_family: familydetails

    }
    if (validateForm()) {
      navigate("SiblingDetails", { FamilyDetails: request })
    }
  }



  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Family Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <View>
              <NameInput
                placeholder='Enter Father Name'
                title='Father Name'
                value={fathername}
                onChangeText={setFatherName}
                nameStyle
              />
              {errors.fathername && <Text style={styles.errorText}>{errors.fathername}</Text>}
            </View>

            <View>
              <NameInput
                placeholder='Enter Mother Name'
                title='Mother Name'
                value={mothername}
                onChangeText={setMotherName}
                nameStyle
              />
              {errors.mothername && <Text style={styles.errorText}>{errors.mothername}</Text>}
            </View>
            <View>
              <InputDropdown
                placeholder='0'
                title='No. of siblings'
                value={siblingsno}
                onChangeText={setSiblingsNo}
                nameStyle
              />
              {errors.siblingsno && <Text style={styles.errorText}>{errors.siblingsno}</Text>}
            </View>
            <View>
              <NameInput
                placeholder='Father job details'
                title='Father Profession'
                value={fatherprofession}
                onChangeText={setFatherProfession}
                nameStyle
              />
              {errors.fatherprofession && <Text style={styles.errorText}>{errors.fatherprofession}</Text>}
            </View>
            <View>
              <NameInput
                placeholder='Mother job details'
                title='Mother Profession'
                value={motherprofession}
                onChangeText={setMotherProfession}
                nameStyle
              />
              {errors.motherprofession && <Text style={styles.errorText}>{errors.motherprofession}</Text>}
            </View>
            <View>
              <About placeholder='About family details'
                title='Family details'
                onChangeText={setFamilyDetails}
                value={familydetails}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Button title='SAVE' mainStyle={styles.btn} onPress={Submit} />
    </View>
  )
}

export default FamilyDetails

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