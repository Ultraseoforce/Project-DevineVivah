import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import { moderateScale, scale } from '../../Theme/ResposiveSize'
import BackHeader from '../../Component/Header/BackHeader'
import { navigate } from '../../Navigator/Utils'
import { Typography } from '../../Theme/Typography'
import CheckBox from '../../Component/CheckBox/CheckBox'
import Sign from 'react-native-vector-icons/AntDesign'
import { FontSize } from '../../Theme/FontSize'
import { images } from '../../Theme/Image'

const CardScreen = ({route}: any) => {
    const { item } = route.params
    const [quantity, setQuantity] = useState(1);
    const [isVisible, setIsVisible] = useState(true);
  
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => { if (quantity > 1) setQuantity(quantity - 1); };
    const handleDelete = () => { setIsVisible(false); };
  
    if (!isVisible) return null;

const Product = require("../../assets/Image/product.png")
const Dots = require('../../assets/Image/3dots.png');
const Delete = require('../../assets/Image/Delete.png');

console.log("card add item=>>>>", item)
  return (
    <View style={{flex: 1, backgroundColor: Color.white,}}>
        <BackHeader centerTitle='Card' rightTitle='CartCheckout' onpress={() => navigate("Checkout", {})} />
        <View style={styles.cartContainer}>
        <View style={styles.itemRow}>
          <CheckBox  />
          <Image source={images.jeweleryImage} style={styles.productImage} />
          <View style={styles.productDetails}>
            <View style={styles.productText}>
              <Text style={[Typography.samll_bold,{color: Color.black, fontSize: FontSize.Font20}]}>Product Name</Text>
              <View style={styles.categoryRow}>
                <Text style={[Typography.body,{letterSpacing: 0, color: Color.chatBg}]}>Category :</Text>
                <Text style={[Typography.small,{color:Color.black}]}> Jewelery</Text>
              </View>
            </View>
            <View style={styles.priceDetails}>
              <View style={styles.weightBox}>
                <Text style={[Typography.body,{fontSize: FontSize.Font13, letterSpacing: 0, color: Color.chatBg}]}>250 grams</Text>
              </View>
              <View style={styles.priceInfo}>
                <Text style={[Typography.body,{color: Color.chatBg, letterSpacing: 0, fontSize: FontSize.Font18,   textDecorationLine: 'line-through',}]}>RS.500</Text>
                <View style={styles.discountRow}>
                  <Text style={styles.discountText}>-10% off</Text>
                  <Text style={[Typography.samll_bold,{fontSize: FontSize.Font21, color: Color.black }]}>450</Text>
                </View>
              </View>
            </View>
          </View>
          <Image source={Dots} />
        </View>
        <View style={styles.actionsRow}>
          <Text style={[Typography.body, styles.wishlistText]}>Add to Wishlist</Text>
          <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
            <Image source={Delete} />
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.decrementButton} onPress={decrement}>
              <Sign name='minus' size={20} color={'white'} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.incrementButton} onPress={increment}>
              <Sign name='plus' size={21} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CardScreen

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'column',
    borderColor: Color.border,
    borderWidth: 1,
    borderRadius: 7,
    margin: 10,
    padding: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: Color.border,
    paddingBottom: 10,
  },
  productImage: {
    width: moderateScale(99),
    height: moderateScale(99),
    borderRadius: 7
  },
  productDetails: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  productText: {
    flexDirection: 'column',
  },

  categoryRow: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 2
},
 
  priceDetails: {
    flexDirection: 'row',
    alignItems: "center"
  },
  weightBox: {
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
     height: scale(30),
     alignItems: "center",
     justifyContent: "center",
     width: moderateScale(100)

  },
 
  priceInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: moderateScale(5),
    marginLeft: 10,
  },

  discountRow: {
    flexDirection: 'row',
    gap: 7
  },
  discountText: {
    backgroundColor: "#FF5A60",
    color: Color.white,
    alignSelf: "center",
    padding: 3,
    borderRadius: 2,
    fontSize: 10,
  },
  finalPrice: {
    color: '#8391A1',
    fontSize: 16,
    marginLeft: 3,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 8,
  },
  wishlistText: {
    alignSelf: "center",
    color: '#000000',
    letterSpacing: 0
  },
  deleteButton: {
    alignSelf: "center",
  },
  quantityContainer: {
    flexDirection: 'row',
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },
  decrementButton: {
    backgroundColor: "#6A707C",
    borderRadius: 50,
    padding: 8,
  },
  quantityText: {
    fontSize: 20,
    color: '#8391A1',
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  incrementButton: {
    backgroundColor: "#FF5A60",
    borderRadius: 50,
    padding: 8,
  },
})