// import { Dimensions, FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { Color } from '../Theme';
// import { moderateScale, scale } from '../Theme/ResposiveSize';
// import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// import { navigationRef } from '../Navigator/Utils';
// import { Typography } from '../Theme/Typography';
// import { FontSize } from '../Theme/FontSize';
// import RequestButton from '../Component/Buttons/RequestButton';
// import PersonalDetailTrack from '../Component/Cards/PersonalDetailTrack';


// const data = [
//   {
//     id: 1,
//     title: "24",
//     desc: "Age",
//     image: require("../assets/Image/age.png")
//   },
//   {
//     id: 2,
//     title: "5’11 inch",
//     desc: "Height",
//     image: require("../assets/Image/hight.png")
//   },
//   {
//     id: 3,
//     title: "60 kg",
//     desc: "Weight",
//     image: require("../assets/Image/kg.png")
//   },
//   {
//     id: 4,
//     title: "Delhi",
//     desc: "Location",
//     image: require("../assets/Image/location.png")
//   },
//   {
//     id: 5,
//     title: "2",
//     desc: "Siblings",
//     image: require("../assets/Image/siblings.png")
//   },
//   {
//     id: 6,
//     title: "No",
//     desc: "Smoking",
//     image: require("../assets/Image/smoking.png")
//   },
//   {
//     id: 7,
//     title: "No",
//     desc: "Smoking",
//     image: require("../assets/Image/smoking.png")
//   },
//   {
//     id: 8,
//     title: "No",
//     desc: "Drinking",
//     image: require("../assets/Image/drinking.png")
//   },

// ]

// const ViewProfile = () => {
//   const [isExpanded, setIsExpanded] = useState(false)
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatListRef = useRef(null);
//   const tik = require("../assets/Image/smallTik.png")

//   const scrollRef = useRef<ScrollView>(null);


//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const onViewRef = React.useRef(({ viewableItems }: any) => {
//     if (viewableItems.length > 0) {
//       setActiveIndex(viewableItems[0].index);
//     }
//   });
//   const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

//   const renderItem = ({ item }: any) => (
//     <View style={styles.itemWrapper}>
//       <View style={styles.itemContainer}>
//         <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
//       </View>
//       <Text style={[Typography.large_headings, { color: Color.orange }]}>{item.title}</Text>
//       <Text style={[Typography.title, { color: Color.chatBg }]}>{item.desc}</Text>
//     </View>
//   );


//   const images = [
//     require('../assets/Image/viewprofile.png'),
//     require('../assets/Image/viewprofile.png'),
//     require('../assets/Image/viewprofile.png'),
//   ];



//   return (
//     <View style={{ flex: 1, backgroundColor: Color.white }}>
//       {/* <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} /> */}
//       <StatusBar translucent backgroundColor="transparent" />
//       <ScrollView
//         ref={scrollRef}
//         contentContainerStyle={styles.scroll}
//         bounces={true}
//         bouncesZoom={true}
//       >

//         <View style={{}}>
//           <FlatList
//             data={images}
//             ref={flatListRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <Image source={item}  style={styles.image} />
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
//           <View style={{ position: "absolute", flexDirection: "row", justifyContent: "space-between", top: scale(27), alignItems: "center", width: "100%" }}>
//             <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
//               <Feather name="chevron-left" size={35} color={Color.black} />
//             </Pressable>

//             <Pressable style={styles.heart} onPress={() => navigationRef.goBack()}>
//               <AntDesign name="heart" size={25} color={Color.orange} />
//             </Pressable>
//           </View>
//         </View>

//         <View style={{ gap: 15, marginTop: 10 }}>
//           <View style={{ flexDirection: "row", alignItems: "center", gap: 10, alignSelf: "center" }}>
//             <Text style={[Typography.large_headings, { fontSize: FontSize.Font31, lineHeight: 35 }]}>Full Name</Text>
//             <Image source={tik} style={{ height: 28, width: 28 }} />
//           </View>
//           <RequestButton title='Request' backgroundColor={Color.chatBg} />
//           <View style={{flexDirection: "row", width: "100%", flex: 1}}>
//             <RequestButton title='Reject' backgroundColor='#E01820' />
//             <RequestButton title='Shortlist'  backgroundColor='#208B28'/>
//           </View>
//           <FlatList
//             data={data}
//             renderItem={renderItem}
//             keyExtractor={item => item.id.toString()}
//             numColumns={4}
//             contentContainerStyle={{}}
//           />
//         </View>
//         <View style={{ marginHorizontal: moderateScale(15) }}>
//           <Text style={Typography.samll_bold}>Bio:</Text>
//           <Text style={[Typography.title, { color: Color.chatBg, marginTop: 5 }]}>
//             {isExpanded
//               ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit, possimus reiciendis amet in inventore, adipisci officiis? Animi itaque, repudiandae dolores illum eum mollitia sint."
//               : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit"}
//             <Text onPress={toggleExpand} style={[Typography.small, { color: Color.orange }]}> {isExpanded ? "See less..." : "See more..."}</Text>
//           </Text>
//         </View>
//         <PersonalDetailTrack heding='Personal Details' />
//       </ScrollView>

