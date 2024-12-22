// import { Dimensions, FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import { Color } from '../../Theme';
// import ProfileTabCard from './ProfileTab';
// import { Typography } from '../../Theme/Typography';
// import { moderateScale, moderateScaleVertical, scale } from '../../Theme/ResposiveSize';
// import Feather from 'react-native-vector-icons/Feather';
// import { FontSize } from '../../Theme/FontSize';
// import { useGetProfileQuery } from '../../Store/auth/authApiSlice';
// import { IMAGE_BASE } from '../../env';
// import { getImagePath } from '../../Component/Utils/helper';
// import { navigate } from '../../Navigator/Utils';
// import { useIsFocused } from '@react-navigation/native';


// const ProfileScreen = () => {
//   const flatListRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { data: userProfileData, isLoading } = useGetProfileQuery(); 
//   const isFocused = useIsFocused();
//   console.log("userProfileData", userProfileData)

//   const TabName = [
//     {
//       id: 1,
//       title: 'Edit Profile',
//       icon: require('../../assets/Image/setting.png'),
//       screen: "ProfileSettings"
//     },
//     {
//       id: 2,
//       title: 'My Wishlist',
//       icon: require('../../assets/Image/wishlist.png'),
//       screen: "MyWishlist"
//     },
//     {
//       id: 3,
//       title: 'My Orders',
//       icon: require('../../assets/Image/orders.png'),
//       screen: "MyOrders"
//     },
//     {
//       id: 4,
//       title: 'My Favorites',
//       icon: require('../../assets/Image/favorites.png'),
//       screen: "MyFavorites",
//     },
//     {
//       id: 5,
//       title: 'Change Password',
//       icon: require('../../assets/Image/lock.png'),
//       screen: "ChangePassword"
//     },
//     {
//       id: 6,
//       title: 'Help & Support',
//       icon: require('../../assets/Image/help.png'),
//       screen: "HelpAndSupport"
//     },
//     {
//       id: 6,
//       title: 'LogOut',
//       icon: require('../../assets/Image/help.png'),
//       screen: ""
//     },
//   ];

//   const profiledata = [
//     {
//       id: 1,
//       icon: require("../../assets/Image/shortlist.png"),
//       name: "24",
//       desc: "Shortlisted"
//     },
//     {
//       id: 2,
//       icon: require("../../assets/Image/view.png"),
//       name: "20",
//       desc: "Viewed"
//     },
//     {
//       id: 3,
//       icon: require("../../assets/Image/Plan.png"),
//       name: "29",
//       desc: "Plan"
//     }
//   ];


//   // Define images based on availability
//   const images = [
//     { uri: getImagePath(userProfileData?.profile_photo1 || "") },
//     { uri: getImagePath(userProfileData?.profile_photo2 || "") },
//     { uri: getImagePath(userProfileData?.profile_photo3 || "") },
//   ].filter(image => image.uri); // Filter out empty URIs to handle fewer images

//   const onViewRef = useRef(({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       setActiveIndex(viewableItems[0].index);
//     }
//   });

//   console.log("images", userProfileData)
//   const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

//   return (
//     <View style={{ flex: 1, backgroundColor: Color.white }}>
//       {isFocused && <StatusBar translucent backgroundColor="transparent" />}

//       <ScrollView>
//         {/* Show Loader while fetching images */}
//         {isLoading ? (
//           <ActivityIndicator size="large" color={Color.orange} style={{ marginTop: 20 }} />
//         ) : (
//           <>
//             <FlatList
//               data={images}
//               ref={flatListRef}
//               horizontal
//               pagingEnabled
//               showsHorizontalScrollIndicator={false}
//               keyExtractor={(item, index) => index.toString()}
//               renderItem={({ item }) => (
//                 <View>
//                   <Image source={{ uri: item.uri }} style={styles.image} />
//                   {activeIndex == 0 && (
//                     <View style={styles.upload_image}>
//                       <Text style={[Typography.samll_bold, { color: Color.white, fontSize: FontSize.Font22, textAlign: "center" }]}>Full Name</Text>
//                       <Pressable onPress={() => navigate("UploadPictures", {})} style={styles.upload_btn}>
//                         <Feather name="upload" size={20} color={Color.white} />
//                         <Text style={[Typography.small, { color: Color.white, fontSize: FontSize.Font18 }]}>Manage photos</Text>
//                       </Pressable>
//                     </View>
//                   )}
//                 </View>
//               )}
//               onViewableItemsChanged={onViewRef.current}
//               viewabilityConfig={viewConfigRef.current}
//             />
//             {/* Render dots based on number of images */}
//             <View style={styles.dotContainer}>
//               {images.map((_, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.dot,
//                     { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' },
//                   ]}
//                 />
//               ))}
//             </View>
//           </>
//         )}

