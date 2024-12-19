// import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import { Color } from '../Theme'
// import HeaderCard from '../Component/Header/HeaderCard'
// import { moderateScale, scale } from '../Theme/ResposiveSize'
// import { Typography } from '../Theme/Typography'
// import { FontSize } from '../Theme/FontSize'
// import YourMatches from '../Component/Cards/YourMatches'
// import CategoryCard from '../Component/Cards/CategoryCard'
// import FamousAstrologers from '../Component/Cards/FamousAstrologers'
// import SuggestedMatches from '../Component/Cards/SuggestedMatches'
// import Shortlisted from './TopTab/Shortlisted'
// import LinearGradient from 'react-native-linear-gradient'
// import WhiteButton from '../Component/Buttons/WhiteButton'
// import { useGetProfileQuery } from '../Store/auth/authApiSlice'
// import { setAuthProfile } from '../Store/auth/authSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import { navigate } from '../Navigator/Utils'
// import { useIsFocused } from '@react-navigation/native'

// const HomeScreen = () => {
//   const isFocused = useIsFocused();
//   const dispatch = useDispatch()
//   const scrollViewRef = useRef(null);
//   const [selected, setSelected] = useState(0);
//   const { data: getProfile, } = useGetProfileQuery();
//   const addphoto = require("../assets/Image/addphoto.png")

//   useEffect(() => {
//     const NavigationAndDispatch = async () => {
//       try {
//         switch (true) {
//           case getProfile.personal_details === 0:
//             await navigate('PersonalDetails');
//             break;
//           case getProfile.education_details === 0:
//             await navigate('CreationSteps');
//             break;
//           case getProfile.profession_details === 0:
//             await navigate('Profession');
//             break;
//           case getProfile.family_details === 0:
//             await navigate('FamilyDetails');
//             break;
//           case getProfile.preferences_details === 0:
//             await navigate('Preferences');
//             break;
//           case getProfile.location_details === 0:
//             await navigate('Location');
//             break;
//           case getProfile.verification_details === 0:
//             await navigate('Verification');
//             break;
//           default:
//             console.log('All details are completed');
//             break;
//         }

//         await dispatch(
//           setAuthProfile({
//             profile: getProfile,
//           })
//         );
//       } catch (error) {
//         console.error('Error during navigation or dispatch:', error);
//       }
//     };

//     console.log("getProfile", getProfile)

//     NavigationAndDispatch();
//   }, [getProfile, navigate, dispatch]);

//   const handlePress = (index: any) => {
//     setSelected(index);
//     scrollViewRef.current?.scrollTo({ x: index * 100, animated: true });
//   };


//   return (
//       <>    
//       {isFocused && <StatusBar backgroundColor="#FF5A60" barStyle="light-content" />}
      
//       <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>

//       <HeaderCard  />
//       <ScrollView showsHorizontalScrollIndicator={false}>
//         <View style={{ padding: 15 }}>
//           <ScrollView
//             ref={scrollViewRef}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.scrollViewContent}
//           >
//             <View style={styles.container}>
//               {['Brodata', 'Not viewed', 'Shortlisted', 'Viewed', 'Not Interested'].map((item, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.textContainer,
//                     selected === index && styles.selectedTextContainer
//                   ]}
//                   onPress={() => handlePress(index)}
//                 >
//                   <Text style={[Typography.small, { fontSize: selected === index ? FontSize.Font15 : FontSize.Font13, color: selected === index ? Color.white : Color.black }]}>{item}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </ScrollView>
//           {selected === 0 ? (
//             <>
//               <YourMatches />
//               <CategoryCard />

//               <View style={{ marginTop: moderateScale(10), }}>
//                 <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={Color.gradient} style={styles.linearGradient}>
//                   <View style={{ padding: 15, flexDirection: "row", gap: moderateScale(20) }}>
//                     <Image source={addphoto} resizeMode='contain' style={{ height: scale(160), width: scale(120), alignItems: "center", }} />
//                     <View style={{ justifyContent: "center", }}>
//                       <Text style={[Typography.samll_bold, { fontSize: FontSize.Font24, lineHeight: 30, color: Color.white }]}>
//                         Add Photos
//                       </Text>
//                       <Text style={[Typography.small, { maxWidth: moderateScale(200), color: Color.white }]}>Add more photos to get more reach!!!</Text>
//                       <WhiteButton title="Add Photos" mainStyle={{ marginTop: scale(15) }} />
//                     </View>
//                   </View>
//                 </LinearGradient>
//               </View>

//               <FamousAstrologers />
//               <SuggestedMatches />
//             </>
//           ) : null}

//           {selected === 2 ? (
//             <Shortlisted />
//           ) : null}




//         </View>
//       </ScrollView>
//     </SafeAreaView>
//     </>

