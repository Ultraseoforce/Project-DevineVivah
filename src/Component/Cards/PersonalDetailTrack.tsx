// import React, { useState } from 'react';
// import { View, Text, FlatList, StyleSheet, LayoutChangeEvent, Image, Pressable, TextInput } from 'react-native';
// import { moderateScale, scale } from '../../Theme/ResposiveSize';
// import { Color } from '../../Theme';
// import { Typography } from '../../Theme/Typography';
// import { FontSize } from '../../Theme/FontSize';
// import Reviews from '../../Screens/Reviews/Reviews';
// import { images } from '../../Theme/Image';
// import { Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// const Interests = [
//   {
//     id: 1,
//     name: "Reading",
//     icon: require("../../assets/Image/open-book.png")
//   },
//   {
//     id: 2,
//     name: "Music",
//     icon: require("../../assets/Image/open-book.png")
//   },
//   {
//     id: 3,
//     name: "Gaming",
//     icon: require("../../assets/Image/open-book.png")
//   },
//   {
//     id: 4,
//     name: "Photography",
//     icon: require("../../assets/Image/open-book.png")
//   },
//   {
//     id: 5,
//     name: "Charity",
//     icon: require("../../assets/Image/open-book.png")
//   },
// ];


// interface IPersonalTrack {
//   heding?: string
//   reviews?: boolean
//   PersonalDetailData?: any
// }

// const PersonalDetailTrack = (Props: IPersonalTrack) => {
//   const [lineHeights, setLineHeights] = useState({});
//   const check = require("../../assets/Image/check.png")


//   const data = [
//     { id: 1, icon: images.ReadingIcon, title: "Reading" },
//     { id: 2, icon: images.PhotographyIcon, title: "Photography" },
//     { id: 3, icon: images.GamingIcon, title: "Gaming" },
//     { id: 4, icon: images.MusicIcon, title: "Music" },
//     { id: 5, icon: images.TravelIcon, title: "Travel" },
//     { id: 6, icon: images.PaintingIcon, title: "Painting" },
//     { id: 7, icon: images.PoliticsIcon, title: "Politics" },
//     { id: 8, icon: images.CharityIcon, title: "Charity" },
//     { id: 9, icon: images.CookingIcon, title: "Cooking" },
//     { id: 10, icon: images.PetsIcon, title: "Pets" },
//     { id: 11, icon: images.FashionIcon, title: "Fashion" },
//     { id: 12, icon: images.SportsIcon, title: "Sports" },
//   ];

//   const interestsArray = Props.PersonalDetailData?.interests?.split(",");
//   const interestData = data.filter((item) => interestsArray?.includes(item.title));


//   const PersonalDetails = [
//     {
//       id: 1,
//       title: "Liking’s",
//       desc: Props?.PersonalDetailData?.likes
//     },
//     {
//       id: 2,
//       title: "Disliking's",
//       desc: Props?.PersonalDetailData?.dislikes
//     },
//     {
//       id: 3,
//       title: "About Family",
//       desc: Props?.PersonalDetailData?.about_family
//     },
//     {
//       id: 4,
//       title: "Job Skill",
//       desc: Props?.PersonalDetailData?.skill
//     },
//   ];

//   const onTextLayout = (event: any, id: any) => {
//     const { height } = event.nativeEvent.layout;
//     setLineHeights(prevState => ({ ...prevState, [id]: height }));
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <View style={styles.boxContainer}>
//         <View style={styles.lineContainer}>
//           <View style={styles.box} >
//             <Image source={check} style={{ height: 14, width: 14 }} />
//           </View>
//           <View
//             style={[
//               styles.verticalLine,
//               { height: (lineHeights[item.id] || 0) + 20 }
//             ]}
//           />
//         </View>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={Typography.samll_bold}>{item.title}</Text>
//         {item.desc ? (
//           <Text
//             style={[Typography.title, { color: Color.chatBg }]}
//             onLayout={(event) => onTextLayout(event, item.id)}
//           >
//             {item.desc}
//           </Text>
//         ) : null}
//       </View>
//     </View>
//   );