//         <View style={styles.showDetails}>
//           {profiledata.map((item) => (
//             <View key={item.id} style={styles.itemContainer}>
//               <View style={styles.iconBackground}>
//                 <Image source={item.icon} resizeMode='contain' style={styles.icon} />
//               </View>
//               <Text style={[Typography.samll_bold, { fontSize: 20, color: Color.orange }]}>{item.name}</Text>
//               <Text style={[Typography.smallText, { fontSize: 16, color: Color.chatBg }]}>{item.desc}</Text>
//             </View>
//           ))}
//         </View>
//         <ProfileTabCard Data={TabName} />
//       </ScrollView>
//     </View>
//   );
// }

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   image: {
//     height: moderateScale(340),
//     width: Dimensions.get("screen").width,
//     borderBottomRightRadius: moderateScaleVertical(30),
//     borderBottomLeftRadius: moderateScaleVertical(30),
//     alignSelf: "center"
//   },
//   upload_image: {
//     position: "absolute",
//     bottom: scale(40),
//     alignSelf: "center"
//   },
//   upload_btn: {
//     backgroundColor: Color.orange,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 50,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 5,
//     marginTop: 5
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     top: -25,
//   },
//   dot: {
//     height: 10,
//     width: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   showDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
//   itemContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//     gap: 5,
//   },
//   iconBackground: {
//     backgroundColor: Color.inputBg,
//     height: scale(50),
//     width: scale(50),
//     borderRadius: scale(50),
//     alignItems: "center",
//     justifyContent: "center",
//     elevation: 1,
//   },
//   icon: {
//     width: scale(27),
//     height: scale(27),
//   },
// });
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
  const { data: userProfileData, isLoading, refetch } = useGetProfileQuery();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);
  const TabName = [
    {
      id: 1,
      title: 'Edit Profile',
      icon: require('../../assets/Image/setting.png'),
      screen: "ProfileSettings"
    },
    {
      id: 2,
      title: 'My Wishlist',
      icon: require('../../assets/Image/wishlist.png'),
      screen: "MyWishlist"
    },
    {
      id: 3,
      title: 'My Orders',
      icon: require('../../assets/Image/orders.png'),
      screen: "MyOrders"
    },
    {
      id: 4,
      title: 'My Favorites',
      icon: require('../../assets/Image/favorites.png'),
      screen: "MyFavorites",
    },
    {
      id: 5,
      title: 'Change Password',
      icon: require('../../assets/Image/lock.png'),
      screen: "ChangePassword"
    },
    {
      id: 6,
      title: 'Help & Support',
      icon: require('../../assets/Image/help.png'),
      screen: "HelpAndSupport"
    },
    {
      id: 7,
      title: 'LogOut',
      icon: require('../../assets/Image/help.png'),
      screen: ""
    },
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
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      {isFocused && <StatusBar translucent backgroundColor="transparent" />}
      {isLoading ? (
        <ActivityIndicator size="large" color={Color.orange} style={{ marginTop: 20 }} />
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
                        <Image source={{ uri: item.uri }} style={styles.image} />
                        {activeIndex === 0 && (
                          <View style={styles.upload_image}>
                            <Text
                              style={[
                                Typography.samll_bold,
                                { color: Color.white, fontSize: FontSize.Font22, textAlign: 'center' },
                              ]}
                            >
                              Full Name
                            </Text>
                            <Pressable
                              onPress={() => navigate('UploadPictures', {})}
                              style={styles.upload_btn}
                            >
                              <Feather name="upload" size={20} color={Color.white} />
                              <Text style={[Typography.small, { color: Color.white, fontSize: FontSize.Font18 }]}>
                                Manage photos
                              </Text>
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
                      <Text style={[Typography.samll_bold, { fontSize: 20, color: Color.orange }]}>
                        {item.name}
                      </Text>
                      <Text style={[Typography.smallText, { fontSize: 16, color: Color.chatBg }]}>
                        {item.desc}
                      </Text>
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
  image: {
    height: moderateScale(340),
    width: Dimensions.get('screen').width,
    borderBottomRightRadius: moderateScaleVertical(30),
    borderBottomLeftRadius: moderateScaleVertical(30),
    alignSelf: 'center',
  },
  upload_image: {
    position: 'absolute',
    bottom: scale(40),
    alignSelf: 'center',
  },
  upload_btn: {
    backgroundColor: Color.orange,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
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
    paddingTop:30,
    paddingHorizontal:30
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
});
