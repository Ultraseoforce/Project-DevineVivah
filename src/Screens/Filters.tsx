import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../Theme';
import { moderateScale } from '../Theme/ResposiveSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Typography } from '../Theme/Typography';
import CustomDropdown from '../Component/Dropdowns/Dropdown';
import AgeRange from '../Component/Filters/AgeRange';
import { navigationRef } from '../Navigator/Utils';
import { FontSize } from '../Theme/FontSize';
import Close from '../assets/svg/Close.svg';
import NameInput from '../Component/Placeholder/NameInput';
import { useGetCityQuery, useGetCountryQuery, useGetStateQuery } from '../Store/dropdown/dropdownApiSlice';

interface IFilter {
  ApplyFilter?: Function;
}

const Filters = (Props: IFilter) => {
  const religionOptions = [
    { id: 1, name: 'Hinduism' },
    { id: 2, name: 'Islam' },
    { id: 3, name: 'Christianity' },
    { id: 4, name: 'Sikhism' },
    { id: 5, name: 'Buddhism' },
    { id: 6, name: 'Jainism' },
    { id: 7, name: 'Zoroastrianism (Parsis)' },
    { id: 8, name: 'Judaism' },
    { id: 9, name: "Baha'i Faith" },
    { id: 10, name: 'Tribal and Indigenous Beliefs' },
  ];

  const educationLevelData = [
    { id: 1, name: '8th' },
    { id: 2, name: '10th' },
    { id: 3, name: '12th' },
    { id: 4, name: 'UG' },
    { id: 5, name: 'PG' },
    { id: 6, name: 'PhD' },
  ];

  const SmokingData = [
    { name: 'Yes', id: '0' },
    { name: 'No', id: '1' },
  ];

  const [filters, setFilters] = useState({
    religion: null,
    caste: '',
    education: null,
    smoking: null,
    drinking: null,
    country: null,
    state: null,
    city: null,
  });

  const { data: countriesData, isLoading: isLoadingCountries } = useGetCountryQuery({});
  const { data: statesData, isLoading: isLoadingStates } = useGetStateQuery(filters.country?.id);
  const { data: citiesData, isLoading: isLoadingCities } = useGetCityQuery(filters.state?.id);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

console.log("countriesData", countriesData)

  const filterClear = () => {
    setFilters({
      religion: null,
      caste: '',
      education: null,
      smoking: null,
      drinking: null,
      country: null,
      state: null,
      city: null,
    });
  };

  const getFilterDisplay = (value: any) => {
    return value ? (
      <View style={styles.filterDisplay}>
        <Text style={styles.filterValue}>{value.name || value}</Text>
      </View>
    ) : null;
  };

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <Close onPress={() => navigationRef.goBack()} />
            <Text style={Typography.large_headings}>Filters</Text>
            <View style={styles.applyBtn}>
              <Text onPress={() => Props.ApplyFilter ? Props.ApplyFilter() : null} style={Typography.small}>Apply Filters</Text>
            </View>
          </View>
        </View>

        <View style={styles.appliedFiltersContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={[Typography.title, { color: Color.chatBg }]}>Applied Filters</Text>
            <Text onPress={filterClear} style={[Typography.title, { color: Color.orange }]}>Clear All</Text>

          </View>
          <View style={styles.filtersWrapper}>
            {getFilterDisplay(filters.religion)}
            {getFilterDisplay(filters.caste)}
            {getFilterDisplay(filters.education)}
            {getFilterDisplay(filters.smoking)}
            {getFilterDisplay(filters.drinking)}
            {getFilterDisplay(filters.country)}
            {getFilterDisplay(filters.state)}
            {getFilterDisplay(filters.city)}
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.filtersContainer}>
            <CustomDropdown
              placeholder='Select Religion'
              title='By Religion'
              items={religionOptions}
              selectedValue={filters.religion}
              onSelect={(value) => handleFilterChange('religion', value)}
            />
            <NameInput
              placeholder='Your Caste'
              title='By Caste'
              value={filters.caste}
              nameStyle
              onChangeText={(value) => handleFilterChange('caste', value)}
            />
            <CustomDropdown
              placeholder='Select Education'
              title='By Education'
              items={educationLevelData}
              selectedValue={filters.education}
              onSelect={(value) => handleFilterChange('education', value)}
            />
            <CustomDropdown
              placeholder='Select Smoking'
              title='Do Smoking'
              items={SmokingData}
              selectedValue={filters.smoking}
              onSelect={(value) => handleFilterChange('smoking', value)}
            />
            <CustomDropdown
              placeholder='Select Drinking'
              title='Do Drinking'
              items={SmokingData}
              selectedValue={filters.drinking}
              onSelect={(value) => handleFilterChange('drinking', value)}
            />
            <AgeRange />
            <CustomDropdown
              items={countriesData}
              placeholder='Select Country'
              title='Country'
              selectedValue={filters.country}
              onSelect={(value) => handleFilterChange('country', value)}
              isLoading={isLoadingCountries}
            />
            <CustomDropdown
              items={statesData}
              placeholder='Select State'
              title='State'
              selectedValue={filters.state}
              onSelect={(value) => handleFilterChange('state', value)}
              isLoading={isLoadingStates}
            />
            <CustomDropdown
              items={citiesData}
              placeholder='Select City'
              title='City'
              selectedValue={filters.city}
              onSelect={(value) => handleFilterChange('city', value)}
              isLoading={isLoadingCities}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Color.white,
    height: moderateScale(100),
    elevation: 5,
  },
  headerContent: {
    marginTop: moderateScale(50),
    marginHorizontal: moderateScale(16),
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  applyBtn: {
    position: "absolute",
    right: 0,
    backgroundColor: Color.orange,
    padding: 10,
    borderRadius: 35,
  },
  filtersContainer: {
    gap: 15,
    padding: 16

  },
  appliedFiltersContainer: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: 15,
    

  },
  filtersWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingVertical: 10
  },
  filterDisplay: {
    backgroundColor: Color.orange,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
  },
  filterLabel: {
    color: Color.white,
    fontSize: FontSize.Font16,
  },
  filterValue: {
    color: Color.white,
    fontSize: FontSize.Font16,
    fontWeight: 'bold',
  },
});