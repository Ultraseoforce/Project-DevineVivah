import { FlatList, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
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
}

const CreationSteps = () => {
    const { data: getProfile, refetch: refetchProfileDetails, isLoading } = useGetProfileQuery<Profile>(undefined, { skip: false });

   useEffect(() => {
    refetchProfileDetails();
   }, [getProfile])

    const details = useMemo(() => [
        {
            id: '1',
            title: 'Personal Details',
            screen: 'PersonalDetails',
            completed: getProfile?.personal_details === 1,
            active: false
        },
        {
            id: '2',
            title: 'Education',
            screen: 'Education',
            completed: getProfile?.education_details === 1,
            active: getProfile?.personal_details === 1 && getProfile?.education_details === 0
        },
        {
            id: '3',
            title: 'Profession',
            screen: 'Profession',
            completed: getProfile?.profession_details === 1,
            active: getProfile?.education_details === 1 && getProfile?.profession_details === 0
        },
        {
            id: '4',
            title: 'Family Details',
            screen: 'FamilyDetails',
            completed: getProfile?.family_details === 1,
            active: getProfile?.profession_details === 1 && getProfile?.family_details === 0
        },
        {
            id: '5',
            title: 'Preferences',
            screen: 'Preferences',
            completed: getProfile?.preferences_details === 1,
            active: getProfile?.family_details === 1 && getProfile?.preferences_details === 0
        },
        {
            id: '6',
            title: 'Location',
            screen: 'Location',
            completed: getProfile?.location_details === 1,
            active: getProfile?.preferences_details === 1 && getProfile?.location_details === 0
        },
        {
            id: '7',
            title: 'Verification',
            screen: 'Verification',
            completed: getProfile?.verification_details === 1,
            active: getProfile?.location_details === 1 && getProfile?.verification_details === 0
        },
    ], [getProfile]);

    const allStepsCompleted = useMemo(() => {
        return details.every(step => step.completed);
    }, [details]);

    const detailspage = (screen: string) => {
        navigate(screen, {});
    };

    const renderItem = ({ item }: { item: typeof details[0] }) => (
        <Pressable onPress={() => detailspage(item.screen)}>
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
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
});

export default CreationSteps;