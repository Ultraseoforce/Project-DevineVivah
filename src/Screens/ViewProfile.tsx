import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Color } from '../Theme';
import { moderateScale, scale } from '../Theme/ResposiveSize';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { navigationRef } from '../Navigator/Utils';
import { Typography } from '../Theme/Typography';
import { FontSize } from '../Theme/FontSize';
import RequestButton from '../Component/Buttons/RequestButton';
import PersonalDetailTrack from '../Component/Cards/PersonalDetailTrack';
import { useRoute } from '@react-navigation/native';
import { useGetPeopleDetelisQuery } from '../Store/MyFavorite/MyFavoriteApiSlice';
import { getImagePath } from '../Component/Utils/helper';
import { useRejectChatRequestMutation, useSendChatRequestMutation, useShortlistProfileMutation } from '../Store/profile/ProfileApiSlice';
import Toast from '../Component/Modal/ToastMessage';



interface ProfileDetails {
  profile_photo1?: string;
  profile_photo2?: string;
  profile_photo3?: string;
  age?: string;
  height?: string;
  weight?: string;
 
}

const ViewProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const route = useRoute()
  const { mId } = route.params as { mId: string };
  const { showToast } = Toast();
  const { data: ProfileDetelis } = useGetPeopleDetelisQuery<ProfileDetails>(mId);
  const [sendChatRequest, { isLoading: sendChatRequestLoder }] = useSendChatRequestMutation();
  const [rejectChatRequest, { isLoading: rejectChatRequestLoder }] = useRejectChatRequestMutation();
  const [shortlistProfile, { isLoading: shortlistProfileLoder }] = useShortlistProfileMutation();




  const toggleExpand = () => setIsExpanded(!isExpanded);
  const Profileimage = [
    { id: 1, image: ProfileDetelis?.profile_photo1 },
    { id: 2, image: ProfileDetelis?.profile_photo2 },
    { id: 3, image: ProfileDetelis?.profile_photo3 },
  ];

  const data = [
    { id: 1, title: ProfileDetelis?.age, desc: 'Age', image: require('../assets/Image/age.png') },
    { id: 2, title: ProfileDetelis?.height, desc: 'Height', image: require('../assets/Image/hight.png') },
    { id: 3, title: ProfileDetelis?.weight, desc: 'Weight', image: require('../assets/Image/kg.png') },
    { id: 4, title: ProfileDetelis?.weight, desc: 'Location', image: require('../assets/Image/location.png') },
    { id: 5, title: ProfileDetelis?.siblings, desc: 'Siblings', image: require('../assets/Image/siblings.png') },
    { id: 6, title: ProfileDetelis?.smoke == 0 ? "No" : "Yes", desc: 'Smoking', image: require('../assets/Image/smoking.png') },
    { id: 7, title: ProfileDetelis?.drink == 0 ? "No" : "Yes", desc: 'Drinking', image: require('../assets/Image/drinking.png') },
    { id: 8, title: ProfileDetelis?.weight, desc: 'Profession', image: require('../assets/Image/smoking.png') },
  ];


  const handleSendChatRequest = async () => {
    try {
      const response = await sendChatRequest(mId).unwrap();
      showToast((response as { message: string }).message, { type: 'normal' });
    } catch (error) {
      console.error('Failed to send chat request:', error);
    }
  };


  const handleRejectChatRequest = async () => {
    try {
      const response = await rejectChatRequest({ receiver_member_id: mId }).unwrap();
      showToast((response as { message: string }).message, { type: 'normal' });
    } catch (error) {
      console.error('Failed to reject chat request:', error);
    }
  };


  const handleShortlistProfile = async () => {
    try {
      const response = await shortlistProfile(mId).unwrap();
      showToast((response as { message: string }).message, { type: 'normal' });
    } catch (error) {
      console.error('Failed to shortlist profile:', error);
    }
  };

  const renderHeader = () => (
    <View>
      <FlatList
        data={Profileimage}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: getImagePath(item.image) || '' }} style={styles.image} />
        )}
        onScroll={({ nativeEvent }) => {
          const index = Math.round(nativeEvent.contentOffset.x / Dimensions.get('screen').width);
          setActiveIndex(index);
        }}
      />
      <View style={styles.dotContainer}>
        {Profileimage.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' },
            ]}
          />
        ))}
      </View>
      <View style={styles.headerActions}>
        <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
          <Feather name="chevron-left" size={35} color={Color.black} />
        </Pressable>
        <Pressable style={styles.heart}>
          <AntDesign name="heart" size={25} color={Color.orange} />
        </Pressable>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.nameWrapper}>
          <Text style={[Typography.large_headings, { fontSize: FontSize.Font31 }]}>Full Name</Text>
          <Image source={require('../assets/Image/smallTik.png')} style={styles.tikIcon} />
        </View>
        <RequestButton
          title="Request"
          backgroundColor={Color.chatBg}
          onPress={() => handleSendChatRequest()}
          isloading={sendChatRequestLoder}
        />
        <View style={styles.actionButtons}>
          <RequestButton
            title="Reject"
            backgroundColor="#E01820"
            onPress={() => handleRejectChatRequest()}
            isloading={rejectChatRequestLoder}
          />
          <RequestButton 
            title="Shortlist"
            backgroundColor="#208B28"
            onPress={() => handleShortlistProfile()}
            isloading={shortlistProfileLoder}
          />
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={[Typography.samll_bold, { marginHorizontal: moderateScale(10) }]}>Bio:</Text>
      <Text style={[Typography.title, { color: Color.chatBg, marginTop: 5, marginHorizontal: moderateScale(10), }]}>
        {isExpanded
          ? ProfileDetelis?.about_you
          : ProfileDetelis?.about_you}
        <Text onPress={toggleExpand} style={[Typography.small, { color: Color.orange }]}>
          {isExpanded ? ' See less...' : ' See more...'}
        </Text>
      </Text>
      <PersonalDetailTrack heding="Personal Details" PersonalDetailData={ProfileDetelis} />
    </View>
  );

  const renderItem = ({ item }: any) => (
    <View style={styles.itemWrapper}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      </View>
      <Text style={[Typography.large_headings, { color: Color.orange }]}>{item.title}</Text>
      <Text style={[Typography.title, { color: Color.chatBg }]}>{item.desc}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <FlatList
        data={data}
        numColumns={4}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  listContent: {
    paddingBottom: moderateScale(20),
  },
  image: {
    height: moderateScale(360),
    width: Dimensions.get('screen').width,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -25,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  headerActions: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: scale(27),
    width: '100%',
    paddingHorizontal: scale(15),
  },
  back: {
    backgroundColor: Color.boxBg,
    height: scale(40),
    width: scale(40),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    backgroundColor: Color.boxBg,
    height: scale(40),
    width: scale(40),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.orange,
  },
  infoSection: {
    gap: 15,
    marginTop: scale(45),
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'center',
  },
  tikIcon: {
    height: 28,
    width: 28,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    marginHorizontal: moderateScale(10),
    marginTop: 10
  },
  itemWrapper: {
    flex: 1,
    alignItems: 'center',
    marginBottom: moderateScale(10),
    marginTop: 10
  },
  itemContainer: {
    backgroundColor: 'white',
    width: scale(54),
    height: scale(54),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(50),
    elevation: 1,
  },
  itemImage: {
    width: 24,
    height: 24,
  },
});
