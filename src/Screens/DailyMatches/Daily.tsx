import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import PreferencesCard from './PreferencesCard';
import AboutCard from './AboutCard';
import BasicDetailsCard from './BasicDetailsCard';
import ContactDetailsCard from './ContactDetailsCard';
import FamilyDetailsCard from './FamilyDetailsCard';
import CareerEducationCard from './CareerEducationCard';
import MyMatches from './MyMatches';
import NearMe from './NearMe';
import { Color } from '../../Theme';
import Chat from "../../assets/svg/Chat.svg";
import Fire from "../../assets/svg/Fire.svg";
import Kalasha from '../../assets/svg/kalasha.svg';
import WhiteBell from '../../assets/svg/WhiteBell.svg';
import { Style } from './CommonStyles';
import { useIsFocused } from '@react-navigation/native';
import { useGetDailyMatchesProfilesQuery, useGetDailyMatchProfileViewMutation } from '../../Store/profile/DailyMatchApiSlice';

const { width } = Dimensions.get('window');

export default function Daily() {
  const isFocused = useIsFocused();
  const [activeTab, setActiveTab] = useState('daily');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const scrollViewRef = useRef(null);
  const { data: dailyMatchesProfiles, isLoading, error } = useGetDailyMatchesProfilesQuery({});
  const [getProfile, { data: profile, isLoading: profileLoading }] = useGetDailyMatchProfileViewMutation();

  const tabs = [
    { id: 'daily', label: 'Daily', count: 19, icon: 'fire' },
    { id: 'matches', label: 'My Matches', count: 190, icon: 'heart' },
    { id: 'near', label: 'Near Me', icon: 'map-marker' },
  ];




  useEffect(() => {
    const tabIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: tabIndex * 100, // Adjust scroll position based on tab index
        animated: true,
      });
    }
  }, [activeTab]);


  const handleProfilePress = async (mId) => {
    setSelectedProfile(mId);
    await getProfile(mId);
  };

  const renderProfileItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProfilePress(item.mId)}>
      <View style={Style.container}>
        <Image
          source={item.profile_photo1 ? { uri: item.profile_photo1 } : require('../../assets/Image/noprofile.jpeg')}
          style={Style.image}
        />
        <View style={Style.profileOverlay}>
          <View style={Style.profileInfo}>
            <View style={Style.nameRow}>
              <Text style={Style.nameText}>{item.member_name}</Text>
              <Text style={Style.ageText}>, {item.age}</Text>
              <Icon name="check-decagram" size={20} color="#FF69B4" />
            </View>
            <View style={Style.detailsRow}>
              <View style={Style.distanceContainer}>
                <Text style={Style.distanceText}>{item.divinevivah_profile_number}</Text>
              </View>
              <View style={Style.membershipContainer}>
                <Text style={Style.membershipText}>
                  {item.on_app_since}
                </Text>
              </View>
              <Fire />
            </View>
          </View>
          <View style={Style.actionButtons}>
            <TouchableOpacity style={[Style.actionButton, Style.chatButton]}>
              <Chat />
            </TouchableOpacity>
            {item.is_favorite === 1 ? (
              <TouchableOpacity style={[Style.actionButton, Style.likeButton]}>
                <Icon name="heart" size={30} color={Color.orange} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={[Style.actionButton, { backgroundColor: "#FFFFFF", opacity: 0.5 }]}>
                <Icon name="heart" size={30} color={Color.white} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ backgroundColor: Color.white, elevation: 1 }}>
        {isFocused && <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/29352975/pexels-photo-29352975/free-photo-of-sophisticated-gentleman-in-elegant-suit-indoors.jpeg?auto=compress&cs=tinysrgb&w=600' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Kalasha />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <WhiteBell />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.tabcontainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tab,
                  { backgroundColor: activeTab === tab.id ? '#FF5A60' : '#FFFFFF' }
                ]}
                onPress={() => setActiveTab(tab.id)}
              >
                <IconFA
                  name={tab.icon}
                  size={20}
                  color={activeTab === tab.id ? '#FFFFFF' : '#FF5A60'}
                />
                <Text
                  style={[
                    styles.text,
                    { color: activeTab === tab.id ? '#FFFFFF' : '#000000' }
                  ]}
                >
                  {tab.label}
                  {tab.count && `(${tab.count})`}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {activeTab === "daily" && (
          <>
            {isLoading ? (
              <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />
            ) : error ? (
              <Text style={styles.errorText}>Failed to load profiles. Please try again.</Text>
            ) : (
              <FlatList
                data={dailyMatchesProfiles}
                renderItem={renderProfileItem}
                keyExtractor={(item) => item.mId}
              />
            )}
            {selectedProfile && profile && (
              <>
                <PreferencesCard data={profile} />
                <AboutCard data={profile} />
                <BasicDetailsCard data={profile} />
                <ContactDetailsCard  data={profile}/>
                <FamilyDetailsCard data={profile} />
                <CareerEducationCard data={profile} />
              </>
            )}
            {profileLoading && <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />}
          </>
        )}


        {activeTab === "matches" && <MyMatches />}
        {activeTab === "near" && <NearMe />}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: "13%",
    marginVertical: 10
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  tabcontainer: {
    padding: 10,
    width: '100%',
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 5
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});