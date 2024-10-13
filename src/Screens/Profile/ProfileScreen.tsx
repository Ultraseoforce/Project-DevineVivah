// import { View, Text, SafeAreaView, StatusBar, FlatList, Image, StyleSheet, ScrollView, Dimensions } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { Color } from '../../Theme'
// import { moderateScale, scale } from '../../Theme/ResposiveSize';
// import { Typography } from '../../Theme/Typography';
// import { FontSize } from '../../Theme/FontSize';
// import Feather from 'react-native-vector-icons/Feather';
// import ProfileTabCard from './ProfileTab';

// const ProfileScreen = () => {
//   // const [activeIndex, setActiveIndex] = useState(0);
//   // const flatListRef = useRef(null);

//   const images = [
//     require('../../assets/Image/man.jpg'),
//     require('../../assets/Image/man.jpg'),
//     require('../../assets/Image/man.jpg'),
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
//   ]

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
//   ]



//   // const onViewRef = useRef(({ viewableItems }: any) => {
//   //   if (viewableItems.length > 0) {
//   //     setActiveIndex(viewableItems[0].index);
//   //   }
//   // });
//   // const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });


//   return (
//     <View style={{ flex: 1, backgroundColor: Color.white }}>
//       {/* <StatusBar backgroundColor={"white"} barStyle={'dark-content'} /> */}
//       <StatusBar translucent backgroundColor="transparent" />
//       {/* <ScrollView>
//           <FlatList
//             data={images}
//             ref={flatListRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <View>
//                 <Image source={item} style={styles.image} />

//                 {activeIndex == 0 ?
//                   <View style={styles.uplode_image}>
//                     <Text style={[Typography.samll_bold, { color: Color.white, fontSize: FontSize.Font22, textAlign: "center" }]}>Full Name</Text>
//                     <View style={styles.uplode_btn}>
//                       <Feather name="upload" size={20} color={Color.white} />
//                       <Text style={[Typography.small, { color: Color.white, fontSize: FontSize.Font18 }]}>Manage photos</Text>
//                     </View>
//                   </View> : null}

//               </View>
//             )}
//             onViewableItemsChanged={onViewRef.current}
//             viewabilityConfig={viewConfigRef.current}
//           />
//           <View style={styles.dotContainer}>
//             {images.map((_, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.dot,
//                   { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' },
//                 ]}
//               />
//             ))}
//           </View>
//           <View style={styles.showdetalis}>
//             {profiledata.map((item) => (
//               <View key={item.id} style={styles.itemContainer}>
//                 <View style={{ backgroundColor: Color.inputBg, height: scale(50), width: scale(50), borderRadius: scale(50), alignItems: "center", justifyContent: "center", elevation: 1 }}>
//                   <Image source={item.icon} resizeMode='contain' style={styles.icon} />
//                 </View>
//                 <Text style={[Typography.samll_bold, { fontSize: 20, color: Color.orange }]}>{item.name}</Text>
//                 <Text style={[Typography.smallText, { fontSize: 16, color: Color.chatBg }]}>{item.desc}</Text>
//               </View>
//             ))}
//           </View>
//           <ProfileTabCard Data={TabName} />
      
//       </ScrollView> */}
//     </View>
//   )
// }

// export default ProfileScreen

// const styles = StyleSheet.create({

//   image: {
//     height: moderateScale(340),
//     // width: moderateScale(390),
//     width: Dimensions.get("screen").width,
//     borderBottomRightRadius: 25,
//     borderBottomLeftRadius: 25,
//     alignSelf: "center"
//   },
//   uplode_image: {
//     position: "absolute",
//     bottom: scale(40),
//     alignSelf: "center"
//   },
//   uplode_btn: {
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
//   showdetalis: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
//   itemContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//     gap: 5
//   },
//   icon: {
//     width: scale(27),
//     height: scale(27),
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 3,
//   },
//   desc: {
//     fontSize: 14,
//     color: '#666',
//   },


// })



import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Color } from '../../Theme';
import ProfileTabCard from './ProfileTab';
import { Typography } from '../../Theme/Typography';
import { moderateScale, scale } from '../../Theme/ResposiveSize';
import Feather from 'react-native-vector-icons/Feather';
import { FontSize } from '../../Theme/FontSize';


const ProfileScreen = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const images = [
    require('../../assets/Image/man.jpg'),
    require('../../assets/Image/man.jpg'),
    require('../../assets/Image/man.jpg'),
  ];

  const profiledata = [
    {
      id: 1,
      icon: require("../../assets/Image/shortlist.png"),
      name: "24",
      desc: "Shortlisted"
    },
    {
      id: 2,
      icon: require("../../assets/Image/view.png"),
      name: "20",
      desc: "Viewed"
    },
    {
      id: 3,
      icon: require("../../assets/Image/Plan.png"),
      name: "29",
      desc: "Plan"
    }
  ]



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
  ]


  
  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });


  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <ScrollView>
          <FlatList
            data={images}
            ref={flatListRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <Image source={item} style={styles.image} />

                {activeIndex == 0 ?
                  <View style={styles.uplode_image}>
                    <Text style={[Typography.samll_bold, { color: Color.white, fontSize: FontSize.Font22, textAlign: "center" }]}>Full Name</Text>
                    <View style={styles.uplode_btn}>
                      <Feather name="upload" size={20} color={Color.white} />
                      <Text style={[Typography.small, { color: Color.white, fontSize: FontSize.Font18 }]}>Manage photos</Text>
                    </View>
                  </View> : null}

              </View>
            )}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
          />
          <View style={styles.dotContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' },
                ]}
              />
            ))}
          </View>
          <View style={styles.showdetalis}>
            {profiledata.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <View style={{ backgroundColor: Color.inputBg, height: scale(50), width: scale(50), borderRadius: scale(50), alignItems: "center", justifyContent: "center", elevation: 1 }}>
                  <Image source={item.icon} resizeMode='contain' style={styles.icon} />
                </View>
                <Text style={[Typography.samll_bold, { fontSize: 20, color: Color.orange }]}>{item.name}</Text>
                <Text style={[Typography.smallText, { fontSize: 16, color: Color.chatBg }]}>{item.desc}</Text>
              </View>
            ))}
          </View>
          <ProfileTabCard Data={TabName} />
      
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    image: {
    height: moderateScale(340),
    // width: moderateScale(390),
    width: Dimensions.get("screen").width,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignSelf: "center"
  },
  uplode_image: {
    position: "absolute",
    bottom: scale(40),
    alignSelf: "center"
  },
  uplode_btn: {
    backgroundColor: Color.orange,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5

  },

  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: -25,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  showdetalis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    gap: 5
  },
  icon: {
    width: scale(27),
    height: scale(27),
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  desc: {
    fontSize: 14,
    color: '#666',
  },
})