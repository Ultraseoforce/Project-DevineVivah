import { Alert, PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


// Screens
import { navigationRef } from './Utils';
import PersonalDetails from '../Screens/Details/PersonalDetails';
import Education from '../Screens/Details/EducationDetails';
import Profession from '../Screens/Details/ProfessionDetails';
import FamilyDetails from '../Screens/Details/FamilyDetails';
import Preferences from '../Screens/Details/PreferencesDetails';
import Location from '../Screens/Details/LocationDetails';
import Verification from '../Screens/Details/VerificationDetails';
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
import ProfileSettings from '../Screens/Settings/ProfileSettings';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, selectFcmToken, setCredentials } from '../Store/auth/authSlice';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';
import InitialScreen from './InitialScreen';
import notifee, { AndroidImportance } from '@notifee/react-native';
import UploadPictures from '../Screens/Profile/UploadPictures';
import MyTickets from '../Screens/Help/MyTickers';
import DininevivahSupport from '../Screens/Help/DininevivahSupport';
import Daily from '../Screens/DailyMatches/Daily';
import CreationSteps from '../Screens/CreationSteps';
import VerificationDetails from '../Screens/Details/VerificationDetails';
import DetailsSubmitSuccessfully from '../Component/Modal/DetailsSubmitSuccessfully';







const Application = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();

  const creactFcm = async () => {
    try {
      const FcmToken = await messaging().getToken()
      dispatch(setCredentials({ fcmtoken: FcmToken }));
      console.log("FcmToken", FcmToken)
    } catch (error) {
      console.log("FCM token", error)
    }
  }

  useEffect(() => {
    creactFcm()
  }, [])



  const checkApplicationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Notification permission granted');
        } else {
          console.log('Notification permission denied');
        }
      } catch (error) {
        console.log('Permission error:', error);
      }
    }
  };


  useEffect(() => {
    checkApplicationPermission();
  }, []);

  useEffect(() => {
    // Request user permission on app startup
    requestUserPermission();
    // Get the FCM token for the device
    getFcmToken();

    // Foreground notifications listener
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      displayNotification(remoteMessage);
    })






    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification opened from quit state:', remoteMessage.notification);
        }
      });

    // Background notification tap handler
    const unsubscribeBackground = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:', remoteMessage.notification);
      // Handle background notification tap here
    });

    // Killed state notification handler
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage.notification);
          // Handle quit state notification tap here
        }
      });

    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, []);


  const displayNotification = async (remoteMessage) => {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher', // Ensure you have this icon in your drawable folder
      },
    });
  };


  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    } else {
      console.log('Notification permission not granted');
    }
  };

  const getFcmToken = async () => {
    const token = await messaging().getToken();
    if (token) {
      console.log('FCM Token:', token);
      // Optionally send the FCM token to your server for push notifications
    }
  };



  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {/* Initialscreen Route Start */}
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />


          {/* AuthScreen Route Start  */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Singup" component={Singup} />



          {/* The rest of the screens accessible after login */}
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="CreationSteps" component={CreationSteps} />
          <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
          <Stack.Screen name="MyFavorites" component={MyFavorites} />
          <Stack.Screen name="MyOrders" component={MyOrders} />
          <Stack.Screen name="MyWishlist" component={MyWishlist} />
          <Stack.Screen name="SelectInterests" component={SelectInterests} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="LiveChat" component={LiveChat} />
          <Stack.Screen name="UploadPictures" component={UploadPictures} />
          <Stack.Screen name="DetailsSubmitSuccessfully" component={DetailsSubmitSuccessfully} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
          <Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Profession" component={Profession} />
          <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
          <Stack.Screen name="Preferences" component={Preferences} />
          <Stack.Screen name="Notifacations" component={Notifacations} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="StoreScreen" component={StoreScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ViewProfile" component={ViewProfile} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="CreactNewPassword" component={CreactNewPassword} />
          <Stack.Screen name="PasswordChangeSuccess" component={PasswordChangeSuccess} />
          <Stack.Screen name="ShippingAddressCard" component={ShippingAddressCard} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="SiblingDetails" component={SiblingDetails} />
          <Stack.Screen name="Daily" component={Daily} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} />

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
          <Stack.Screen name="MyTickets" component={MyTickets} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
          <Stack.Screen name="Filters" component={Filters} />
          <Stack.Screen name="DininevivahSupport" component={DininevivahSupport} />
          <Stack.Screen name="VerificationDetails" component={VerificationDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}

export default Application

const styles = StyleSheet.create({})