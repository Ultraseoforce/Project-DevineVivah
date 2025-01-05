// import { View, Text } from "react-native";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectAuthToken } from "../Store/auth/authSlice";
// import MainNavigator from "./BottomTab/Main";
// import Login from "../Screens/Login/Login";

// const InitialScreen = () => {
//     const token = useSelector(selectAuthToken);


//     return token ? (
//         <View style={{ flex: 1 }}>
//             <MainNavigator />
//         </View>
//     ) : (
//         <View style={{flex: 1}}>
//             <Login />
//         </View>
//     );
// };

// export default InitialScreen;


import { View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../Store/auth/authSlice";
import MainNavigator from "./BottomTab/Main";
import Login from "../Screens/Login/Login";
import CreationSteps from "../Screens/CreationSteps";
import { useGetProfileQuery, Profile } from "../Store/profile/ProfileApiSlice";
import { Color } from "../Theme";

const InitialScreen = () => {
    const token = useSelector(selectAuthToken);
    const { data: profile, isLoading, refetch } = useGetProfileQuery({}) as { data: Profile };

    useEffect(() => {
        if (token) {
            refetch();
        }
    }, [token]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={Color.orange} />
            </View>
        );
    }

    if (!token) {
        return (
            <View style={{ flex: 1 }}>
                <Login />
            </View>
        );
    }

    const {
        personal_details,
        education_details,
        profession_details,
        family_details,
        preferences_details,
        location_details,
        verification_details,
        profile_photo
    } = profile || {};

    const isProfileIncomplete = [
        personal_details,
        education_details,
        profession_details,
        family_details,
        preferences_details,
        location_details,
        verification_details,
        profile_photo
    ].some(detail => detail === 0);

    return (
        <View style={{ flex: 1 }}>
            {isProfileIncomplete ? <CreationSteps /> : <MainNavigator />}
        </View>
    );
};

export default InitialScreen;