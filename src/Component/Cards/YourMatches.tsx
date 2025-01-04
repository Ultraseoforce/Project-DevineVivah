import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';
import { FontSize } from '../../Theme/FontSize';
import { navigate } from '../../Navigator/Utils';
import { useGetFavoritePeopleQuery } from '../../Store/MyFavorite/MyFavoriteApiSlice';
import { getImagePath } from '../Utils/helper';
import Favorite from "../../assets/svg/Favorite.svg";

const YourMatches = () => {
  const { data: myfavoritepeople, isLoading, refetch } = useGetFavoritePeopleQuery({});
  const right = require('../../assets/Image/smallTik.png');
  const defaultImage = require('../../assets/Image/noprofile.jpeg');

  const renderItem = ({ item }: any) => (
    <Pressable
      onPress={() => navigate('ViewProfile', { mId: item.mId })}
      style={styles.itemContainer}
    >
      <Image source={item.profile_photo1 ? { uri: getImagePath(item.profile_photo1) } : defaultImage} style={styles.image} />
      <View style={styles.favoriteContainer}>
        <Favorite width={27} height={27} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{item.member_name}</Text>
        <Image source={right} style={styles.tickIcon} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Height: {item.height}</Text>
        <Text style={styles.detailsText}>Age: {item.age}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Your Favorite</Text>
        <Pressable onPress={() => navigate("MyFavorites", {})}>
          <Text style={styles.viewAllText}>View All</Text>
        </Pressable>
      </View>

      {/* Loader */}
      {isLoading ? (
        <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />
      ) : (
        <FlatList
          data={myfavoritepeople}
          renderItem={renderItem}
          keyExtractor={(item) => item.mId.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageListContainer}
        />
      )}
    </View>
  );
};

export default YourMatches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(10),
  },
  headerTitle: {
    fontSize: FontSize.Font15,
    color: Color.chatBg,
  },
  viewAllText: {
    fontSize: FontSize.Font16,
    color: Color.orange,
    textDecorationLine: 'underline',
  },
  imageListContainer: {
    flexDirection: 'row',
    gap: moderateScale(15),
    // paddingHorizontal: moderateScale(16),
  },
  itemContainer: {
    // marginTop: moderateScale(7),
  },
  image: {
    width: moderateScale(138),
    height: moderateScale(136),
    borderRadius: 6,
    marginBottom: moderateScale(5),
  },
  infoContainer: {
    flexDirection: 'row',
    gap: moderateScale(5),
    alignItems: 'center',
  },
  nameText: {
    fontSize: FontSize.Font14,
    color: Color.black,
    fontWeight: 'bold',
  },
  tickIcon: {
    height: moderateScale(14),
    width: moderateScale(14),
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  detailsText: {
    fontSize: FontSize.Font12,
    color: Color.black,
  },
  favoriteContainer: {
    position: 'absolute',
    top: moderateScale(5),
    right: moderateScale(5),
  },
  loader: {
    marginTop: moderateScale(20),
  },
});