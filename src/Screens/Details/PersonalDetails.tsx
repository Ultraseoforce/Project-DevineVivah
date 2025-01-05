import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Color } from '../../Theme';
import BackHeader from '../../Component/Header/BackHeader';
import { Typography } from '../../Theme/Typography';
import { moderateScale } from '../../Theme/ResposiveSize';
import NameInput from '../../Component/Placeholder/NameInput';
import CustomDropdown from '../../Component/Dropdowns/Dropdown';
import InputDropdown from '../../Component/Dropdowns/InputDropdown';
import Button from '../../Component/Buttons/Button';
import { useGetProfileQuery, useUpdatePersonalDetailsMutation } from '../../Store/profile/ProfileApiSlice';
import Toast from '../../Component/Modal/ToastMessage';
import { navigate } from '../../Navigator/Utils';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../Store/auth/authSlice';
import { getObject, getObjectByName } from '../../Component/Utils/helper';

interface PersonalDetailsErrors {
  email?: string;
  dob?: string;
  religion?: string;
  caste?: string;
  mothertongue?: string;
  maritalstatus?: string;
  height?: string;
  weight?: string;
  gender?: string;
  dietname?: string;
  childrenLive?: string;
  annualIncome?: string;
  createdBy?: string;
}

interface Dropdown {
  name: string;
  id: number;
}

