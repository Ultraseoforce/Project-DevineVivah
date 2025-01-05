// import { FlatList, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import React, { useEffect, useMemo } from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Typography } from '../Theme/Typography';
// import { moderateScale } from '../Theme/ResposiveSize';
// import BackHeader from '../Component/Header/BackHeader';
// import { Color } from '../Theme';
// import { navigate } from '../Navigator/Utils';
// import Button from '../Component/Buttons/Button';
// import { useGetProfileQuery } from '../Store/profile/ProfileApiSlice';
// import Done from "../assets/svg/Done.svg";

// interface Profile {
//     personal_details: number;
//     education_details: number;
//     profession_details: number;
//     family_details: number;
//     preferences_details: number;
//     location_details: number;
//     verification_details: number;
// }

// const CreationSteps = () => {
//     const { data: getProfile, refetch: refetchProfileDetails, isLoading } = useGetProfileQuery({});

//     useEffect(() => {
//         refetchProfileDetails();
//     }, []);



//     const details = useMemo(() => [
//         {
//             id: '1',
//             title: 'Personal Details',
//             screen: 'PersonalDetails',
//             completed: getProfile?.personal_details === 1,
//             active: false
//         },
//         {
//             id: '2',
//             title: 'Education',
//             screen: 'Education',
//             completed: getProfile?.education_details === 1,
//             active: getProfile?.personal_details === 1 && getProfile?.education_details === 0
//         },
//         {
//             id: '3',
//             title: 'Profession',
//             screen: 'Profession',
//             completed: getProfile?.profession_details === 1,
//             active: getProfile?.education_details === 1 && getProfile?.profession_details === 0
//         },
//         {
//             id: '4',
//             title: 'Family Details',
//             screen: 'FamilyDetails',
//             completed: getProfile?.family_details === 1,
//             active: getProfile?.profession_details === 1 && getProfile?.family_details === 0
//         },
//         {
//             id: '5',
//             title: 'Preferences',
//             screen: 'Preferences',
//             completed: getProfile?.preferences_details === 1,
//             active: getProfile?.family_details === 1 && getProfile?.preferences_details === 0
//         },
//         {
//             id: '6',
//             title: 'Location',
//             screen: 'Location',
//             completed: getProfile?.location_details === 1,
//             active: getProfile?.preferences_details === 1 && getProfile?.location_details === 0
//         },
//         {
//             id: '7',
//             title: 'Verification',
//             screen: 'Verification',
//             completed: getProfile?.verification_details === 1,
//             active: getProfile?.location_details === 1 && getProfile?.verification_details === 0
//         },
//         {
//             id: '8',
//             title: 'Upload Profile Picture',
//             screen: 'UploadPictures',
//             completed: getProfile?.profile_photo === 1,
//             active: getProfile?.profile_photo === 1 && getProfile?.profile_photo === 0
//         },
//     ], [getProfile]);

//     const allStepsCompleted = useMemo(() => {
//         return details.every(step => step.completed);
//     }, [details]);

//     const detailspage = (screen: string) => {
//         navigate(screen, {});
//     };

//     const renderItem = ({ item }: { item: typeof details[0] }) => (
//         <Pressable onPress={() => detailspage(item.screen)}>
//             <View style={styles.itemContainer}>
//                 <View style={[
//                     styles.iconContainer,
//                     item.completed && styles.completedIconContainer,
//                     item.active && styles.activeIconContainer
//                 ]}>
//                     {item.completed ? (
//                         <Done />
//                     ) : (
//                         <View style={[styles.emptyCircle, item.active && { backgroundColor: Color.orange }]} />
//                     )}
//                 </View>
//                 <Text style={[Typography.body, styles.itemTitle, item.active && { color: Color.orange }]}>{item.title}</Text>
//                 <Icon
//                     name="chevron-right"
//                     size={24}
//                     color={item.active ? Color.orange : Color.chatBg}
//                 />
//             </View>
//         </Pressable>
//     );

//     if (isLoading) {
//         return (
//             <View style={styles.loaderContainer}>
//                 <ActivityIndicator size="large" color={Color.orange} />
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
//             <BackHeader />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <View style={styles.content}>
//                     <Text style={[styles.heading, Typography.main_heading]}>
//                         Provide some details to enjoy using divinevivah!
//                     </Text>
//                     <Text style={[styles.text, Typography.body]}>
//                         You're almost ready to go just need your verifications.
//                     </Text>

