import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, LayoutChangeEvent, Image, Pressable, TextInput } from 'react-native';
import { moderateScale, scale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import Reviews from '../../Screens/Reviews/Reviews';


const PersonalDetails = [
  {
    id: 1,
    title: "Liking’s",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam consectetur tortor sapien a enim."
  },
  {
    id: 2,
    title: "Disliking's",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam consectetur tortor sapien a enim."
  },
  {
    id: 3,
    title: "About Family",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam consectetur tortor sapien a enim."
  },
  {
    id: 4,
    title: "Job Skill",
    desc: "Office Details"
  },
];

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
}

const PersonalDetailTrack = (Props: IPersonalTrack) => {
  const [lineHeights, setLineHeights] = useState({});
  const check = require("../../assets/Image/check.png")

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

  const iconItem = ({ item }) => (
    <View style={styles.interests}>
      <Image source={item.icon} style={{ height: 16, width: 14 }} />
      <Text style={Typography.smallTitle}>{item.name}</Text>
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
            data={Interests}
            renderItem={iconItem}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            columnWrapperStyle={{ justifyContent: "space-around", marginVertical: 10 }}

          />
        </View>
        :
        <View style={{marginTop:moderateScale(30)}}>
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
  interests: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.boxBg,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    gap: 10
  },

});

export default PersonalDetailTrack;
