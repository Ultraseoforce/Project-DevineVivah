import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


// Screens
import { navigationRef } from './Utils';
import CreationSteps from '../Screens/CreationSteps';
import PersonalDetails from '../Screens/Details/PersonalDetails';
import Education from '../Screens/Details/Education';
import Profession from '../Screens/Details/Profession';
import FamilyDetails from '../Screens/Details/FamilyDetails';
import Preferences from '../Screens/Details/Preferences';
import Location from '../Screens/Details/Location';
import Verification from '../Screens/Details/Verification';
import SiblingDetails from '../Screens/Details/SiblingDetails';
import HomeScreen from '../Screens/HomeScreen';
import StoreScreen from '../Screens/StoreScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import MainNavigator from './BottomTab/Main';
import Filters from '../Screens/Filters';
import ViewProfile from '../Screens/ViewProfile';
import AstrologerProfileView from '../Screens/AstrologerProfileView';
import SelectCategory from '../Screens/SelectCategory';
import ProductView from '../Screens/ProductView';
import Login from '../Screens/Login/Login';
import ForgotPassword from '../Screens/Login/ForgotPassword';
import OTPVerification from '../Screens/Login/OTPVerification';
import CreactNewPassword from '../Screens/Login/CreactNewPassword';
import PasswordChangeSuccess from '../Screens/Login/PasswordChangeSuccess';
import Checkout from '../Screens/Checkout/Checkout';
import ShippingAddressCard from '../Component/Shipping/ShippingAddressCard';
import ShippingAddress from '../Component/Shipping/ShippingAddress';
import CardScreen from '../Screens/Checkout/CardScreen';
import AddShippingAddress from '../Component/Shipping/AddShippingAddress';
import SelectPaymentMethod from '../Screens/PaymentMethod/SelectPaymentMethod';
import Orderplaced from '../Screens/PaymentMethod/Orderplaced';
import HelpAndSupport from '../Screens/Help/HelpAndSupport';
import ChangePassword from '../Screens/Profile/ChangePassword';
import MyFavorites from '../Screens/Profile/MyFavorites';
import MyOrders from '../Screens/MyOrders/MyOrders';
import MyWishlist from '../Screens/MyWishlist/MyWishlist';
import Singup from '../Screens/SingUp/Singup';
import SelectInterests from '../Screens/Details/SelectInterests';
import Notifacations from '../Screens/Notifacations/Notifacations';
import ChatScreen from '../Screens/Chat/Chat';
import LiveChat from '../Screens/Chat/LiveChat';
import OrderDetails from '../Screens/MyOrders/OrderDetails';
import BookPooja from '../Screens/Pooja/BookPooja';
import MyTickers from '../Screens/Help/MyTickers';
import ProfileSettings from '../Screens/Settings/ProfileSettings';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../Store/auth/authSlice';
import { SafeAreaProvider } from 'react-native-safe-area-context';






const Application = () => {
  const Stack = createNativeStackNavigator();
  const token = useSelector(selectAuthToken);




  return (

    // <SafeAreaProvider>
    //   <NavigationContainer ref={navigationRef} >
    //     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Singup" component={Singup} />
    //       <Stack.Screen name="MainNavigator" component={MainNavigator} />
    //       <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
    //       <Stack.Screen name="MyFavorites" component={MyFavorites} />
    //       <Stack.Screen name="MyOrders" component={MyOrders} />
    //       <Stack.Screen name="MyWishlist" component={MyWishlist} />
    //       <Stack.Screen name="SelectInterests" component={SelectInterests} />
    //       <Stack.Screen name="Notifacations" component={Notifacations} />
    //       <Stack.Screen name="ChatScreen" component={ChatScreen} />
    //       <Stack.Screen name="LiveChat" component={LiveChat} />
    //       <Stack.Screen name="CreationSteps" component={CreationSteps} />
    //       <Stack.Screen name="OrderDetails" component={OrderDetails} />
    //       <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
    //       <Stack.Screen name="Education" component={Education} />
    //       <Stack.Screen name="Profession" component={Profession} />
    //       <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
    //       <Stack.Screen name="Preferences" component={Preferences} />
    //       <Stack.Screen name="Location" component={Location} />
    //       <Stack.Screen name="Verification" component={Verification} />
    //       <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //       <Stack.Screen name="StoreScreen" component={StoreScreen} />
    //       <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    //       <Stack.Screen name="ViewProfile" component={ViewProfile} />
    //       <Stack.Screen name="AstrologerProfileView" component={AstrologerProfileView} />
    //       <Stack.Screen name="SelectCategory" component={SelectCategory} />
    //       <Stack.Screen name="ProductView" component={ProductView} />
    //       <Stack.Screen name="CardScreen" component={CardScreen} />
    //       <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
    //       <Stack.Screen name="Checkout" component={Checkout} />
    //       <Stack.Screen name="AddShippingAddress" component={AddShippingAddress} />
    //       <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethod} />
    //       <Stack.Screen name="Orderplaced" component={Orderplaced} />
    //       <Stack.Screen name="BookPooja" component={BookPooja} />
    //       <Stack.Screen name="MyTickers" component={MyTickers} />
    //       <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
    //       <Stack.Screen name="Filters" component={Filters} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>


    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* If token exists, navigate to MainNavigator, else show login/signup screens */}
          {token ? (
            <>
              <Stack.Screen name="MainNavigator" component={MainNavigator} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Singup" component={Singup} />
            </>
          )}
          {/* The rest of the screens accessible after login */}
          <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
          <Stack.Screen name="MyFavorites" component={MyFavorites} />
          <Stack.Screen name="MyOrders" component={MyOrders} />
          <Stack.Screen name="MyWishlist" component={MyWishlist} />
          <Stack.Screen name="SelectInterests" component={SelectInterests} />
          <Stack.Screen name="Notifacations" component={Notifacations} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="LiveChat" component={LiveChat} />
          <Stack.Screen name="CreationSteps" component={CreationSteps} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
          <Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Profession" component={Profession} />
          <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
          <Stack.Screen name="Preferences" component={Preferences} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="StoreScreen" component={StoreScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ViewProfile" component={ViewProfile} />
          <Stack.Screen name="AstrologerProfileView" component={AstrologerProfileView} />
          <Stack.Screen name="SelectCategory" component={SelectCategory} />
          <Stack.Screen name="ProductView" component={ProductView} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
          <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="AddShippingAddress" component={AddShippingAddress} />
          <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethod} />
          <Stack.Screen name="Orderplaced" component={Orderplaced} />
          <Stack.Screen name="BookPooja" component={BookPooja} />
          <Stack.Screen name="MyTickers" component={MyTickers} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
          <Stack.Screen name="Filters" component={Filters} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}

export default Application

const styles = StyleSheet.create({})