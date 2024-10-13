import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';
import BackHeader from '../../Component/Header/BackHeader';
import CheckOutProduct from '../Checkout/CheckOutProduct';

const MyOrders = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader leftTitle="My Orders" />
      <ScrollView contentContainerStyle={{ padding: moderateScale(16) }}>
        <CheckOutProduct status="Parceled" date="Today" />
        <CheckOutProduct status="Delivered" date="25 July" />
        <CheckOutProduct status="Received" date="25 July" />
      </ScrollView>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({});