//                     <FlatList
//                         data={details}
//                         renderItem={renderItem}
//                         keyExtractor={(item) => item.id}
//                         contentContainerStyle={styles.listContainer}
//                         ItemSeparatorComponent={() => <View style={styles.separator} />}
//                     />
//                 </View>
//                 <Button
//                     title="Submit"
//                     onPress={() => navigate("SelectInterests", {})}
//                     mainStyle={[styles.submitButton, { backgroundColor: !allStepsCompleted ? "#DEDEDE" : Color.orange }]}
//                     disabled={!allStepsCompleted}
//                 />
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: Color.white,
//     },
//     content: {
//         marginHorizontal: moderateScale(16),
//     },
//     heading: {
//         marginTop: moderateScale(15),
//     },
//     text: {
//         marginTop: moderateScale(20),
//         color: Color.chatBg,
//     },
//     listContainer: {
//         marginTop: moderateScale(20),
//         marginBottom: moderateScale(15),
//     },
//     itemContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: moderateScale(12),
//     },
//     iconContainer: {
//         height: moderateScale(36),
//         width: moderateScale(36),
//         borderRadius: moderateScale(18),
//         backgroundColor: Color.border,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     completedIconContainer: {
//         backgroundColor: Color.orange,
//     },
//     activeIconContainer: {
//         backgroundColor: Color.orange,
//     },
//     emptyCircle: {
//         height: moderateScale(20),
//         width: moderateScale(20),
//         borderRadius: moderateScale(10),
//         backgroundColor: "#DEDEDE",
//     },
//     itemTitle: {
//         marginLeft: moderateScale(12),
//         flex: 1,
//     },
//     separator: {
//         height: 1,
//         backgroundColor: Color.border,
//     },
//     submitButton: {
//         marginVertical: moderateScale(40),
//         marginHorizontal: moderateScale(16),
//     },
//     loaderContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: Color.white,
//     },
// });

// export default CreationSteps;

import { FlatList, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Typography } from '../Theme/Typography';
import { moderateScale } from '../Theme/ResposiveSize';
import BackHeader from '../Component/Header/BackHeader';
import { Color } from '../Theme';
import { navigate } from '../Navigator/Utils';
import Button from '../Component/Buttons/Button';
import { useGetProfileQuery } from '../Store/profile/ProfileApiSlice';
import Done from "../assets/svg/Done.svg";

interface Profile {
    personal_details: number;
    education_details: number;
    profession_details: number;
    family_details: number;
    preferences_details: number;
    location_details: number;
    verification_details: number;
    profile_photo: number;
}