//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: "#F6F6F6",
//     height: moderateScale(48),
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   scrollViewContent: {
//     alignItems: 'center',
//   },
//   textContainer: {
//     paddingHorizontal: moderateScale(7),
//     height: moderateScale(48),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 6,
//   },
//   selectedTextContainer: {
//     backgroundColor: '#FF5A60',
//     height: moderateScale(48),
//     width: moderateScale(81),
//     borderRadius: 6,
//   },
//   linearGradient: {
//     height: scale(194),
//     borderRadius: 14,
//     // marginHorizontal: 10
//   }

// })


import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { Color } from '../Theme';
import HeaderCard from '../Component/Header/HeaderCard';
import { moderateScale, scale } from '../Theme/ResposiveSize';
import { Typography } from '../Theme/Typography';
import { FontSize } from '../Theme/FontSize';
import YourMatches from '../Component/Cards/YourMatches';
import CategoryCard from '../Component/Cards/CategoryCard';
import FamousAstrologers from '../Component/Cards/FamousAstrologers';
import SuggestedMatches from '../Component/Cards/SuggestedMatches';
import Shortlisted from './TopTab/Shortlisted';
import LinearGradient from 'react-native-linear-gradient';
import WhiteButton from '../Component/Buttons/WhiteButton';
import { useGetProfileQuery } from '../Store/auth/authApiSlice';
import { setAuthProfile } from '../Store/auth/authSlice';
import { useDispatch } from 'react-redux';
import { navigate } from '../Navigator/Utils';
import { useIsFocused } from '@react-navigation/native';

const TABS = ['Brodata', 'Not viewed', 'Shortlisted', 'Viewed', 'Not Interested'];

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
 const { data: getProfile, isLoading, refetch } = useGetProfileQuery();
  const addPhoto = require('../assets/Image/addphoto.png');


useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);

  // useEffect(() => {
  //   const NavigationAndDispatch = async () => {
  //     try {
  //       switch (true) {
  //         case getProfile.personal_details === 0:
  //           await navigate('PersonalDetails');
  //           break;
  //         case getProfile.education_details === 0:
  //           await navigate('CreationSteps');
  //           break;
  //         case getProfile.profession_details === 0:
  //           await navigate('Profession');
  //           break;
  //         case getProfile.family_details === 0:
  //           await navigate('FamilyDetails');
  //           break;
  //         case getProfile.preferences_details === 0:
  //           await navigate('Preferences');
  //           break;
  //         case getProfile.location_details === 0:
  //           await navigate('Location');
  //           break;
  //         case getProfile.verification_details === 0:
  //           await navigate('Verification');
  //           break;
  //         default:
  //           console.log('All details are completed');
  //           break;
  //       }

  //       await dispatch(setAuthProfile({ profile: getProfile }));
  //     } catch (error) {
  //       console.error('Error during navigation or dispatch:', error);
  //     }
  //   };

  //   NavigationAndDispatch();
  // }, [getProfile, navigate, dispatch]);

  const renderTabContent = () => {
    switch (selected) {
      case 0:
        return (
          <View style={{padding: 16}}>
            <YourMatches />
            <CategoryCard />
            <View style={{ marginTop: moderateScale(15) }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={Color.gradient}
                style={styles.linearGradient}
              >
                <View style={styles.linearGradientContent}>
                  <Image source={addPhoto} resizeMode="contain" style={styles.addPhotoImage} />
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.addPhotoText}>Add Photos</Text>
                    <Text style={styles.addPhotoSubtitle}>
                      Add more photos to get more reach!!!
                    </Text>
                    <WhiteButton title="Add Photos" mainStyle={{ marginTop: scale(15) }} />
                  </View>
                </View>
              </LinearGradient>
            </View>
            <FamousAstrologers />
            <SuggestedMatches />
          </View>
        );
      case 2:
        return <Shortlisted />;
      default:
        return null;
    }
  };

  return (
    <>
      {isFocused && <StatusBar backgroundColor="#FF5A60" barStyle="light-content" />}
      <SafeAreaView style={styles.safeArea}>
        <HeaderCard />
        <FlatList
          ListHeaderComponent={
            <View>
              {/* Tab Selector */}
              <View style={styles.container}>
                {TABS.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.textContainer,
                      selected === index && styles.selectedTextContainer,
                    ]}
                    onPress={() => setSelected(index)}
                  >
                    <Text
                      style={[
                        Typography.small,
                        {
                          fontSize: selected === index ? FontSize.Font15 : FontSize.Font13,
                          color: selected === index ? Color.white : Color.black,
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          }
          data={[]}
          renderItem={null}
          ListFooterComponent={renderTabContent}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    height: moderateScale(48),
    borderRadius: 6,
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: moderateScale(7),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  selectedTextContainer: {
    backgroundColor: '#FF5A60',
    height: moderateScale(48),
    width: moderateScale(81),
    borderRadius: 6,
  },
  linearGradient: {
    height: scale(194),
    borderRadius: 14,
  },
  linearGradientContent: {
    padding: 15,
    flexDirection: 'row',
    gap: moderateScale(20),
  },
  addPhotoImage: {
    height: scale(160),
    width: scale(120),
  },
  addPhotoText: {
    ...Typography.samll_bold,
    fontSize: FontSize.Font24,
    lineHeight: 30,
    color: Color.white,
  },
  addPhotoSubtitle: {
    ...Typography.small,
    maxWidth: moderateScale(200),
    color: Color.white,
  },
});
