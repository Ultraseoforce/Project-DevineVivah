import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Color } from '../Theme';
import { Typography } from '../Theme/Typography';
import { moderateScale, scale } from '../Theme/ResposiveSize';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Review = {
  userName: string;
  rating: number;
  comment: string;
  timeAgo: string;
  userImage: string;
};

type ReviewSectionProps = {
  reviews: Review[];
};

const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <AntDesign
        key={index}
        name="star"
        size={12}
        color={index < rating ? Color.orange : Color.chatBg}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={[Typography.samll_bold, styles.heading]}>Reviews</Text>
      {reviews.map((review, index) => (
        <View key={index} style={styles.reviewItem}>
          <Image source={{ uri: review.userImage }} style={styles.userImage} />
          <View style={styles.reviewContent}>
            <View style={styles.reviewHeader}>
              <Text style={[Typography.samll_bold, styles.userName]}>{review.userName}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(review.rating)}
              </View>
            </View>
            <Text style={[Typography.title, styles.comment]}>{review.comment}</Text>
            <Text style={[Typography.small, styles.timeAgo]}>{review.timeAgo}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(15),
  },
  heading: {
    marginBottom: scale(15),
    color: Color.black,
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: scale(20),
  },
  userImage: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    marginRight: scale(10),
  },
  reviewContent: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(5),
  },
  userName: {
    color: Color.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  comment: {
    color: Color.chatBg,
    marginBottom: scale(5),
  },
  timeAgo: {
    color: Color.chatBg,
  },
});

export default ReviewSection;

