import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { Typography } from '../../Theme/Typography';
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate } from '../../Navigator/Utils';
import { useGetFavoriteAstrologerQuery } from '../../Store/profile/ProfileApiSlice';
import { getImagePath } from '../../Component/Utils/helper';

const FamousAstrologers = () => {
    const right = require("../../assets/Image/smallTik.png");
    const star = require("../../assets/Image/star.png");

    const { data: MyFavoriteAstrologer, isLoading } = useGetFavoriteAstrologerQuery();
    console.log("MyFavoriteAstrologer",MyFavoriteAstrologer)

    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate("ViewProfile", {})} style={styles.itemContainer}>
            <Image source={{ uri: getImagePath(item.profile_photo1) }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={[Typography.small, { color: Color.black }]}>{item.full_name}</Text>
                <Image source={right} style={styles.rightIcon} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Image source={star} style={{ height: 15, width: 15 }} />
                <Text style={Typography.smallText}>4.5 rating</Text>
            </View>
        </Pressable>
    );

    if (isLoading) {
        return <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={MyFavoriteAstrologer}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between', alignItems: 'center' }}
            />
        </View>
    );
};

export default FamousAstrologers;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(16),
    },
    itemContainer: {
        width: (width / 2) - moderateScale(24),
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: moderateScale(145),
        borderRadius: 6,
        marginBottom: 5,
    },
    textContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    rightIcon: {
        height: 14,
        width: 14,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
