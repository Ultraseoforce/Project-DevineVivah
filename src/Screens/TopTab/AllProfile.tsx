import React, { useCallback, useMemo } from "react";
import { FlatList, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { height, moderateScale, width } from "../../Theme/ResposiveSize";
import { Color } from "../../Theme";
import { Typography } from "../../Theme/Typography";
import { FontSize } from "../../Theme/FontSize";
import { getImagePath } from "../../Component/Utils/helper";
import NotFavorite from "../../assets/svg/NotFavorite.svg";
import Favorite from "../../assets/svg/Favorite.svg";
import { useAddFavoriteProfileMutation, useRemoveFavoriteProfileMutation } from "../../Store/profile/ProfileApiSlice";
import Toast from "../../Component/Modal/ToastMessage";

// Define Profile type
interface Profile {
  mId: string;
  profile_photo1?: string;
  divinevivah_profile_number: string;
  name: string;
  education_level: string;
  city_name: string;
  state_name: string;
  country_name: string;
  dob: string;
  is_favorite: number;
  Id: string;
}

interface AllProfileProps {
  profilesData: Profile[];
}

const AllProfile: React.FC<AllProfileProps> = ({ profilesData }) => {
  const { showToast } = Toast();
  const defaultImage = require('../../assets/Image/noprofile.jpeg');

  const [removeFavoriteProfile] = useRemoveFavoriteProfileMutation();
  const [addFavoriteProfile] = useAddFavoriteProfileMutation();

  const handleFavoriteToggle = useCallback(async (item: Profile) => {
    try {
      if (item.is_favorite === 0) {
        const response = await addFavoriteProfile({fav_member_id:item.mId}).unwrap();
        showToast((response as { message: string }).message, { type: 'normal' });
      } else {
        const response = await removeFavoriteProfile(item.Id).unwrap();
        showToast((response as { message: string }).message, { type: 'normal' });
      }
    } catch (error) {
      console.error("Error", "Failed to toggle favorite status");
    }
  }, [addFavoriteProfile, removeFavoriteProfile, showToast]);

  const renderItem = useCallback(({ item }: { item: Profile }) => (
    <View style={styles.itemContainer}>
      <Image 
        source={item.profile_photo1 ? { uri: getImagePath(item.profile_photo1) } : defaultImage}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.tagContainer}>
        <Text style={[Typography.samll_bold, { color: Color.white }]}>{item.divinevivah_profile_number}</Text>
      </View>
      <TouchableOpacity style={styles.viewContainer} activeOpacity={0.7} onPress={() => handleFavoriteToggle(item)}>
        {item.is_favorite !== 0 ? <Favorite height={40} width={40} /> : <NotFavorite height={40} width={40} />}
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftContainer}>
          <Text style={[Typography.samll_bold, { color: Color.white, fontSize: FontSize.Font24, lineHeight: 25 }]}>{item.name}</Text>
          <Text style={[Typography.small, { color: Color.white }]}>{item.education_level}</Text>
          <Text style={[Typography.small, { color: Color.white }]}>{`${item.city_name}, ${item.state_name}, ${item.country_name}`}</Text>
        </View>
        <Text style={[Typography.small, { color: Color.white }]}>{item.dob}</Text>
      </View>
    </View>
  ), [handleFavoriteToggle]);

  const memoizedRenderItem = useMemo(() => renderItem, [renderItem]);

  return (
    <FlatList
      data={profilesData}
      renderItem={memoizedRenderItem}
      keyExtractor={(item) => item.mId}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: moderateScale(15),
    alignItems: "center",
  },
  imageStyle: {
    height: moderateScale(340),
    width: Dimensions.get("screen").width - 8,
    borderRadius: 20,
  },
  tagContainer: {
    position: "absolute",
    top: 15,
    left: moderateScale(32),
    backgroundColor: Color.orange,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 19,
  },
  viewContainer: {
    position: "absolute",
    top: moderateScale(12),
    right: moderateScale(40),
  },
  bottomContainer: {
    position: "absolute",
    bottom: 10,
    left: 32,
    right: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLeftContainer: {
    flexDirection: "column",
    gap: 10,
  },
});

export default React.memo(AllProfile);
