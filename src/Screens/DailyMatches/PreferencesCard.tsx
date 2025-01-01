import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RoseVerify from '../../assets/svg/RoseVerify.svg';
import DustySkyVerify from '../../assets/svg/DustySkyVerify.svg';

type PreferenceItemProps = {
  label: string;
  value: string;
  matched: boolean;
};

const PreferenceItem: React.FC<PreferenceItemProps> = ({ label, value, matched }) => (
  <View style={styles.preferenceItem}>
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
    {matched ? <RoseVerify /> : <DustySkyVerify />}
  </View>
);

type PreferencesCardProps = {
  data: {
    height: string;
    mother_tongue: string;
    age: string;
    religion: string;
  };
};

const PreferencesCard: React.FC<PreferencesCardProps> = ({ data }: any) => {

  const [preferenceCount, setPreferenceCount] = useState<number>(0)


  useEffect(() => {
    if (data) {
      const preferenceData = {
        is_marital_status: data.is_marital_status,
        is_diet: data.is_diet,
        is_mother_tongue: data.is_mother_tongue,
        is_religion: data.is_religion,
        is_age: data.is_age,
      };
      const countActivePreferences = () => {
        return Object.values(preferenceData).filter(value => value === 1).length;
      };
      let count = countActivePreferences();
      setPreferenceCount(count)
    }
  }, [data])
  return (
    <View style={styles.container}>
      <Text style={styles.header}>You Match {preferenceCount}/5 of her preferences</Text>

      <PreferenceItem
        label="Height"
        value={data.height}
        matched={true}
      />

      <PreferenceItem
        label="Children"
        value="Ok, if not staying together"
        matched={true}
      />

      <PreferenceItem
        label="Mother Tongue"
        value={data.mother_tongue}
        matched={true}
      />

      <PreferenceItem
        label="Age"
        value={data.age}
        matched={false}
      />

      <PreferenceItem
        label="Religion/Community"
        value={data.religion}
        matched={false}
      />
    </View>
  );
};

export default PreferencesCard;

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
    paddingVertical: 5,
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
});