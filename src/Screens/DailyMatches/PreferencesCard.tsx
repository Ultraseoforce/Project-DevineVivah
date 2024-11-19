import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoseVerify from '../../assets/svg/RoseVerify.svg';
import DustySkyVerify from '../../assets/svg/DustySkyVerify.svg';
import Restaurant from '../../assets/svg/Restaurant.svg';
import Both from '../../assets/svg/Both.svg';

const PreferenceItem = ({ label, value, matched }: { label: string; value: string; matched: boolean }) => (
  <View style={styles.preferenceItem}>
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
    {matched ? <RoseVerify /> : <DustySkyVerify/>}
  </View>
);

const CommonItem = ({ text }: { text: string }) => (
  console.log("text",text.length),
  <View style={styles.commonItem}>
    <View style={styles.commonIconContainer}>
      {text.length == 23 ? <Restaurant/> : <Both/> }
      {/* <Icon name="check" size={16} color="#FFF" /> */}
    </View>
    <Text style={styles.commonText}>{text}</Text>
  </View>
);

export default function PreferencesCard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>You Match 3/5 of her preferences</Text>
      
      <PreferenceItem 
        label="Height"
        value="5'0(152cm) to 5'11(180cm)"
        matched={true}
      />
      
      <PreferenceItem 
        label="Children"
        value="Ok, if not staying together"
        matched={true}
      />
      
      <PreferenceItem 
        label="Mother Tongue"
        value="Gujrati"
        matched={true}
      />
      
      <PreferenceItem 
        label="Age"
        value="33 to 44"
        matched={false}
      />
      
      <PreferenceItem 
        label="Religion/Community"
        value="Hindu : Gujrati"
        matched={false}
      />

      <Text style={styles.commonHeader}>Common between the both of you</Text>
      
      <CommonItem text="You both are vegeterian" />
      <CommonItem text="Your both mother tongue is Gujrati" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 16,
      gap: 10,
      marginHorizontal: 16,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 0.5,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  commonHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 24,
    marginBottom: 16,
  },
  commonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  commonIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  commonText: {
    fontSize: 16,
    color: '#333',
  },
});