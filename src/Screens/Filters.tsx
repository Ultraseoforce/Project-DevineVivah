// import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { Color } from '../Theme'
// import { moderateScale } from '../Theme/ResposiveSize'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Typography } from '../Theme/Typography';
// import CustomDropdown from '../Component/Dropdowns/Dropdown';
// import AgeRange from '../Component/Filters/AgeRange';
// import LocationSearch from '../Component/Filters/LocationSearch';
// import { navigationRef } from '../Navigator/Utils';

// interface IFilter {
//   ApplyFilter?: Function
// }
// const Filters = (Props: IFilter) => {

//   const religion = [
//     { label: 'Hindu', value: 'Hindu' },
//     { label: 'Christianity', value: 'Catholicism' },
//     { label: 'Catholicism', value: 'Catholicism' },
//   ]

//   const [religions, setReligions] = useState("")
//   const [caste, setCaste] = useState("")
//   const [education, setEducation] = useState("")
//   const [smoking, setSmoking] = useState("")
//   const [drinking, setDrinking] = useState("")


//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
//       <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />

//       <View style={styles.container}>
//         <View style={styles.header_container}>
//           <View style={{ marginTop: moderateScale(50), marginHorizontal: moderateScale(10), flexDirection: "row", alignItems: "center", gap: 10 }}>
//             <Ionicons name="close-sharp" size={30} color={Color.black} onPress={() =>  navigationRef.goBack()} />
//             <Text style={Typography.large_headings}>Filters</Text>
//             <Text onPress={() => Props.ApplyFilter ? Props.ApplyFilter() : null} style={[Typography.small, styles.apply_btn]}>Apply Filters</Text>
//           </View>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: moderateScale(10), paddingVertical: 15 }}>
//           <Text style={[Typography.title, { color: Color.chatBg }]}>Applied Filters</Text>
//           <Text style={[Typography.title, { color: Color.orange }]}>Clear All</Text>
//         </View>
//         <ScrollView style={{marginBottom: "40%"}} showsVerticalScrollIndicator={false}>
//         <View style={{ marginHorizontal: moderateScale(10), gap: 15 }}>
//           <CustomDropdown
//             placeholder='seleted Religion'
//             title='By Religion'
//             items={religion}
//             selectedValue={religions}
//             onSelect={setReligions}
//           />
//           <CustomDropdown
//             placeholder=' seleted Caste'
//             title='By Caste'
//             items={religion}
//             selectedValue={caste}
//             onSelect={setCaste}
//           />
//            <CustomDropdown
//             placeholder=' seleted Education'
//             title='By Education'
//             items={religion}
//             selectedValue={education}
//             onSelect={setEducation}
//           />
//            <CustomDropdown
//             placeholder='seleted Smoking'
//             title='Do Smoking'
//             items={religion}
//             selectedValue={smoking}
//             onSelect={setSmoking}
//           />
//            <CustomDropdown
//             placeholder='seleted Drinking'
//             title='Do Drinking'
//             items={religion}
//             selectedValue={drinking}
//             onSelect={setDrinking}
//           />
//           <AgeRange />
//           <LocationSearch />
//         </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default Filters

// const styles = StyleSheet.create({
//   container: {
//   },
//   header_container: {
//     backgroundColor: Color.white,
//     height: moderateScale(100),
//     elevation: 5,
//   },
//   apply_btn:
//   {
//     position: "absolute",
//     right: 0,
//     backgroundColor: Color.orange,
//     padding: 10,
//     color: Color.white,
//     borderRadius: 35,
//   }
// })

// import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { Color } from '../Theme'
// import { moderateScale } from '../Theme/ResposiveSize'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Typography } from '../Theme/Typography';
// import CustomDropdown from '../Component/Dropdowns/Dropdown';
// import AgeRange from '../Component/Filters/AgeRange';
// import LocationSearch from '../Component/Filters/LocationSearch';
// import { navigationRef } from '../Navigator/Utils';
// import { FontSize } from '../Theme/FontSize';

// interface IFilter {
//   ApplyFilter?: Function
// }
// const Filters = (Props: IFilter) => {

