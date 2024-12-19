import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../Theme';
import { scale } from '../Theme/ResposiveSize';
import { Typography } from '../Theme/Typography';
import { FontSize } from '../Theme/FontSize';
import QuantitySelector from '../Component/Filters/QuantitySelector';
import Button from '../Component/Buttons/Button';
import { navigate, navigationRef } from '../Navigator/Utils';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Smile from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Entypo';
import Send from '../assets/svg/Send.svg'


const ProductView = ({ route }: any) => {
  const { item } = route.params
  const [seletedindex, setSeletedIndex] = useState(0)

  const [quantity, setQuantity] = useState(1);
  // const proucimage = require("../assets/Image/viewbigprofile.png")
  console.log("item", item)


  const handleQuantityChange = (e) => {
    setQuantity(e);
  };



  const tik = require("../assets/Image/smallTik.png")
  const profile = require("../assets/Image/profile1.png")
  const star = require("../assets/Image/star.png")
  const CameraImage = require("../assets/Image/money.png")
  const tab = ["Latest", "With Photos", "Detailed Reviews"]

  const DATA = [
    {
      id: '1',
      name: 'Dale Thiel',
      profile: require('../assets/Image/profile1.png'), // Your profile image
      rating: 5.0,
      time: '11 months ago',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      id: '2',
      name: 'Jay Patel',
      profile: require('../assets/Image/profile1.png'), 
      rating: 5.0,
      time: '11 months ago',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      id: '3',
      name: 'Hit Patel',
      profile: require('../assets/Image/profile1.png'), // Your profile image
      rating: 5.0,
      time: '11 months ago',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
  ];



  const RenderItem = ({ item }: any) => (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image source={tik} style={{ height: 20, width: 20, position: "absolute", zIndex: 1, alignSelf: "flex-end", left: 25 }} />
        <Image source={{uri: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600"}} style={{ height: 40, width: 40, borderRadius: 50, }} />
        <Text style={[Typography.samll_bold, { color: 'black', letterSpacing: 0 }]}>
          {item.name}
        </Text>
      </View>
      <View style={{ position: 'absolute', padding: 10, alignSelf: 'flex-end', gap: 3 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, alignSelf: 'flex-end' }}>
          <Image source={star} style={{ height: 19, width: 19, alignSelf: "flex-end" }} />
          <Text style={[Typography.samll_bold, { textAlign: 'right', color: 'black' }]}>
            {item.rating.toFixed(1)}
          </Text>
        </View>
        <Text style={[Typography.tab, { color: "#797979" }]}>{item.time}</Text>
      </View>
      <Text style={[Typography.title, { marginTop: 15, color: "#797979" }]}>
        {item.message}
        <Text style={{ color: Color.orange, fontSize: FontSize.Font16 }}> Reply</Text>
      </Text>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15 }} />
    </View>
  );


  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      {/* <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} /> */}
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        {/* <Image source={{uri: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600"}} style={{ height: scale(340), width: scale(375), alignSelf: "center"}} />
        <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
          <Feather name="chevron-left" size={35} color={Color.black} />
        </Pressable>
        <Pressable style={styles.heart} onPress={() => navigationRef.goBack()}>
          <AntDesign name="heart" size={25} color={Color.orange} />
        </Pressable> */}
         <ImageBackground
        source={{ uri: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600" }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        {/* Back Icon */}
        <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
          <Feather name="chevron-left" size={35} color="black" />
        </Pressable>
        
        {/* Heart Icon */}
        <Pressable style={styles.heart} onPress={() => console.log("Favorite")}>
          <AntDesign name="heart" size={25} color="orange" />
        </Pressable>
      </ImageBackground>
        <View style={{ margin: 20, }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={[Typography.samll_bold, { fontSize: FontSize.Font20 }]}>{item?.name}</Text>
            <Text style={[Typography.small, {color: Color.black , fontSize: FontSize.Font20, alignSelf: "flex-end" }]}>RS.{item?.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: "center", alignSelf: "flex-end" }}>
            <View style={styles.off}>
              <Text style={[Typography.small, { fontSize: FontSize.Font12, color: Color.white }]}>{item.off}</Text>
            </View>
            <Text style={[Typography.samll_bold, { fontSize: FontSize.Font20, lineHeight: 27 }]}>{item?.lessprice}</Text>
          </View>
          <View style={{ borderBottomWih: 1, borderColor: Color.border, marginTop: 20 }} />
          <QuantitySelector initialQuantity={quantity} onQuantityChange={handleQuantityChange} />
          <Button title='Add to Cart' mainStyle={{ marginTop: 20 }} onPress={() => navigate("CardScreen", { item })} />
          <View>
            <Text style={[Typography.samll_bold, { color: Color.black, marginVertical: 10 }]}>About Product:</Text>
            <Text style={[Typography.small,{color: Color.black}]}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure</Text>
          </View>
          <Text style={[Typography.samll_bold, { color: Color.black, marginVertical: 10 }]}>Reviews:</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
            <View style={styles.tab}>
              {tab.map((item, index) => (
                <Pressable onPress={() => setSeletedIndex(index)} style={{ borderWidth: 1, borderColor: Color.border, padding: 7, backgroundColor: seletedindex == index ? Color.orange : Color.white, borderRadius: 50, paddingHorizontal: 20 }}>
                  <Text style={[Typography.smallTitle, { color: seletedindex == index ? Color.white : Color.black, letterSpacing: 0 }]}>{item}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Pressable>
                <Smile name='smile' size={24} color={Color.chatBg} style={styles.icon} />
              </Pressable>
              <TextInput
                style={styles.textInput}
                placeholder='Make a Comment'
                placeholderTextColor={Color.chatBg}
              />
              {/* <View style={styles.iconContainer}>
                <Pressable>
                  <Icon name='attachment' size={19} color={Color.chatBg} style={styles.icon} />
                </Pressable>
                <Pressable>
                  <Icon name='camera' size={19} color={Color.chatBg} style={styles.icon} />
                </Pressable>
              </View> */}
            </View>

            <Pressable style={styles.sendButton}>
              {/* <Image source={CameraImage} style={styles.sendIcon} /> */}
              <Send />
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default ProductView

const styles = StyleSheet.create({
  off: {
    backgroundColor: Color.orange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    height: scale(27),
    width: scale(50)
  },
  total: {
    marginTop: 20,
    fontSize: 18,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  imageBackground: {
    height: 340,
    width: 375,
    alignSelf: 'center',
  },
  imageStyle: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  back: {
    position: "absolute",
    backgroundColor: Color.boxBg,
    height: scale(40),
    width: scale(40),
    borderRadius: scale(50),
    margin: scale(15),
    top: 20,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    position: "absolute",
    alignSelf: "flex-end",
    backgroundColor: Color.boxBg,
    top: 20,
    height: scale(40),
    width: scale(40),
    borderRadius: scale(50),
    margin: scale(15),
    right: 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.orange
  },
  container: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
},
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Color.inputBg,
    borderRadius: 13,
    paddingVertical: 2,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
},
textInput: {
    flex: 1,
    color: '#000',
    fontFamily: "Urbanist-Medium"
    // marginLeft: 10,
},
iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 7,
},
icon: {
    marginHorizontal: 5,
},
sendButton: {
    marginLeft: 10,
    backgroundColor: Color.orange,
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
sendIcon: {
    height: 31,
    width: 31,
},
})