import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BackHandler, SafeAreaView } from "react-native";
import { navigationRef } from "../Utils";
import NavigationTab from "./Tab";
import HomeScreen from "../../Screens/HomeScreen";
import StoreScreen from "../../Screens/StoreScreen";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
import ChatScreen from "../../Screens/Chat/Chat";
import BookPooja from "../../Screens/Pooja/BookPooja";

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = ({ navigation }: any) => {
  const [isPopup, setIspopup] = useState(false);
  const [userList, setUserList] = useState<any>([]);
  const [currentCount, setCurrentCount] = useState(0);
  const backAction = () => {
    // console.log(currentCount);
    setCurrentCount(currentCount + 1);
    setTimeout(() => {
      setCurrentCount(0);
    }, 1000);
    // if (currentCount === 1) {
    //   Toasts("Press again to close!");
    //   return true;
    // }
    if (currentCount >= 2) {
      BackHandler.exitApp();
      return true;
    }
    if (currentCount < 1) {
      navigationRef.goBack();
      return true;
    }
  };
  // console.log(currentCount);

  // console.log(backAction);

  BackHandler.addEventListener("hardwareBackPress", backAction);
  // console.log(userList);
  const options: any = {
    tabBarIconStyle: { display: "none" },
    tabBarLabelPosition: "beside-icon",
  };

  return (
    <>
      {/* <SearchCard
        onProfile={() => {
          navigation.openDrawer();
        }}
        userList={(e: any) => setUserList(e)}
      />
      {userList.length != 0 && <SearchPopup userList={userList} />} */}
      <Tab.Navigator
        tabBar={(props) => (
          <NavigationTab
            key={Math.floor(Math.random() * 105000000)}
            {...props}
          />
        )}
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={options} />
        <Tab.Screen
          name="Store"
          component={StoreScreen}
          options={options}
        />
        <Tab.Screen
          name="Book Pooja"
          component={BookPooja}
          options={options}
        />
        <Tab.Screen
          name="Chats"
          component={ChatScreen}
          options={options}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={options}
        />
      </Tab.Navigator>
      {/* {isPopup && (
        <ProfileDropDown
          onProfile={() => {
            setIspopup(false);
          }}
        />
      )} */}
    </>
  );
};

export default MainNavigator;
