import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SuggestedMatches = () => {
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




  const renderItem = ({ item }: any) => (
    // <View style={styles.itemContainer}>
    //   <Image source={item.image} style={styles.image} />
    //   <View>
    //     <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
    //     <Text style={styles.name}>{item.name}</Text>
    //     <Image source={right} style={{height: 14, width: 14}} />
    //     <AntDesign name="right" size={17} color="#4F8EF7" style={styles.right} />
    //     </View>
    //     <Text style={styles.details}>{item.detalis}</Text>
    //   </View>
    // </View>
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={[Typography.small, { color: Color.black }]}>{item.name}</Text>
            <Image source={right} style={{ height: 14, width: 14 }} />
          </View>
          <Text style={Typography.smallText}>{item.detalis}</Text>
        </View>
        <AntDesign name="right" size={17} color={Color.orange} style={styles.rightIcon} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heding}>
        <Text style={[Typography.title, { color: Color.chatBg }]}>Suggested Matches</Text>
        <Text style={[Typography.title, { color: Color.orange, fontSize: FontSize.Font16 }]}>View All</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
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
    alignItems: 'center',
  },


  details: {
    fontSize: 14,
    color: '#666',
  },
  rightIcon: {
    marginLeft: 10,
  },

})