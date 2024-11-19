import React from 'react'
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { navigate } from '../../Navigator/Utils'
import { useGetMyFavoritePeopleQuery } from '../../Store/profile/ProfileApiSlice'
import { getImagePath } from '../../Component/Utils/helper'

const FavoritesPeoples = () => {
  const { data: MyFavoritePeoples, isLoading } = useGetMyFavoritePeopleQuery()
  const right = require("../../assets/Image/smallTik.png")

  console.log("MyFavoritePeoples", MyFavoritePeoples)

  const renderItem = ({ item }: any) => (
    <Pressable onPress={() => navigate("ViewProfile", {})} style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: getImagePath(item.profile_photo1) }} style={styles.image} />
        <View style={styles.favoriteContainer}>
          <Icon 
            name="heart" 
            size={20} 
            color="#FF4B6A" 
            style={styles.heartIcon}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={[Typography.small, { color: Color.black }]}>{item.member_name}</Text>
        <Image source={right} style={styles.rightIcon} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={Typography.smallText}>Age {item.age},</Text>
        <Text style={Typography.smallText}>Height {item.height}</Text>
      </View>
    </Pressable>
  );
  if (isLoading) {
    return <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />;
}

  return (
    <View style={styles.container}>
      <FlatList
        data={MyFavoritePeoples}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  )
}

export default FavoritesPeoples

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(16),
  },
  columnWrapper: {
    gap: 10,
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 6,
    
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: moderateScale(145),
    borderRadius: 6,
    marginBottom: 5,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 6,
  },
  heartIcon: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  rightIcon: {
    height: 14,
    width: 14,
  }
})