//   const religion = [
//     { label: 'Hindu', value: 'Hindu' },
//     { label: 'Christianity', value: 'Catholicism' },
//     { label: 'Catholicism', value: 'Catholicism' },
//   ]

//   const [religions, setReligions] = useState("")
//   const [caste, setCaste] = useState("")
//   const [education, setEducation] = useState("")
//   const [smoking, setSmoking] = useState("")
//   const [drinking, setDrinking] = useState("")


//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
//       <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />

//       <View style={styles.container}>
//         <View style={styles.header_container}>
//           <View style={{ marginTop: moderateScale(50), marginHorizontal: moderateScale(10), flexDirection: "row", alignItems: "center", gap: 10 }}>
//             <Ionicons name="close-sharp" size={30} color={Color.black} onPress={() => navigationRef.goBack()} />
//             <Text style={Typography.large_headings}>Filters</Text>
//             <Text onPress={() => Props.ApplyFilter ? Props.ApplyFilter() : null} style={[Typography.small, styles.apply_btn]}>Apply Filters</Text>
//           </View>
//         </View>

//         <View style={{margin:16, flexDirection:'row',justifyContent:'space-between'}}>
//           <Text style={{ backgroundColor: Color.orange, color: Color.white, fontSize: FontSize.Font16, paddingHorizontal: 15,paddingVertical:10, borderRadius:50 }}>Religion</Text>
//         </View>

//         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: moderateScale(10), paddingVertical: 15 }}>
//           <Text style={[Typography.title, { color: Color.chatBg }]}>Applied Filters</Text>
//           <Text style={[Typography.title, { color: Color.orange }]}>Clear All</Text>
//         </View>



//         <ScrollView style={{ marginBottom: "40%" }} showsVerticalScrollIndicator={false}>
//           <View style={{ marginHorizontal: moderateScale(10), gap: 15 }}>
//             <CustomDropdown
//               placeholder='seleted Religion'
//               title='By Religion'
//               items={religion}
//               selectedValue={religions}
//               onSelect={setReligions}
//             />
//             <CustomDropdown
//               placeholder=' seleted Caste'
//               title='By Caste'
//               items={religion}
//               selectedValue={caste}
//               onSelect={setCaste}
//             />
//             <CustomDropdown
//               placeholder=' seleted Education'
//               title='By Education'
//               items={religion}
//               selectedValue={education}
//               onSelect={setEducation}
//             />
//             <CustomDropdown
//               placeholder='seleted Smoking'
//               title='Do Smoking'
//               items={religion}
//               selectedValue={smoking}
//               onSelect={setSmoking}
//             />
//             <CustomDropdown
//               placeholder='seleted Drinking'
//               title='Do Drinking'
//               items={religion}
//               selectedValue={drinking}
//               onSelect={setDrinking}
//             />
//             <AgeRange />
//             <LocationSearch />
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default Filters

// const styles = StyleSheet.create({
//   container: {
//   },
//   header_container: {
//     backgroundColor: Color.white,
//     height: moderateScale(100),
//     elevation: 5,
//   },
//   apply_btn:
//   {
//     position: "absolute",
//     right: 0,
//     backgroundColor: Color.orange,
//     padding: 10,
//     color: Color.white,
//     borderRadius: 35,
//   }
// })



// import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import { Color } from '../Theme';
// import { moderateScale } from '../Theme/ResposiveSize';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Typography } from '../Theme/Typography';
// import CustomDropdown from '../Component/Dropdowns/Dropdown';
// import AgeRange from '../Component/Filters/AgeRange';
// import LocationSearch from '../Component/Filters/LocationSearch';
// import { navigationRef } from '../Navigator/Utils';
// import { FontSize } from '../Theme/FontSize';

// interface IFilter {
//   ApplyFilter?: Function;
// }

// const Filters = (Props: IFilter) => {
//   const religionOptions = [
//     { label: 'Hindu', value: 'Hindu' },
//     { label: 'Christianity', value: 'Christianity' },
//     { label: 'Catholicism', value: 'Catholicism' },
//   ];

//   const [religions, setReligions] = useState<{ label: string, value: string } | null>(null);
//   const [caste, setCaste] = useState<{ label: string, value: string } | null>(null);
//   const [education, setEducation] = useState<{ label: string, value: string } | null>(null);
//   const [smoking, setSmoking] = useState<{ label: string, value: string } | null>(null);
//   const [drinking, setDrinking] = useState<{ label: string, value: string } | null>(null);

