// import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Color } from '../../Theme'
// import ShippingAddressCard from '../../Component/Shipping/ShippingAddressCard'
// import BackHeader from '../../Component/Header/BackHeader'
// import Button from '../../Component/Buttons/Button'
// import { Typography } from '../../Theme/Typography'

// const Checkout = () => {

//   const coupon = require("../../assets/Image/coupon.png")

//   return (
//     <SafeAreaView style={{ backgroundColor: Color.white, flex: 1, }}>
//       <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
//       <BackHeader />
//       <View style={{ margin: 15 }}>
//         <ShippingAddressCard />
//         <View style={styles.couponContainer}>
//           <View style={styles.couponRow}>
//             <Image source={coupon} style={styles.couponImage} />
//             <Text style={[Typography.samll_bold, { color: Color.chatBg }]}>Enter your coupon code</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Sub Total</Text>
//             <Text style={Typography.samll_bold}>Rs. 1350</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.label}>Shipping</Text>
//             <Text style={styles.value}>Rs. 50</Text>
//           </View>
//           <View style={styles.divider} />
//           <View style={styles.row}>
//             <Text style={styles.label}>Total Amount</Text>
//             <Text style={styles.value}>Rs. 1400</Text>
//           </View>

//           <Button title='Continue' mainStyle={styles.buttonContainer} />

//         </View>


//       </View>
//     </SafeAreaView>
//   )
// }

// export default Checkout

// const styles = StyleSheet.create({
//   couponContainer: {

//   },
//   couponRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: "#F6F6F6",
//     padding: 13,
//     gap: 10,
//     borderRadius: 7,
//   },
//   couponImage: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
//   couponText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#8391A1',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   label: {
//     color: "#8391A1",
//     fontSize: 16,
//   },
//   value: {
//     color: "#000000",
//     fontSize: 16,
//   },
//   divider: {
//     borderStyle: 'dotted',
//     borderTopWidth: 1,
//     borderColor: "#F0F0F0",
//     marginTop: 20,
//   },
//   buttonContainer: {
//     marginTop: 25,
//   },

// })

// import React from 'react';
// import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
// import { Color } from '../../Theme';
// import ShippingAddressCard from '../../Component/Shipping/ShippingAddressCard';
// import BackHeader from '../../Component/Header/BackHeader';
// import Product from '../../Component/Shipping/Product';
// import Button from '../../Component/Buttons/Button';

// const coupon = require('../../assets/Image/coupon.png');

// const Checkout = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
//       <BackHeader />
//       <View style={styles.content}>
//         <ShippingAddressCard />
//         <Product />
//       </View>
//       <View style={styles.couponContainer}>
//         <View style={styles.couponRow}>
//           <Image source={coupon} style={styles.couponImage} />
//           <Text style={styles.couponText}>upon code</Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
//           <Text style={{ color: "#8391A1", fontSize: 16, }}>Sub Total</Text>
//           <Text style={{ color: "#000000", fontSize: 16, }}>Rs. 1350</Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
//           <Text style={{ color: "#8391A1", fontSize: 16, }}>Shipping</Text>
//           <Text style={{ color: "#000000", fontSize: 16, }}>Rs. 50</Text>
//         </View>
//         <View style={{ borderStyle: 'dotted', borderTopWidth: 1, borderColor: "#F0F0F0", marginTop: 20 }}>
//           <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: "space-between", }}>
//             <Text style={{ color: "#8391A1", fontSize: 16, }}>Total Amount</Text>
//             <Text style={{ color: "#000000", fontSize: 16, }}>Rs. 1400</Text>
//           </View>
//         </View>
//         <View style={{marginTop:25}}>
//           <Button title='Continue' />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Checkout;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Color.white,
//     flex: 1,
//   },
//   content: {
//     margin: 15,
//   },
//   couponContainer: {
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#fff',
//     shadowColor: '#4376B2',
//     shadowOpacity: 0.9,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   couponRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: "#F6F6F6",
//     padding: 13,
//     borderRadius: 7,
//   },
//   couponImage: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
//   couponText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#8391A1',
//   },
// });



import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Color } from '../../Theme';
import ShippingAddressCard from '../../Component/Shipping/ShippingAddressCard';
import BackHeader from '../../Component/Header/BackHeader';
import Button from '../../Component/Buttons/Button';
import CheckOutProduct from './CheckOutProduct';
import { Typography } from '../../Theme/Typography';
import { scale } from '../../Theme/ResposiveSize';
import { navigate } from '../../Navigator/Utils';

const coupon = require('../../assets/Image/coupon.png');

const Checkout = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <BackHeader centerTitle='Checkout'  />
      <View style={styles.content}>
        <ShippingAddressCard  heading='Shipping Address' name='Person Name' phoneNumber="91123456789" address={"House#, Street no. Street name, city, state, country."} />
        <CheckOutProduct />
      </View>
      <View style={styles.couponContainer}>
        <View style={styles.couponRow}>
          <Image source={coupon} style={styles.couponImage} />
          <Text style={[Typography.samll_bold,{color: Color.chatBg}]}>Enter your coupon code</Text>
        </View>
        <View style={styles.row}>
          <Text style={[Typography.small,{color: Color.chatBg}]}>Sub Total</Text>
          <Text style={[Typography.samll_bold,{color: Color.black}]}>Rs. 1350</Text>
        </View>
        <View style={styles.row}>
          <Text style={[Typography.small,{color: Color.chatBg}]}>Shipping</Text>
          <Text style={[Typography.samll_bold,{color: Color.black}]}>Rs. 50</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={[Typography.small,{color: Color.chatBg}]}>Total Amount</Text>
          <Text style={[Typography.samll_bold,{color: Color.black}]}>Rs. 1400</Text>
        </View>
        <View >
          <Button title='Continue'  mainStyle={styles.buttonContainer} onPress={() => navigate("ShippingAddress", {})} />
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  content: {
    margin: scale(16),
  },
  couponContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  couponRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.boxBg,
    padding: 13,
    gap: 15,
    borderRadius: 8,
  },
  couponImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  divider: {
    borderStyle: 'dashed',
    borderTopWidth: 1,
    borderColor: "#F0F0F0",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 25,
  },
});
