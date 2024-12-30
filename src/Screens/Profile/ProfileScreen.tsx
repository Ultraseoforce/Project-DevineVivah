import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useIsFocused } from '@react-navigation/native';
import { useGetProfileQuery } from '../../Store/auth/authApiSlice';
import ProfileTabCard from './ProfileTab';
import { Typography } from '../../Theme/Typography';
import { Color } from '../../Theme';
import { moderateScale, moderateScaleVertical, scale } from '../../Theme/ResposiveSize';
import { FontSize } from '../../Theme/FontSize';
import { getImagePath } from '../../Component/Utils/helper';
import { navigate } from '../../Navigator/Utils';

const ProfileScreen = () => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: userProfileData, isLoading, refetch } = useGetProfileQuery(undefined, { skip: false });
  const isFocused = useIsFocused();
  const defaultImage = require('../../assets/Image/defaultImage.jpg'); // Import the default image

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);

  const TabName = [
    { id: 1, title: 'Edit Profile', icon: require('../../assets/Image/setting.png'), screen: "ProfileSettings" },
    { id: 2, title: 'My Wishlist', icon: require('../../assets/Image/wishlist.png'), screen: "MyWishlist" },
    { id: 3, title: 'My Orders', icon: require('../../assets/Image/orders.png'), screen: "MyOrders" },
    { id: 4, title: 'My Favorites', icon: require('../../assets/Image/favorites.png'), screen: "MyFavorites" },
    { id: 5, title: 'Change Password', icon: require('../../assets/Image/lock.png'), screen: "ChangePassword" },
    { id: 6, title: 'Help & Support', icon: require('../../assets/Image/help.png'), screen: "HelpAndSupport" },
    { id: 7, title: 'LogOut', icon: require('../../assets/Image/help.png'), screen: "" },
  ];

  const profiledata = [
    { id: 1, icon: require('../../assets/Image/shortlist.png'), name: '24', desc: 'Shortlisted' },
    { id: 2, icon: require('../../assets/Image/view.png'), name: '20', desc: 'Viewed' },
    { id: 3, icon: require('../../assets/Image/Plan.png'), name: '29', desc: 'Plan' },
  ];

  const images = [
    { uri: getImagePath(userProfileData?.profile_photo1 || '') },
    { uri: getImagePath(userProfileData?.profile_photo2 || '') },
    { uri: getImagePath(userProfileData?.profile_photo3 || '') },
  ].filter((image) => image.uri);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar translucent backgroundColor="transparent" />}
      {isLoading ? (
        <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />
      ) : (
        <FlatList
          data={[{ key: 'images' }, { key: 'profileDetails' }, { key: 'tabs' }]}
          renderItem={({ item }) => {
            if (item.key === 'images') {
              return (
                <>
                  <FlatList
                    data={images}
                    ref={flatListRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `image_${index}`}
                    renderItem={({ item }) => (
                      <View>
                        <Image source={item.uri ? { uri: item.uri } : defaultImage} style={styles.image} />
                        {activeIndex === 0 && (
                          <View style={styles.uploadImage}>
                            <Text style={styles.fullName}>Full Name</Text>
                            <Pressable onPress={() => navigate('UploadPictures', {})} style={styles.uploadBtn}>
                              <Feather name="upload" size={20} color={Color.white} />
                              <Text style={styles.managePhotos}>Manage photos</Text>
                            </Pressable>
                          </View>
                        )}
                      </View>
                    )}
                    onViewableItemsChanged={onViewRef.current}
                    viewabilityConfig={viewConfigRef.current}
                  />
                  <View style={styles.dotContainer}>
                    {images.map((_, index) => (
                      <View
                        key={`dot_${index}`}
                        style={[
                          styles.dot,
                          { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' },
                        ]}
                      />
                    ))}
                  </View>
                </>
              );
            }
            if (item.key === 'profileDetails') {
              return (
                <View style={styles.showDetails}>
                  {profiledata.map((item) => (
                    <View key={item.id} style={styles.itemContainer}>
                      <View style={styles.iconBackground}>
                        <Image source={item.icon} resizeMode="contain" style={styles.icon} />
                      </View>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemDesc}>{item.desc}</Text>
                    </View>
                  ))}
                </View>
              );
            }
            if (item.key === 'tabs') {
              return <ProfileTabCard Data={TabName} />;
            }
            return null;
          }}
          keyExtractor={(item) => item.key}
        />
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  loader: {
    marginTop: 20,
  },
  image: {
    height: moderateScale(340),
    width: Dimensions.get('screen').width,
    borderBottomRightRadius: moderateScaleVertical(30),
    borderBottomLeftRadius: moderateScaleVertical(30),
    alignSelf: 'center',
  },
  uploadImage: {
    position: 'absolute',
    bottom: scale(40),
    alignSelf: 'center',
  },
  fullName: {
    ...Typography.samll_bold,
    color: Color.white,
    fontSize: FontSize.Font22,
    textAlign: 'center',
  },
  uploadBtn: {
    backgroundColor: Color.orange,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
  },
  managePhotos: {
    ...Typography.small,
    color: Color.white,
    fontSize: FontSize.Font18,
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
  showDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: moderateScale(25)
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    gap: 5,
  },
  iconBackground: {
    backgroundColor: Color.inputBg,
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  icon: {
    width: scale(27),
    height: scale(27),
  },
  itemName: {
    ...Typography.samll_bold,
    fontSize: 20,
    color: Color.orange,
  },
  itemDesc: {
    ...Typography.smallText,
    fontSize: 16,
    color: Color.chatBg,
  },
});