// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { Color } from '../../Theme';
// import { scale } from '../../Theme/ResposiveSize';
// import { Typography } from '../../Theme/Typography';
// import { FontSize } from '../../Theme/FontSize';
// import SearchBar from '../Search/SearchCard';
// import CheckBox from '../CheckBox/CheckBox';

// const LocationSearch = () => {
//   const cities = ["Location, City, Country", "Location, City, Country", "Location, City, Country", "Location, City, Country"];

//   return (
//     <View style={styles.container}>
//       <Text style={[styles.LocationText, Typography.smallText]}>Location</Text>
//       <SearchBar style={styles.search} />
//       <View style={styles.checkBoxContainer}>
//         {cities.map((city, index) => (
//           <View key={index} style={styles.cityCheckBox}>
//             <CheckBox />
//             <Text style={styles.cityLabel}>{city}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default LocationSearch;

// const styles = StyleSheet.create({
//   container: {
//     borderWidth: 1,
//     borderColor: Color.chatBg,
//     borderRadius: 8,
//     padding: scale(16),
//   },
//   LocationText: {
//     fontSize: FontSize.Font14,
//     color: Color.chatBg,
//   },
//   search: {
//     backgroundColor: Color.inputBg,
//     width: '100%',
//     marginVertical: scale(10)
//   },
//   checkBoxContainer: {
//     // marginVertical: 10,
//   },
//   cityCheckBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: scale(5),
//   },
//   cityLabel: {
//     fontSize: FontSize.Font16,
//     marginLeft: scale(10),
//     color: Color.black,
//   },
// });




import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomDropdown from '../Dropdowns/Dropdown'
import { useGetCityQuery, useGetCountryQuery, useGetStateQuery } from '../../Store/dropdown/dropdownApiSlice';
import { Toast } from 'react-native-toast-notifications';
import { useUpdateLocationDetailsMutation } from '../../Store/profile/ProfileApiSlice';;

const LocationSearch = () => {
  // const { showToast } = Toast();
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const { data: CountryData } = useGetCountryQuery();
  const { data: stateData, isLoading } = useGetStateQuery();
  const { data: Citydata, error } = useGetCityQuery(state?.id || 4852);
  const [addLocation, { }] = useUpdateLocationDetailsMutation()
  const [errors, setErrors] = useState<LocationDetailsErrors>({});

  console.log('CountryData ===>', CountryData)
  
  return (
    <View style={styles.Container}>
      <View>
        <CustomDropdown
          items={stateData}
          placeholder='Select Country'
          title='Country'
          selectedValue={country}
          onSelect={setCountry}
        />
        {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
      </View>

      <View>
        <CustomDropdown
          items={stateData}
          placeholder='Select state'
          title='State'
          selectedValue={state}
          onSelect={setState}
        />
        {/* {errors.state && <Text style={styles.errorText}>{errors.state}</Text>} */}
      </View>

      <View>
        <CustomDropdown
          items={Citydata}
          placeholder='Select City'
          title='City'
          selectedValue={city}
          onSelect={setCity}
        />
        {/* {errors.state && <Text style={styles.errorText}>{errors.state}</Text>} */}
      </View>
    </View>
  )
}

export default LocationSearch

const styles = StyleSheet.create({
  Container: {
    marginBottom: 20
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
})