//   // Helper function to get display text for each filter
//   const getFilterDisplay = (label: string, value: { label: string, value: string } | null) => {
//     return value ? (
//       <View style={styles.filterDisplay}>
//         <Text style={styles.filterLabel}>{label}</Text>
//         <Text style={styles.filterValue}>{value.label}</Text>
//       </View>
//     ) : null;
//   };



//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
//       <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />

//       <View style={styles.container}>
//         <View style={styles.header_container}>
//           <View style={{ marginTop: moderateScale(50), marginHorizontal: moderateScale(10), flexDirection: "row", alignItems: "center", gap: 10 }}>
//             <Ionicons name="close-sharp" size={30} color={Color.black} onPress={() => navigationRef.goBack()} />
//             <Text style={Typography.large_headings}>Filters</Text>
//             <Text onPress={() => Props.ApplyFilter ? Props.ApplyFilter() : null} style={[Typography.small, styles.apply_btn]}>Apply Filters</Text>
//           </View>
//         </View>

//         {/* Display Selected Filters */}
//         <View style={{ margin: 16, flexDirection: "row", gap: 5 }}>
//           {getFilterDisplay('', religions)}
//           {getFilterDisplay('', caste)}
//           {getFilterDisplay('', education)}
//           {getFilterDisplay('', smoking)}
//           {getFilterDisplay('', drinking)}
//         </View>

//         {/* Applied Filters Section */}
//         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: moderateScale(10), paddingVertical: 15 }}>
//           <Text style={[Typography.title, { color: Color.chatBg }]}>Applied Filters</Text>
//           <Text style={[Typography.title, { color: Color.orange }]}>Clear All</Text>
//         </View>

//         {/* Dropdown and Filters */}
//         <ScrollView style={{ marginBottom: "40%" }} showsVerticalScrollIndicator={false}>
//           <View style={{ marginHorizontal: moderateScale(10), gap: 15 }}>
//             <CustomDropdown
//               placeholder='Select Religion'
//               title='By Religion'
//               items={religionOptions}
//               selectedValue={religions}
//               onSelect={setReligions}
//             />
//             <CustomDropdown
//               placeholder='Select Caste'
//               title='By Caste'
//               items={religionOptions}
//               selectedValue={caste}
//               onSelect={setCaste}
//             />
//             <CustomDropdown
//               placeholder='Select Education'
//               title='By Education'
//               items={religionOptions}
//               selectedValue={education}
//               onSelect={setEducation}
//             />
//             <CustomDropdown
//               placeholder='Select Smoking'
//               title='Do Smoking'
//               items={religionOptions}
//               selectedValue={smoking}
//               onSelect={setSmoking}
//             />
//             <CustomDropdown
//               placeholder='Select Drinking'
//               title='Do Drinking'
//               items={religionOptions}
//               selectedValue={drinking}
//               onSelect={setDrinking}
//             />
//             <AgeRange />
//             <LocationSearch />
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Filters;

// const styles = StyleSheet.create({
//   container: {},
//   header_container: {
//     backgroundColor: Color.white,
//     height: moderateScale(100),
//     elevation: 5,
//   },
//   apply_btn: {
//     position: "absolute",
//     right: 0,
//     backgroundColor: Color.orange,
//     padding: 10,
//     color: Color.white,
//     borderRadius: 35,
//   },
//   filterDisplay: {
//     backgroundColor: Color.orange,
//     borderRadius: 50,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginBottom: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   filterLabel: {
//     color: Color.white,
//     fontSize: FontSize.Font16,
//   },
//   filterValue: {
//     color: Color.white,
//     fontSize: FontSize.Font16,
//     fontWeight: 'bold',
//   }
// });



import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../Theme';
import { moderateScale } from '../Theme/ResposiveSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Typography } from '../Theme/Typography';
import CustomDropdown from '../Component/Dropdowns/Dropdown';
import AgeRange from '../Component/Filters/AgeRange';
import LocationSearch from '../Component/Filters/LocationSearch';
import { navigationRef } from '../Navigator/Utils';
import { FontSize } from '../Theme/FontSize';
import Close from '../assets/svg/Close.svg'

