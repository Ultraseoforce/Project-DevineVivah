import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { FontSize } from '../../Theme/FontSize'
import { navigate } from '../../Navigator/Utils'
import { useAddFavoriteAstrologerMutation, useGetFamousAstrologersQuery, useRemoveFavoriteAstrologerMutation } from '../../Store/Astrologers/AstrologersApiSlice'
import { getImagePath } from '../Utils/helper'
import SvgUri from 'react-native-svg';
import NotFavorite from "../../assets/svg/NotFavorite.svg"
import Favorite from "../../assets/svg/Favorite.svg"
import Toast from '../Modal/ToastMessage'


const FamousAstrologers = () => {
    const { showToast } = Toast();

    const { data: FavoriteAstrologer, isLoading, refetch: refetchAstrologerDetails } = useGetFamousAstrologersQuery({});
    const [removeFavoriteAstrologer, { isLoading: removeFavoriteLoading }] = useRemoveFavoriteAstrologerMutation();
    const [addFavoriteAstrologer, { isLoading: addFavoriteLoading }] = useAddFavoriteAstrologerMutation();


    const right = require("../../assets/Image/smallTik.png")
    const star = require("../../assets/Image/star.png")
    useEffect(() => {
        refetchAstrologerDetails()
    }, [])

    const handleFavoriteToggle = async (AstrologerId: number) => {
        console.log("AstrologerId", AstrologerId)
        try {
            if (FavoriteAstrologer?.is_favorite === 0) {
                const response = await addFavoriteAstrologer(AstrologerId).unwrap();
                showToast((response as { message: string }).message, { type: 'normal' });
            } else {
                const response = await removeFavoriteAstrologer(AstrologerId).unwrap();
                showToast((response as { message: string }).message, { type: 'normal' });
            }
            refetchAstrologerDetails();
        } catch (error) {
            console.log('Error', 'Failed to toggle favorite status');
        }
    };

    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate("AstrologerProfileView", { id: item.id })} style={styles.itemContainer}>
            <Image source={{ uri: getImagePath(item.profile_photo1) }} style={styles.image} />
            <TouchableOpacity activeOpacity={0.7} onPress={() => handleFavoriteToggle(item.id)} style={{ position: "absolute", padding: 7, alignSelf: "flex-end" }}>
                {item?.is_favorite === 0 ? (
                    <Favorite width={27} height={27} />
                ) : (
                    <NotFavorite width={27} height={27} />
                )}
            </TouchableOpacity>

            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                <Text style={[Typography.small, { color: Color.black, alignSelf: "flex-start" }]}>{item.full_name}</Text>
                <Image source={right} style={{ height: 14, width: 14 }} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Image source={star} style={{ height: 15, width: 15 }} />
                <Text style={Typography.smallText}>{item.rating} rating</Text>
            </View>
        </Pressable>

    );

    return (
        <View style={{ marginTop: moderateScale(20) }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={[Typography.title, { color: Color.chatBg }]}>Famous Astrologers</Text>
                <Text style={[Typography.title, { color: Color.orange, fontSize: FontSize.Font16 }]}>View All</Text>
            </View>
            <FlatList
                data={FavoriteAstrologer}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    )
}

export default FamousAstrologers

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: moderateScale(7)
    },
    image: {
        width: moderateScale(138),
        height: moderateScale(136),
        borderRadius: 6,
        marginBottom: 5,
    },
    flatListContent: {
        gap: 15
    },
})