import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme';
import { height, moderateScale } from '../../Theme/ResposiveSize';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Right from '../../assets/svg/Right.svg'
import { useGetSuggestedMatchesQuery } from '../../Store/profile/ProfileApiSlice';
import { getImagePath } from '../Utils/helper';
import { navigate } from '../../Navigator/Utils';

const defaultImage = require('../../assets/Image/noprofile.jpeg'); // Import the default image

const SuggestedMatches = () => {

  const { data: SuggestedMatches, isLoading, refetch: refetchSuggestedMatches } = useGetSuggestedMatchesQuery({});


  const right = require("../../assets/Image/smallTik.png")
  const data = [
    {
      id: 1,
      name: "Full Name",
      detalis: "Age.Height",
      image: require("../../assets/Image/profile1.png")
    },
    {
      id: 2,
      name: "Full Name",
      detalis: "Age.Height",
      image: require("../../assets/Image/profile2.png")
    },
    {
      id: 3,
      name: "Full Name",
      detalis: "Age.Height",
      image: require("../../assets/Image/profile3.png")
    }
  ]
  console.log("SuggestedMatches =>", SuggestedMatches)

  const renderItem = ({ item }: any) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('ViewProfile', {mId:item.mId})} style={styles.itemContainer}>
      <Image source={item.profile_photo1 ? { uri: getImagePath(item.profile_photo1) } : defaultImage} style={styles.image} />
      <View style={styles.contentContainer}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={[Typography.small, { color: Color.black }]}>{item.member_name}</Text>
            <Image source={right} style={{ height: 14, width: 14 }} />
          </View>
          <Text style={Typography.smallText}>{item.detalis}</Text>
        </View>
        {/* <AntDesign name="right" size={17} color={Color.orange} style={styles.rightIcon} /> */}
        <Right />
        {/* <Right style={{ height: 17, width: 17 }} /> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heding}>
        <Text style={[Typography.title, { color: Color.chatBg }]}>Suggested Matches</Text>
        <Text style={[Typography.title, { color: Color.orange, fontSize: FontSize.Font16 }]}>View All</Text>
      </View>
      <FlatList
        data={SuggestedMatches}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default SuggestedMatches

const styles = StyleSheet.create({
  heding: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8
  },
  container: {
    marginTop: moderateScale(10)
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    backgroundColor: Color.boxBg,
    borderRadius: 8,
    padding: 10,
    borderColor: Color.border,
    borderWidth: 1,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: moderateScale(50),
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },


  details: {
    fontSize: 14,
    color: '#666',
  },
  rightIcon: {
    marginLeft: 10,
  },

})