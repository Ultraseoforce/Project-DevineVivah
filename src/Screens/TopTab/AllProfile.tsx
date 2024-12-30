import React from "react";
import { FlatList, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { height, moderateScale, width } from "../../Theme/ResposiveSize";
import { Color } from "../../Theme";
import { Typography } from "../../Theme/Typography";
import { FontSize } from "../../Theme/FontSize";
import { getImagePath } from "../../Component/Utils/helper";


const AllProfile = ({ profilesData }: any) => {
  const camera = require("../../assets/Image/camera.png")
  const defaultImage = require('../../assets/Image/noprofile.jpeg'); // Import the default image


  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.profile_photo1 ? { uri: getImagePath(item.profile_photo1) } : defaultImage}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.tagContainer}>
        <Text style={[Typography.samll_bold, { color: Color.white, }]}>{item.divinevivah_profile_number}</Text>
      </View>

      <View style={styles.viewContainer}>
        <Image source={camera} resizeMode="contain" style={{ height: 25, width: 25 }} />
        <Text style={[Typography.samll_bold, { color: Color.white, }]}>10</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftContainer}>
          <Text style={[Typography.samll_bold, { color: Color.white, fontSize: FontSize.Font24, lineHeight: 25 }]}>{item.name}</Text>
          <Text style={[Typography.small, { color: Color.white }]}>{item.education_level}</Text>
          <Text style={[Typography.small, { color: Color.white }]}>{item.city_name}, {item.state_name}, {item.country_name}</Text>

        </View>
        <Text style={[Typography.small, { color: Color.white }]} >{item.dob}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={profilesData}
      renderItem={renderItem}
      keyExtractor={(item) => item.mId}
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
    top: 15,
    left: moderateScale(32),
    backgroundColor: Color.orange,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 19,
  },
  viewContainer: {
    position: "absolute",
    top: moderateScale(15),
    right: moderateScale(32),
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
    bottom: 10,
    left: 32,
    right: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  bottomLeftContainer: {
    flexDirection: "column",
    gap: 10
  },
});

export default AllProfile;
