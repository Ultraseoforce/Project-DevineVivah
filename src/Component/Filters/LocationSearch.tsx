import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Color } from '../../Theme';
import { scale } from '../../Theme/ResposiveSize';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import SearchBar from '../Search/SearchCard';
import CheckBox from '../CheckBox/CheckBox';

const LocationSearch = () => {
  const cities = ["Location, City, Country", "Location, City, Country", "Location, City, Country", "Location, City, Country"];

  return (
    <View style={styles.container}>
      <Text style={[styles.LocationText, Typography.smallTitle]}>Location</Text>
      <SearchBar style={styles.search} />
      <View style={styles.checkBoxContainer}>
        {cities.map((city, index) => (
          <View key={index} style={styles.cityCheckBox}>
            <CheckBox />
            <Text style={styles.cityLabel}>{city}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.chatBg,
    borderRadius: 8,
    padding: scale(16),
  },
  LocationText: {
    fontSize: FontSize.Font14,
    color: Color.chatBg,
  },
  search: {
    backgroundColor: Color.inputBg,
    width: '100%',
    marginVertical: scale(10)
  },
  checkBoxContainer: {
    // marginVertical: 10,
  },
  cityCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(5),
  },
  cityLabel: {
    fontSize: FontSize.Font16,
    marginLeft: scale(10),
    color: Color.black,
  },
});