//     </View>
//   )
// }

// export default ViewProfile

// const styles = StyleSheet.create({
//   scroll: {
//     flexGrow: 1,
//     rowGap: 10,
//   },
//   image: {
//     height: moderateScale(360),
//     // width: moderateScale(370),
//     width: Dimensions.get("screen").width
//     // alignSelf: "center"
//   },
//   back: {
//     // position: "absolute",
//     backgroundColor: Color.boxBg,
//     height: scale(40),
//     width: scale(40),
//     borderRadius: scale(50),
//     margin: scale(15),
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heart: {
//     // position: "absolute",
//     // alignSelf: "flex-end",
//     backgroundColor: Color.boxBg,
//     height: scale(40),
//     width: scale(40),
//     borderRadius: scale(50),
//     margin: scale(15),
//     right: 3,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   icon: {
//     height: scale(30),
//     width: scale(30)
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

//   itemWrapper: {
//     flex: 1,
//     alignItems: 'center',
//     marginBottom: moderateScale(10),
//   },
//   itemContainer: {
//     backgroundColor: 'white',
//     width: scale(54),
//     height: scale(54),
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: scale(50),
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   itemImage: {
//     width: 24,
//     height: 24,
//   },
//   itemDesc: {
//     textAlign: 'center',
//     fontSize: 10,
//     color: 'gray',
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   text: {
//     marginVertical: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   button: {
//     marginTop: 10,
//     padding: 10,

//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// })


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
import React, { useRef, useState } from 'react';
import { Color } from '../Theme';
import { moderateScale, scale } from '../Theme/ResposiveSize';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { navigationRef } from '../Navigator/Utils';
import { Typography } from '../Theme/Typography';
import { FontSize } from '../Theme/FontSize';
import RequestButton from '../Component/Buttons/RequestButton';
import PersonalDetailTrack from '../Component/Cards/PersonalDetailTrack';

const data = [
  { id: 1, title: '24', desc: 'Age', image: require('../assets/Image/age.png') },
  { id: 2, title: '5’11 inch', desc: 'Height', image: require('../assets/Image/hight.png') },
  { id: 3, title: '60 kg', desc: 'Weight', image: require('../assets/Image/kg.png') },
  { id: 4, title: 'Delhi', desc: 'Location', image: require('../assets/Image/location.png') },
  { id: 5, title: '2', desc: 'Siblings', image: require('../assets/Image/siblings.png') },
  { id: 6, title: 'No', desc: 'Smoking', image: require('../assets/Image/smoking.png') },
  { id: 7, title: 'No', desc: 'Smoking', image: require('../assets/Image/smoking.png') },
  { id: 8, title: 'No', desc: 'Drinking', image: require('../assets/Image/drinking.png') },
];

const images = [
  require('../assets/Image/viewprofile.png'),
  require('../assets/Image/viewprofile.png'),
  require('../assets/Image/viewprofile.png'),
];

const ViewProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const renderHeader = () => (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Image source={item} style={styles.image} />}
        onScroll={({ nativeEvent }) => {
          const index = Math.round(nativeEvent.contentOffset.x / Dimensions.get('screen').width);
          setActiveIndex(index);
        }}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { backgroundColor: index === activeIndex ? '#FF5A60' : '#E5E5E5' }]}
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
        <RequestButton title="Request" backgroundColor={Color.chatBg} />
        <View style={styles.actionButtons}>
          <RequestButton title="Reject" backgroundColor="#E01820" />
          <RequestButton title="Shortlist" backgroundColor="#208B28" />
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={[Typography.samll_bold, { marginHorizontal: moderateScale(10) }]}>Bio:</Text>
      <Text style={[Typography.title, { color: Color.chatBg, marginTop: 5, marginHorizontal: moderateScale(10), }]}>
        {isExpanded
          ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit, possimus reiciendis amet in inventore, adipisci officiis? Animi itaque, repudiandae dolores illum eum mollitia sint.'
          : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit rerum voluptas, quas dolor odit'}
        <Text onPress={toggleExpand} style={[Typography.small, { color: Color.orange }]}>
          {isExpanded ? ' See less...' : ' See more...'}
        </Text>
      </Text>
      <PersonalDetailTrack heding="Personal Details" />
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
    borderWidth:1,
    borderColor:Color.orange,
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
    marginTop:10
  },
  itemWrapper: {
    flex: 1,
    alignItems: 'center',
    marginBottom: moderateScale(10),
    marginTop:10
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