const CreationSteps = () => {
    const { data: getProfile, refetch: refetchProfileDetails, isLoading } = useGetProfileQuery({});
    const [steps, setSteps] = useState<Profile | null>(null);

    useEffect(() => {
        if (getProfile) {
            setSteps(getProfile);
        }
    }, [getProfile]);

    const details = useMemo(() => [
        {
            id: '1',
            title: 'Personal Details',
            screen: 'PersonalDetails',
            completed: steps?.personal_details === 1,
            active: steps?.personal_details === 0
        },
        {
            id: '2',
            title: 'Education',
            screen: 'Education',
            completed: steps?.education_details === 1,
            active: steps?.personal_details === 1 && steps?.education_details === 0
        },
        {
            id: '3',
            title: 'Profession',
            screen: 'Profession',
            completed: steps?.profession_details === 1,
            active: steps?.education_details === 1 && steps?.profession_details === 0
        },
        {
            id: '4',
            title: 'Family Details',
            screen: 'FamilyDetails',
            completed: steps?.family_details === 1,
            active: steps?.profession_details === 1 && steps?.family_details === 0
        },
        {
            id: '5',
            title: 'Preferences',
            screen: 'Preferences',
            completed: steps?.preferences_details === 1,
            active: steps?.family_details === 1 && steps?.preferences_details === 0
        },
        {
            id: '6',
            title: 'Location',
            screen: 'Location',
            completed: steps?.location_details === 1,
            active: steps?.preferences_details === 1 && steps?.location_details === 0
        },
        {
            id: '7',
            title: 'Verification',
            screen: 'Verification',
            completed: steps?.verification_details === 1,
            active: steps?.location_details === 1 && steps?.verification_details === 0
        },
        {
            id: '8',
            title: 'Upload Profile Picture',
            screen: 'UploadPictures',
            completed: steps?.profile_photo === 1,
            active: steps?.verification_details === 1 && steps?.profile_photo === 0
        },
    ], [steps]);

    const allStepsCompleted = useMemo(() => {
        return details.every(step => step.completed);
    }, [details]);

    const detailspage = (screen: string, stepId: string) => {
        navigate(screen, {});
        // Simulate updating the step status
        setSteps(prevSteps => {
            if (!prevSteps) return prevSteps;
            const updatedSteps = { ...prevSteps };
            switch (stepId) {
                case '1':
                    updatedSteps.personal_details = 1;
                    break;
                case '2':
                    updatedSteps.education_details = 1;
                    break;
                case '3':
                    updatedSteps.profession_details = 1;
                    break;
                case '4':
                    updatedSteps.family_details = 1;
                    break;
                case '5':
                    updatedSteps.preferences_details = 1;
                    break;
                case '6':
                    updatedSteps.location_details = 1;
                    break;
                case '7':
                    updatedSteps.verification_details = 1;
                    break;
                case '8':
                    updatedSteps.profile_photo = 1;
                    break;
                default:
                    break;
            }
            return updatedSteps;
        });
    };

    const renderItem = ({ item }: { item: typeof details[0] }) => (
        <Pressable onPress={() => detailspage(item.screen, item.id)}>
            <View style={styles.itemContainer}>
                <View style={[
                    styles.iconContainer,
                    item.completed && styles.completedIconContainer,
                    item.active && styles.activeIconContainer
                ]}>
                    {item.completed ? (
                        <Done />
                    ) : (
                        <View style={[styles.emptyCircle, item.active && { backgroundColor: Color.orange }]} />
                    )}
                </View>
                <Text style={[Typography.body, styles.itemTitle, item.active && { color: Color.orange }]}>{item.title}</Text>
                <Icon
                    name="chevron-right"
                    size={24}
                    color={item.active ? Color.orange : Color.chatBg}
                />
            </View>
        </Pressable>
    );

    const renderSeparator = ({ leadingItem }: { leadingItem: typeof details[0] }) => (
        <View style={[styles.separator, leadingItem.completed && { backgroundColor: Color.border }]} />
    );

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={Color.orange} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <BackHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text style={[styles.heading, Typography.main_heading]}>
                        Provide some details to enjoy using divinevivah!
                    </Text>
                    <Text style={[styles.text, Typography.body]}>
                        You're almost ready to go just need your verifications.
                    </Text>

                    <FlatList
                        data={details}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContainer}
                        ItemSeparatorComponent={renderSeparator}
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={() => navigate("SelectInterests", {})}
                    mainStyle={[styles.submitButton, { backgroundColor: !allStepsCompleted ? "#DEDEDE" : Color.orange }]}
                    disabled={!allStepsCompleted}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    content: {
        marginHorizontal: moderateScale(16),
    },
    heading: {
        marginTop: moderateScale(15),
    },
    text: {
        marginTop: moderateScale(20),
        color: Color.chatBg,
    },
    listContainer: {
        marginTop: moderateScale(20),
        marginBottom: moderateScale(15),
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: moderateScale(12),
    },
    iconContainer: {
        height: moderateScale(36),
        width: moderateScale(36),
        borderRadius: moderateScale(18),
        backgroundColor: Color.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    completedIconContainer: {
        backgroundColor: Color.orange,
    },
    activeIconContainer: {
        backgroundColor: Color.orange,
    },
    emptyCircle: {
        height: moderateScale(20),
        width: moderateScale(20),
        borderRadius: moderateScale(10),
        backgroundColor: "#DEDEDE",
    },
    itemTitle: {
        marginLeft: moderateScale(12),
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: Color.border,
    },
    submitButton: {
        marginVertical: moderateScale(40),
        marginHorizontal: moderateScale(16),
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
});

export default CreationSteps;