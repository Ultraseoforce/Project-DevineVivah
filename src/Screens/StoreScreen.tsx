import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderCard from '../Component/Header/HeaderCard'
import { Color } from '../Theme'
import ShopStoreCard from '../Component/Cards/ShopStore'
import ShopeCategoryCard from '../Component/Cards/ShopeCategoryCard'
import ProductCard from '../Component/Cards/ProductCard'
import PrivacyCard from '../Component/Cards/PrivacyCard'


  const data = [
    {
        id: 1,
        name: "Product name",
        price: "500",
        lessprice: "400",
        off: "-10% off",
        reting: "4.2",
        review: "23",
        solds: "700+ solds",
        image: require("../assets/Image/product.png")
    },
    {
        id: 2,
        name: "Product name",
        price: "700",
        lessprice: "500",
        off: "-30% off",
        reting: "2.2",
        review: "25",
        solds: "300+ solds",
        image: require("../assets/Image/product.png")
    },
    {
        id: 3,
        name: "Product name",
        price: "200",
        lessprice: "50",
        off: "-30% off",
        reting: "4.2",
        review: "23",
        solds: "600+ solds",
        image: require("../assets/Image/product.png")
    },
    {
        id: 4,
        name: "Product name",
        price: "300",
        lessprice: "200",
        off: "-5% off",
        reting: "3.2",
        review: "22",
        solds: "300+ solds",
        image: require("../assets/Image/product.png")
    }
  ]



const StoreScreen = () => {
  return (
    <View style={{ backgroundColor: Color.white, flex: 1 }}>
      {/* <HeaderCard BgWhite showCard showNotification  /> */}
      <HeaderCard BgWhite showCard showNotification  />
      <StatusBar backgroundColor={Color.white} barStyle={'light-content'} />
      <ScrollView>
        <ShopStoreCard />
        <ShopeCategoryCard />
        <ProductCard heding="Items Suggested" data={data} />
        <PrivacyCard />
        <ProductCard heding="Brands Recommended" data={data} />
      </ScrollView>
    </View>

  )
}

export default StoreScreen

const styles = StyleSheet.create({

})