const PersonalDetails = () => {
  const [email, setEmail] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState<string>('');
  const [mothertongue, setMotherTongue] = useState("");
  const [maritalstatus, setMaritalStatus] = useState("");
  const [dietname, setDietName] = useState<Dropdown | null>(null);
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState<Dropdown | null>(null);
  const [errors, setErrors] = useState<PersonalDetailsErrors>({});
  const [childrenCount, setChildrenCount] = useState('');
  const [childrenLive, setChildrenLives] = useState<Dropdown | null>(null);
  const [annualIncome, setAnnualIncome] = useState<Dropdown | null>(null);
  const [createdBy, setCreatedBy] = useState<Dropdown | null>(null);

  const { showToast } = Toast();
  const [addPersonalDetails, { }] = useUpdatePersonalDetailsMutation();
  interface ProfileData {
    personal_details: number;
    marital_status: string;
    member_gender: string;
    diet: string;
    member_email: string;
    dob: string;
    religion: number;
    caste: string;
    mother_tongue: number;
    height: number;
    weight: number;
  }

  const { data: profiledata, refetch } = useGetProfileQuery<ProfileData>({});

  useEffect(() => {
    refetch();
  }, [refetch]);



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

  const religionData = [
    { name: 'Hinduism', id: 1 },
    { name: 'Islam', id: 2 },
    { name: 'Christianity', id: 3, },
    { name: 'Sikhism', id: 4 },
    { name: 'Buddhism', id: 5, },
    { name: 'Jainism', id: 6 },
    { name: 'Zoroastrianism (Parsis)', id: 7 },
    { name: 'Judaism', id: 8 },
    { name: "Baha'i Faith", id: 9 },
    { name: 'Tribal and Indigenous Beliefs', id: 10 },
  ];

  const motherTongueData = [
    { id: 1, name: 'Assamese' },
    { id: 2, name: 'Bengali' },
    { id: 3, name: 'Bodo' },
    { id: 4, name: 'Dogri' },
    { id: 5, name: 'English' },
    { id: 6, name: 'Gujarati' },
    { id: 7, name: 'Hindi' },
    { id: 8, name: 'Kannada' },
    { id: 9, name: 'Kashmiri' },
    { id: 10, name: 'Konkani' },
    { id: 11, name: 'Maithili' },
    { id: 12, name: 'Malayalam' },
    { id: 13, name: 'Manipuri' },
    { id: 14, name: 'Marathi' },
    { id: 15, name: 'Nepali' },
    { id: 16, name: 'Odia' },
    { id: 17, name: 'Punjabi' },
    { id: 18, name: 'Sanskrit' },
    { id: 19, name: 'Santali' },
    { id: 20, name: 'Sindhi' },
    { id: 21, name: 'Tamil' },
    { id: 22, name: 'Telugu' },
    { id: 23, name: 'Urdu' },
  ];

  const profileCreatedByData = [
    { id: 1, name: 'Self' },
    { id: 2, name: 'Parents' },
    { id: 3, name: 'Guardians' },
    { id: 4, name: 'Brother' },
    { id: 5, name: 'Sister' },
  ];

  const childrenLiveData = [
    { id: 1, name: 'Ok if staying together' },
    { id: 2, name: 'Ok if not staying together' },
    { id: 3, name: 'Ok if not have children' },
  ];

  const annualIncomeData = [
    { id: 1, name: 'Below 10 Lakh' },
    { id: 2, name: '10 to 20 Lakh' },
    { id: 3, name: '20 to 50 Lakh' },
    { id: 4, name: '50 Lakh to 1 Crore' },
    { id: 5, name: 'More than 1 Crore' },
  ];


  useEffect(() => {
    if (profiledata && profiledata.personal_details != 0) {
      let Marital = getObject(marital_status, profiledata?.marital_status.toString());
      let gender = getObject(Gender, profiledata?.member_gender.toString());
      let diet = getObject(dietItem, profiledata?.diet.toString());
      const religion = getObjectByName(religionData, profiledata?.religion);
      const motherTongue = getObjectByName(motherTongueData, profiledata?.mother_tongue);
      const childrenLive = getObject(childrenLiveData, profiledata?.children_live);
      const annualincome = getObject(annualIncomeData, profiledata?.annual_income);
      const creactedBy = getObject(profileCreatedByData, profiledata?.profile_created_by);
      setCreatedBy(creactedBy)
      setAnnualIncome(annualincome)
      setChildrenLives(childrenLive)
      setReligion(religion)
      setMaritalStatus(Marital);
      setGender(gender);
      setEmail(profiledata?.member_email);
      setDob(profiledata?.dob);
      setCaste(profiledata.caste);
      setMotherTongue(motherTongue);
      setHeight(profiledata?.height.toString());
      setWeight(profiledata?.weight.toString());
      setDietName(diet);
      setChildrenCount(profiledata?.children_count.toString());
    }
  }, [profiledata]);


  const validateForm = (): boolean => {
    let formErrors: PersonalDetailsErrors = {};

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
      formErrors.dietname = 'Diet name is required';
    }

    if (!childrenLive) {
      formErrors.childrenLive = 'Children live status is required';
    }

    if (!annualIncome) {
      formErrors.annualIncome = 'Annual income is required';
    }

    if (!createdBy) {
      formErrors.createdBy = 'Profile created by is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const save = async () => {
    const request = {
      email: email,
      gender: gender?.id,
      dob: dob,
      religion: religion?.id,
      caste: caste,
      mother_tongue: mothertongue?.id,
      height: height,
      weight: weight,
      diet: dietname?.id,
      marital_status: maritalstatus?.id,
      children_count: childrenCount,
      children_live: childrenLive?.id,
      annual_income: annualIncome?.id,
      profile_created_by: createdBy?.id,
    };

    try {
      if (validateForm()) {
        const respo = await addPersonalDetails(request).unwrap();
        if (respo?.status == true) {
          showToast(respo?.message, { type: 'normal' });
          navigate("CreationSteps", { key: "PersonalDetails" });
        } else {
          showToast(respo?.message, { type: 'normal' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Personal Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
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
              <CustomDropdown
                items={religionData}
                selectedValue={religion}
                onSelect={setReligion}
                placeholder='Religion'
                title='Religion'
              />
              {errors.religion && <Text style={styles.errorText}>{errors.religion}</Text>}
            </View>

            <View>
              <NameInput
                placeholder='Your Caste'
                title='Caste'
                value={caste}
                nameStyle
                onChangeText={setCaste}
              />
              {errors.caste && <Text style={styles.errorText}>{errors.caste}</Text>}
            </View>

            <View>
              <NameInput
                placeholder='Children Count'
                title='Children Count'
                value={childrenCount}
                nameStyle
                onChangeText={setChildrenCount}
              />
            </View>

            <View>
              <CustomDropdown
                items={motherTongueData}
                selectedValue={mothertongue}
                onSelect={setMotherTongue}
                placeholder='Mother Tongue'
                title='Mother Tongue'
              />
              {errors.mothertongue && <Text style={styles.errorText}>{errors.mothertongue}</Text>}
            </View>

            <View>
              <CustomDropdown
                items={marital_status}
                selectedValue={maritalstatus}
                onSelect={setMaritalStatus}
                placeholder='Marital Status'
                title='Marital Status'
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
              <CustomDropdown
                items={childrenLiveData}
                selectedValue={childrenLive}
                onSelect={setChildrenLives}
                placeholder="Select Children Live's Where?"
                title="Children Live's Where"
              />
              {errors.childrenLive && <Text style={styles.errorText}>{errors.childrenLive}</Text>}
            </View>

            <View>
              <CustomDropdown
                items={annualIncomeData}
                selectedValue={annualIncome}
                onSelect={setAnnualIncome}
                placeholder="Select Annual Income"
                title="Annual Income"
              />
              {errors.annualIncome && <Text style={styles.errorText}>{errors.annualIncome}</Text>}
            </View>

            <View>
              <CustomDropdown
                items={profileCreatedByData}
                selectedValue={createdBy}
                onSelect={setCreatedBy}
                placeholder="Select Profile Created By"
                title="Profile Created By"
              />
              {errors.createdBy && <Text style={styles.errorText}>{errors.createdBy}</Text>}
            </View>

            <View>
              <InputDropdown
                placeholder='0'
                title='Your Height (Feet)'
                nameStyle
                value={height}
                onChangeText={setHeight}
              />
              {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}
            </View>

            <View>
              <InputDropdown
                placeholder='0'
                title='Your Weight (Kg)'
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
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  container: {
    padding: 17,
  },
  btn: {
    margin: moderateScale(10),
    marginVertical: moderateScale(25),
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});