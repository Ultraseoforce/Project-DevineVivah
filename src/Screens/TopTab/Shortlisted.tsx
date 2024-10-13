import React from "react";
import { FlatList, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { height, moderateScale, width } from "../../Theme/ResposiveSize";
import { Color } from "../../Theme";
import { Typography } from "../../Theme/Typography";
import { FontSize } from "../../Theme/FontSize";

const data = [
  {
    id: 1,
    name: "Full Name",
    Education: "Education",
    Location: "Location",
    DOB: "Date of Birth",
    view: "2",
    tag: "D0012",
    profile: require("../../assets/Image/bigprofile.png"),
  },
  {
    id: 2,
    name: "Full Name",
    Education: "Education",
    Location: "Location",
    DOB: "Date of Birth",
    view: "2",
    tag: "D0012",
    profile: require("../../assets/Image/bigprofile.png"),
  },
  {
    id: 3,
    name: "Full Name",
    Education: "Education",
    Location: "Location",
    DOB: "Date of Birth",
    view: "10",
    tag: "D0515",
    profile: require("../../assets/Image/bigprofile.png"),
  },
];

const Shortlisted = () => {
const camera = require("../../assets/Image/camera.png")

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Image source={item.profile} style={styles.imageStyle} resizeMode="contain" />
        
        <View style={styles.tagContainer}>
          <Text style={[Typography.samll_bold,{ color: Color.white,}]}>{item.tag}</Text>
        </View>

        <View style={styles.viewContainer}>
        <Image source={camera} resizeMode="contain" style={{height: 25, width: 25}} />
          <Text style={[Typography.samll_bold,{ color: Color.white,}]}>{item.view}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomLeftContainer}>
            <Text style={[Typography.samll_bold, {color: Color.white, fontSize: FontSize.Font24, lineHeight: 25}]}>{item.name}</Text>
            <Text style={[Typography.small,{color: Color.white}]}>{item.Education}</Text>
            <Text style={[Typography.small,{color: Color.white}]}>{item.Location}</Text>

          </View>
          <Text style={[Typography.small,{color: Color.white}]} >{item.DOB}</Text>
        </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: moderateScale(15),
    alignItems: 'center',
  },
 
  imageStyle: {
    height: moderateScale(340),
    // width: moderateScale(345),
    width: Dimensions.get("screen").width - 8,
    borderRadius: 6,
  },
  tagContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: Color.orange,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 19,
  },
  viewContainer: {
    position: "absolute",
    top: moderateScale(10),
    right: moderateScale(10),
    backgroundColor: Color.orange,
    paddingHorizontal: 13,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 19,
  },
 
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: moderateScale(15),
    
  },
  bottomLeftContainer: {
    flexDirection: "column",
    gap: 10
  },
});

export default Shortlisted;
