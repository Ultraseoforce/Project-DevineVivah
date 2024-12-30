import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Style } from './CommonStyles';
import Chat from "../../assets/svg/Chat.svg";
import Fire from "../../assets/svg/Fire.svg";
import { Color } from '../../Theme';
import { useGetNearMeProfilesQuery } from '../../Store/profile/DailyMatchApiSlice';
import NoData from '../../Component/Cards/NoData';

const { width } = Dimensions.get('window');

const NearMe = () => {
  const { data: nearMeProfiles, isLoading, error } = useGetNearMeProfilesQuery({});

  if (isLoading) {
    return <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />;
  }



  const renderItem = ({ item }) => (
    <View style={Style.container}>
      {/* <Image
        source={{ uri: item.profileImage }}
        style={Style.image}
      /> */}
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/29326581/pexels-photo-29326581/free-photo-of-young-woman-in-uniform-holding-camera-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
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
          {item.is_favorite === 1 ? <TouchableOpacity style={[Style.actionButton, Style.likeButton]}>
            <Icon name="heart" size={30} color={Color.orange} />
          </TouchableOpacity>
            :
            <TouchableOpacity style={[Style.actionButton, { backgroundColor: "#FFFFFF", opacity: 0.5 }]}>
              <Icon name="heart" size={30} color={Color.white} />
            </TouchableOpacity>}
        </View>
      </View>
    </View>
  );

  return (
    <View>
     {nearMeProfiles.length === 0 ? <NoData /> : null}

      <FlatList
        data={nearMeProfiles}
        renderItem={renderItem}
        keyExtractor={(item) => item.mId}
      />

    </View>
  );
};

export default NearMe;

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});