//   const renderIconItem = ({ item }) => (
//     <View style={styles.interests}>
//       <Image source={item.icon} style={{ height: 16, width: 14 }} />
//       <Text style={Typography.smallTitle}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View>
//       <View style={styles.header}>
//         <Text style={[Typography.samll_bold, { color: Color.black }]}>{Props.heding}</Text>
//         <Text style={[Typography.smallText, { fontSize: FontSize.Font14, color: Color.orange }]}>See All</Text>
//       </View>
//       <FlatList
//         data={PersonalDetails}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//       {!Props.reviews ?
//         <View>
//           <Text style={[Typography.samll_bold, { marginLeft: 10, marginVertical: 20 }]}>Interests</Text>
//           <FlatList
//             data={interestData}
//             renderItem={renderIconItem}
//             numColumns={3}
//             keyExtractor={(item) => item.id.toString()}
//             columnWrapperStyle={{ justifyContent: "space-around", marginVertical: 10 }}
//           />
//         </View>
//         :
//         <View style={{ marginTop: moderateScale(30) }}>
//           <Text style={[Typography.samll_bold, { color: Color.black, marginLeft: 15 }]}>Reviews</Text>
//           <Reviews />

//         </View>
//       }
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: moderateScale(10),
//   },
//   boxContainer: {
//     marginRight: 10
//   },
//   lineContainer: {
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   box: {
//     width: 24,
//     height: 24,
//     borderRadius: 9,
//     backgroundColor: Color.orange,
//     zIndex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//   },
//   verticalLine: {
//     width: 2,
//     backgroundColor: Color.orange,
//     position: 'absolute',
//     top: 24,
//     bottom: 0,
//   },
//   textContainer: {
//     flex: 1,
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginHorizontal: moderateScale(10),
//     marginTop: moderateScale(15),
//     justifyContent: "space-between"
//   },
//   interests: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Color.boxBg,
//     padding: 10,
//     paddingHorizontal: 15,
//     borderRadius: 50,
//     gap: 10,
//     //add
//     // marginHorizontal: moderateScale(5),
//     // alignSelf: "center",
//     // paddingVertical: moderateScale(2),
//     // width: screenWidth / 3.5,
//     // justifyContent: "center",
//     // flexWrap: "wrap"
//   },

// });

// export default PersonalDetailTrack;







import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, LayoutChangeEvent, Image, Pressable, TextInput } from 'react-native';
import { moderateScale, scale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import Reviews from '../../Screens/Reviews/Reviews';
import { images } from '../../Theme/Image';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Interests = [
  {
    id: 1,
    name: "Reading",
    icon: require("../../assets/Image/open-book.png")
  },
  {
    id: 2,
    name: "Music",
    icon: require("../../assets/Image/open-book.png")
  },
  {
    id: 3,
    name: "Gaming",
    icon: require("../../assets/Image/open-book.png")
  },
  {
    id: 4,
    name: "Photography",
    icon: require("../../assets/Image/open-book.png")
  },
  {
    id: 5,
    name: "Charity",
    icon: require("../../assets/Image/open-book.png")
  },
];


interface IPersonalTrack {
  heding?: string
  reviews?: boolean
  PersonalDetailData?: any
}

const PersonalDetailTrack = (Props: IPersonalTrack) => {
  const [lineHeights, setLineHeights] = useState({});
  const check = require("../../assets/Image/check.png")


  const data = [
    { id: 1, icon: images.ReadingIcon, title: "Reading" },
    { id: 2, icon: images.PhotographyIcon, title: "Photography" },
    { id: 3, icon: images.GamingIcon, title: "Gaming" },
    { id: 4, icon: images.MusicIcon, title: "Music" },
    { id: 5, icon: images.TravelIcon, title: "Travel" },
    { id: 6, icon: images.PaintingIcon, title: "Painting" },
    { id: 7, icon: images.PoliticsIcon, title: "Politics" },
    { id: 8, icon: images.CharityIcon, title: "Charity" },
    { id: 9, icon: images.CookingIcon, title: "Cooking" },
    { id: 10, icon: images.PetsIcon, title: "Pets" },
    { id: 11, icon: images.FashionIcon, title: "Fashion" },
    { id: 12, icon: images.SportsIcon, title: "Sports" },
  ];

  const interestsArray = Props.PersonalDetailData?.interests?.split(",");
  const interestData = data.filter((item) => interestsArray?.includes(item.title));


  const PersonalDetails = [
    {
      id: 1,
      title: "Liking’s",
      desc: Props?.PersonalDetailData?.likes
    },
    {
      id: 2,
      title: "Disliking's",
      desc: Props?.PersonalDetailData?.dislikes
    },
    {
      id: 3,
      title: "About Family",
      desc: Props?.PersonalDetailData?.about_family
    },
    {
      id: 4,
      title: "Job Skill",
      desc: Props?.PersonalDetailData?.skill
    },
  ];

  const onTextLayout = (event: any, id: any) => {
    const { height } = event.nativeEvent.layout;
    setLineHeights(prevState => ({ ...prevState, [id]: height }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.boxContainer}>
        <View style={styles.lineContainer}>
          <View style={styles.box} >
            <Image source={check} style={{ height: 14, width: 14 }} />
          </View>
          <View
            style={[
              styles.verticalLine,
              { height: (lineHeights[item.id] || 0) + 20 }
            ]}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={Typography.samll_bold}>{item.title}</Text>
        {item.desc ? (
          <Text
            style={[Typography.title, { color: Color.chatBg }]}
            onLayout={(event) => onTextLayout(event, item.id)}
          >
            {item.desc}
          </Text>
        ) : null}
      </View>
    </View>
  );

  const renderIconItem = ({ item }) => (
    <View style={styles.interestItem}>
      <Image source={item.icon} style={styles.interestIcon} />
      <Text style={styles.interestText}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <View style={styles.header}>
        <Text style={[Typography.samll_bold, { color: Color.black }]}>{Props.heding}</Text>
        <Text style={[Typography.smallText, { fontSize: FontSize.Font14, color: Color.orange }]}>See All</Text>
      </View>
      <FlatList
        data={PersonalDetails}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {!Props.reviews ?
        <View>
          <Text style={[Typography.samll_bold, { marginLeft: 10, marginVertical: 20 }]}>Interests</Text>
          <FlatList
            data={interestData}
            renderItem={renderIconItem}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            columnWrapperStyle={{ justifyContent: "space-between", marginBottom: moderateScale(10) }}
            contentContainerStyle={{ paddingHorizontal: moderateScale(10) }}
          />

        </View>
        :
        <View style={{ marginTop: moderateScale(30) }}>
          <Text style={[Typography.samll_bold, { color: Color.black, marginLeft: 15 }]}>Reviews</Text>
          <Reviews />

        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: moderateScale(10),
  },
  boxContainer: {
    marginRight: 10
  },
  lineContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: 9,
    backgroundColor: Color.orange,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  verticalLine: {
    width: 2,
    backgroundColor: Color.orange,
    position: 'absolute',
    top: 24,
    bottom: 0,
  },
  textContainer: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(15),
    justifyContent: "space-between"
  },
  interestItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.boxBg,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(25),
    margin: moderateScale(5),
    maxWidth: screenWidth * 0.5, // Set a maximum width for the container if needed
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 1, // For Android shadow
  },
  interestIcon: {
    height: moderateScale(20), // Set a fixed height and width for the icon
    width: moderateScale(20),
    resizeMode: 'contain', // Ensure the icon scales properly
    marginRight: moderateScale(8),
  },
  interestText: {
    ...Typography.smallTitle,
    fontSize: FontSize.Font14,
  },
});

export default PersonalDetailTrack;