interface IFilter {
  ApplyFilter?: Function;
}

const Filters = (Props: IFilter) => {
  const religionOptions = [
    { label: 'Hindu', value: 'Hindu' },
    { label: 'Christianity', value: 'Christianity' },
    { label: 'Catholicism', value: 'Catholicism' },
  ];

  const [religions, setReligions] = useState<{ label: string, value: string } | null>(null);
  const [caste, setCaste] = useState<{ label: string, value: string } | null>(null);
  const [education, setEducation] = useState<{ label: string, value: string } | null>(null);
  const [smoking, setSmoking] = useState<{ label: string, value: string } | null>(null);
  const [drinking, setDrinking] = useState<{ label: string, value: string } | null>(null);

  // Helper function to get display text for each filter
  const getFilterDisplay = (label: string, value: { label: string, value: string } | null) => {
    return value ? (
      <View style={styles.filterDisplay}>
        <Text style={styles.filterLabel}>{label}</Text>
        <Text style={styles.filterValue}>{value.label}</Text>
      </View>
    ) : null;
  };



const filterClear = () => {
  setReligions("")
  setCaste('')
  setSmoking('')
  setDrinking('')
  setEducation('')
}

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />

      <View style={styles.container}>
        <View style={styles.header_container}>
          <View style={{ marginTop: moderateScale(50), marginHorizontal: moderateScale(16), flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Close onPress={() => navigationRef.goBack()} />
            {/* <Ionicons name="close-sharp" size={30} color={Color.black} onPress={() => navigationRef.goBack()} /> */}
            <Text style={Typography.large_headings}>Filters</Text>
            <View style={styles.apply_btn}>
                <Text onPress={() => Props.ApplyFilter ? Props.ApplyFilter() : null} style={[Typography.small]}>Apply Filters</Text>
            </View>
          </View>
        </View>

        {/* Applied Filters Section */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: moderateScale(10), paddingVertical: 15 }}>
          <Text style={[Typography.title, { color: Color.chatBg }]}>Applied Filters</Text>
          <Text onPress={() => filterClear()} style={[Typography.title, { color: Color.orange }]}>Clear All</Text>
        </View>


        {/* Display Selected Filters */}
        <View style={{ marginHorizontal: religions || caste || education || smoking || drinking ? 10 : 0 }}>
          <View style={styles.filtersWrapper}>
            {getFilterDisplay('', religions)}
            {getFilterDisplay('', caste)}
            {getFilterDisplay('', education)}
            {getFilterDisplay('', smoking)}
            {getFilterDisplay('', drinking)}
          </View>
        </View>


        {/* Dropdown and Filters */}
        <ScrollView style={{ marginBottom: "40%" }} showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: moderateScale(10), gap: 15 }}>
            <CustomDropdown
              placeholder='Select Religion'
              title='By Religion'
              items={religionOptions}
              selectedValue={religions}
              onSelect={setReligions}
            />
            <CustomDropdown
              placeholder='Select Caste'
              title='By Caste'
              items={religionOptions}
              selectedValue={caste}
              onSelect={setCaste}
            />
            <CustomDropdown
              placeholder='Select Education'
              title='By Education'
              items={religionOptions}
              selectedValue={education}
              onSelect={setEducation}
            />
            <CustomDropdown
              placeholder='Select Smoking'
              title='Do Smoking'
              items={religionOptions}
              selectedValue={smoking}
              onSelect={setSmoking}
            />
            <CustomDropdown
              placeholder='Select Drinking'
              title='Do Drinking'
              items={religionOptions}
              selectedValue={drinking}
              onSelect={setDrinking}
            />
            <AgeRange />
            <LocationSearch />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
  
    marginBottom: moderateScale(50)
  },
  header_container: {
    backgroundColor: Color.white,
    height: moderateScale(100),
    elevation: 5,
  },
  apply_btn: {
    position: "absolute",
    right: 0,
    backgroundColor: Color.orange,
    padding: 10,
    borderRadius: 35,
  },
  filtersWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterDisplay: {
    backgroundColor: Color.orange,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 8,
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
  }
});
