import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { scale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
// import Plus from '../../assets/svg/plus.svg'
// import Minus from '../../assets/svg/Minus.svg'

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }: any) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity); 
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); 
    }
  };

  return (
    <View style={{marginTop: 15}}>
        <Text style={[Typography.samll_bold,{ color: Color.black}]}>Select Quantity:</Text>   
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decrementQuantity}>
        {/* <Text style={styles.buttonText}>-</Text> */}
        {/* <Minus /> */}
      </Pressable>
      <View style={{height: scale(45), width: scale(45), alignItems: "center", marginHorizontal: 10, justifyContent: "center", borderRadius: 7, borderWidth: 1, borderColor: Color.border}}>
      <Text style={[Typography.samll_bold,{color: Color.black, fontSize: FontSize.Font18}]}>{quantity}</Text>
      </View>
      <Pressable style={styles.button} onPress={incrementQuantity}>
        {/* <Text style={styles.buttonText}>+</Text> */}
        {/* <Plus /> */}
      </Pressable>
    </View>
    </View>
  );
};

export default QuantitySelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: scale(143),
    height: scale(43),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.border,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "400",
    color: Color.black,
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 10,
    color: '#000',
  },
});
