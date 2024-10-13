import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { FontSize } from '../../Theme/FontSize'
import { navigate } from '../../Navigator/Utils'
import SearchBar from '../Search/SearchCard'
import { moderateScale, scale } from '../../Theme/ResposiveSize'
import Octicons from 'react-native-vector-icons/Octicons';


interface IShopeCategory {
  showsVertical?: boolean
}

const ShopeCategoryCard = (Props: IShopeCategory) => {
  const data = [
    {
      id: 1,
      title: "Jewelry",
      icon: require("../../assets/Image/jewelry.png")
    },
    {
      id: 2,
      title: "Stones",
      icon: require("../../assets/Image/jewelry.png")
    },
    {
      id: 3,
      title: "Mugs",
      icon: require("../../assets/Image/jewelry.png")
    },
    {
      id: 4,
      title: "Shirts",
      icon: require("../../assets/Image/jewelry.png")
    },
    {
      id: 5,
      title: "Watches",
      icon: require("../../assets/Image/jewelry.png")
    },
  ]

  const [searchQuery, setSearchQuery] = useState("");
  const [data1, setData] = useState(data);


  const filteredData = (data1 || []).filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      {!Props.showsVertical ? <>
        <View style={styles.iconContainer}>
          <Image source={item.icon} style={styles.icon} />
        </View>
        <Text style={[Typography.smallText, styles.title]}>{item.title}</Text>
      </>
        :
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} tintColor={Props.showsVertical ? Color.orange : ""} />
          </View>
          <Text style={[Typography.smallText, styles.title, { color: Color.black, fontSize: FontSize.Font20, lineHeight: 21 }]}>{item.title}</Text>
        </View>
      }
    </View>
  );


  return (
    <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
      {Props.showsVertical ?

        <View style={styles.textInput}>
          <Octicons name="search" size={29} color={"#8391A1"} />
          <TextInput
            style={[Typography.small,{flex: 1}]}
            placeholder={"Search Category"}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={Color.chatBg}
          />
        </View>
        :
        ""}
      {!Props.showsVertical ? <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={[Typography.samll_bold, { color: Color.black }]}>Category</Text>
        <Text onPress={() => navigate("SelectCategory", { data })} style={[Typography.title, { color: Color.orange }]}>See All</Text>
      </View> : ""}
      <FlatList
        data={filteredData ? filteredData : data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={Props.showsVertical ? false : true}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text style={[Typography.samll_bold, styles.nodata]}>No results found</Text>}
      />
    </View>
  )
}

export default ShopeCategoryCard

const styles = StyleSheet.create({
  itemContainer: {
    padding: 5,
    marginTop: 5

  },
  iconContainer: {
    backgroundColor: '#F6F6F6',
    height: 69,
    width: 69,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    height: 28,
    width: 28,
  },
  title: {
    textAlign: "center",
    fontSize: FontSize.Font15,
    marginTop: 10
  },
  textInput: {
    height: moderateScale(48),
    backgroundColor: Color.boxBg,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    alignSelf: "center",
    borderRadius: 25,
    borderWidth: 1,
    marginTop: -10,
    marginBottom: 5,
    borderColor: Color.border
  },
  input: {
    flex: 1, 
    fontFamily: "Poppins-Medium",
    fontSize: FontSize.Font16,
  },
nodata:{justifyContent: "center", alignSelf: "center", color: Color.orange, marginTop: scale(150)}
})