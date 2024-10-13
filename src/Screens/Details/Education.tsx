import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import BackHeader from '../../Component/Header/BackHeader';
import CustomDropdown from '../../Component/Dropdowns/Dropdown';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';


const EducationDetails = () => {
  const [studying, setStudying] = useState("");
  const [educationlevel, setEducationLevel] = useState("");
  const [institutename, setInstituteName] = useState("");

  const Studying = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '2' },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <View style={styles.container}>
        <Text style={Typography.main_heading}>Education Details</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <CustomDropdown
            placeholder='Currently Studying'
            title='Currently Studying?'
            items={Studying}
            onSelect={setStudying}
            selectedValue={studying}
          />
          {/* <CustomDropdown
            placeholder='University'
            title='Education Level'
            items={Studying}
            onSelect={setStudying}
            selectedValue={studying}
          /> */}
          <NameInput
            placeholder='Enter your Education Level'
            title='Education Level'
            value={educationlevel}
            onChangeText={setEducationLevel}
            nameStyle
          />
          <NameInput
            placeholder='Enter your Institute name'
            title='Institute'
            value={institutename}
            onChangeText={setInstituteName}
            nameStyle
          />
        </View>
        </ScrollView>
        <Button title='SAVE' mainStyle={styles.btn} />
      </View>
    </View>
  );
};

export default EducationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'space-between', 
  },
  content: {
    flexGrow: 1,
    marginTop: moderateScale(20),
    gap: moderateScale(20),
  },
  btn: {
    marginBottom: moderateScale(10), 
  },
});
