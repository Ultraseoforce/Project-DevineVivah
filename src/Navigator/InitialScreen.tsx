import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../Store/auth/authSlice";
import MainNavigator from "./BottomTab/Main";
import Login from "../Screens/Login/Login";

const InitialScreen = () => {
    const token = useSelector(selectAuthToken);

    //   if (authState.userLoader) {
    //     return (
    //       <>
    //         <CommanStatusBar backgroundColor="#FFFFFF" />
    //         <View className="h-full justify-center">
    //           <LoadingScreen />
    //         </View>
    //       </>
    //     );
    //   }

    return token ? (
        <View style={{ flex: 1 }}>
            <MainNavigator />
        </View>
    ) : (
        <View style={{flex: 1}}>
            <Login />
        </View>
    );
};

export default InitialScreen;
