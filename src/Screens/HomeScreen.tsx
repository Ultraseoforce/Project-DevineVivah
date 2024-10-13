import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Color } from '../Theme'
import HeaderCard from '../Component/Header/HeaderCard'
import { moderateScale, scale } from '../Theme/ResposiveSize'
import { Typography } from '../Theme/Typography'
import { FontSize } from '../Theme/FontSize'
import YourMatches from '../Component/Cards/YourMatches'
import CategoryCard from '../Component/Cards/CategoryCard'
import FamousAstrologers from '../Component/Cards/FamousAstrologers'
import SuggestedMatches from '../Component/Cards/SuggestedMatches'
import Shortlisted from './TopTab/Shortlisted'
import LinearGradient from 'react-native-linear-gradient'
import WhiteButton from '../Component/Buttons/WhiteButton'

const HomeScreen = () => {
  const [selected, setSelected] = useState(0);

  const scrollViewRef = useRef(null);

  console.log("selected", selected)

  const addphoto = require("../assets/Image/addphoto.png")

  const handlePress = (index: any) => {
    setSelected(index);
    // Scroll to the selected item if necessary
    scrollViewRef.current?.scrollTo({ x: index * 100, animated: true });
  };


  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <StatusBar backgroundColor={Color.orange} barStyle={'light-content'} />

      <HeaderCard StatusBarColor={Color.orange} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ padding: 10 }}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            <View style={styles.container}>
              {['Brodata', 'Not viewed', 'Shortlisted', 'Viewed', 'Not Interested'].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.textContainer,
                    selected === index && styles.selectedTextContainer
                  ]}
                  onPress={() => handlePress(index)}
                >
                  <Text style={[Typography.small, { fontSize: selected === index ? FontSize.Font15 : FontSize.Font13, color: selected === index ? Color.white : Color.black }]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          {selected === 0 ? (
            <>
              <YourMatches />
              <CategoryCard />

              <View style={{ marginTop: moderateScale(10), }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={Color.gradient} style={styles.linearGradient}>
                  <View style={{ padding: 15, flexDirection: "row", gap: moderateScale(20) }}>
                    <Image source={addphoto} resizeMode='contain' style={{ height: scale(160), width: scale(120), alignItems: "center", }} />
                    <View style={{ justifyContent: "center", }}>
                      <Text style={[Typography.samll_bold, { fontSize: FontSize.Font24, lineHeight: 30, color: Color.white }]}>
                        Add Photos
                      </Text>
                      <Text style={[Typography.small, { maxWidth: moderateScale(200), color: Color.white }]}>Add more photos to get more reach!!!</Text>
                      <WhiteButton title="Add Photos" mainStyle={{ marginTop: scale(15) }} />
                    </View>
                  </View>
                </LinearGradient>
              </View>

              <FamousAstrologers />
              <SuggestedMatches />
            </>
          ) : null}

          {selected === 2 ? (
            <Shortlisted />
          ) : null}




        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#F6F6F6",
    height: moderateScale(48),
    borderRadius: 6,
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: moderateScale(7),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  selectedTextContainer: {
    backgroundColor: '#FF5A60',
    height: moderateScale(48),
    width: moderateScale(81),
    borderRadius: 6,
  },
  linearGradient: {
    height: scale(194),
    borderRadius: 14,
    // marginHorizontal: 10
  }

})