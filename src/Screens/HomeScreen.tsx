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
import LinearGradient from 'react-native-linear-gradient';
import WhiteButton from '../Component/Buttons/WhiteButton';
import { useGetProfileQuery } from '../Store/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { navigate } from '../Navigator/Utils';
import { useIsFocused } from '@react-navigation/native';
import AllProfile from './TopTab/AllProfile';
import { useGetAllProfilesMutation } from '../Store/profile/ProfileApiSlice';
import Notviewed from './TopTab/Notviewed';

const TABS = ['Brodata', "All", 'Not viewed', 'Shortlisted', 'Viewed', 'Not Interested'];

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const { data: getProfile, refetch } = useGetProfileQuery(undefined, {
    skip: false,
  }) as { data: YourProfileType };
  const [getAllProfiles, { data: AllProfiles, error, isLoading }] = useGetAllProfilesMutation();

  const addPhoto = require('../assets/Image/addphoto.png');

  // useEffect(() => {
  //   const NavigationAndDispatch = async () => {
  //     try {
  //       switch (true) {
  //         case getProfile.personal_details === 0:
  //           await navigate('PersonalDetails', {});
  //           break;
  //         case getProfile.education_details === 0:
  //           await navigate('CreationSteps', {});
  //           break;
  //         case getProfile.profession_details === 0:
  //           await navigate('Profession', {});
  //           break;
  //         case getProfile.family_details === 0:
  //           await navigate('FamilyDetails', {});
  //           break;
  //         case getProfile.preferences_details === 0:
  //           await navigate('Preferences', {});
  //           break;
  //         case getProfile.location_details === 0:
  //           await navigate('Location', {});
  //           break;
  //         case getProfile.verification_details === 0:
  //           await navigate('Verification', {});
  //           break;
  //         default:
  //           console.log('All details are completed');
  //           break;
  //       }

  //     } catch (error) {
  //       console.error('Error during navigation or dispatch:', error);
  //     }
  //   };

  //   NavigationAndDispatch();
  // }, [getProfile, navigate, dispatch]);

  const [formData] = useState({
    age: "",
    religion: "",
    caste: "",
    drink: "",
    smoke: "",
    skill: "",
    status: 1,
    country_id: "",
    city_id: ""
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await getAllProfiles([formData]).unwrap();
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchProfiles();
  }, [getAllProfiles, formData]);


  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);

 




  const renderTabContent = () => {
    switch (selected) {
      case 0:
        return (
          <View style={{ padding: 16 }}>
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
                    <WhiteButton title="Add Photos" mainStyle={{ marginTop: scale(15) }} onPress={() => navigate("UploadPictures", {type: "MainNavigator"})} />
                  </View>
                </View>
              </LinearGradient>
            </View>
            <FamousAstrologers />
            <SuggestedMatches />
          </View>
        );
      case 1:
        return <AllProfile profilesData={AllProfiles} />;
      case 2:
        return <Notviewed profilesData={AllProfiles} />;
      case 3:
        return <AllProfile profilesData={AllProfiles} />;
      case 4:
        return <AllProfile profilesData={AllProfiles} />;
      case 5:
        return <AllProfile profilesData={AllProfiles} />;
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
