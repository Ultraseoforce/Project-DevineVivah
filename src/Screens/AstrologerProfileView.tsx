import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    TextInput,
    StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useRoute } from '@react-navigation/native';
import { useAddFavoriteAstrologerMutation, useGetAstrologerProfileQuery, useGetAstrologerReviewsQuery, useRemoveFavoriteAstrologerMutation } from '../Store/Astrologers/AstrologersApiSlice';
import { formatTimeDifference, getImagePath } from '../Component/Utils/helper';
import Loader from '../Component/Modal/Loader';
import { Color } from '../Theme';
import { navigationRef } from '../Navigator/Utils';
import Toast from '../Component/Modal/ToastMessage';
import { useViewProfileMutation } from '../Store/profile/ProfileApiSlice';
import NotFavorite from "../assets/svg/NotFavorite.svg"
import Favorite from "../assets/svg/Favorite.svg"


const { width } = Dimensions.get('window');
type AstrologerDetailsType = {
    full_name: string;
    hourly_rate: number;
    about_you: string;
    profile_photo1: string;
    profile_photo2: string;
    profile_photo3: string;
};
const AstrologerProfileView = () => {
    const route = useRoute();
    const { showToast } = Toast();
    const AstrologerId = route.params?.id as string | undefined;
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isBioExpanded, setIsBioExpanded] = useState(false);
    const [comment, setComment] = useState('');
    const { data: AstrologerDetails, error, isLoading, refetch: refetchAstrologerDetails } = useGetAstrologerProfileQuery(AstrologerId);
    const { data: astrologerReviews } = useGetAstrologerReviewsQuery(AstrologerId);
    const [addFavoriteAstrologer, { isLoading: addFavoriteLoading }] = useAddFavoriteAstrologerMutation();
    const [removeFavoriteAstrologer, { isLoading: removeFavoriteLoading }] = useRemoveFavoriteAstrologerMutation();

    const [viewProfile, { }] = useViewProfileMutation();


    useEffect(() => {
        refetchAstrologerDetails()
    }, [])
    console.log("AstrologerDetails", AstrologerDetails)

    const profileImages = [
        AstrologerDetails?.profile_photo1,
        AstrologerDetails?.profile_photo2,
        AstrologerDetails?.profile_photo3,
    ].filter(Boolean);




    const handleFavoriteToggle = async () => {
        try {
            if (AstrologerDetails?.is_favorite === 0) {
                const response = await addFavoriteAstrologer(AstrologerId).unwrap();
                showToast((response as { message: string }).message, { type: 'normal' });
            } else {
                const response = await removeFavoriteAstrologer(AstrologerId).unwrap();
                showToast((response as { message: string }).message, { type: 'normal' });
            }
            refetchAstrologerDetails()
        } catch (error) {
            console.log('Error', 'Failed to toggle favorite status');
        }
    };

    const onImageChange = (event: any) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const offset = event.nativeEvent.contentOffset.x;
        const activeIndex = Math.round(offset / slideSize);
        setActiveImageIndex(activeIndex);
    };


    const renderStars = (rating: number) => {
        return (
            <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={16} color="#FFB800" />
                <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            {isLoading ? <Loader isLoading={isLoading} message="Loading, please wait..." /> : <>
                <View style={styles.imageContainer}>
                    <FlatList
                        data={profileImages}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={onImageChange}
                        renderItem={({ item }) => (
                            <Image source={{ uri: getImagePath(item) }} style={styles.profileImage} />
                        )}
                        keyExtractor={(_, index) => index.toString()}
                    />
                    <View style={styles.dotsContainer}>
                        {profileImages.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    { backgroundColor: index === activeImageIndex ? '#FF5A60' : '#E5E5E5' },
                                ]}
                            />
                        ))}
                    </View>
                    <View style={styles.headerButtons}>
                        <TouchableOpacity style={styles.iconButton} onPress={() => navigationRef.goBack()}>
                            <Feather name="chevron-left" size={24} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={handleFavoriteToggle}>
                            {AstrologerDetails?.is_favorite === 0 ? (
                                <Favorite height={40} width={40} />
                            ) : (
                                <NotFavorite height={40} width={40} />
                            )}
                        </TouchableOpacity>


                        {/* {AstrologerDetails.is_favorite === 0 ? <TouchableOpacity activeOpacity={0.7} onPress={handleAddFavorite}>
                            <Favorite height={40} width={40} />
                        </TouchableOpacity>
                            : <TouchableOpacity activeOpacity={0.7} onPress={handleRemoveFavorite}>
                                <NotFavorite height={40} width={40} />
                            </TouchableOpacity>} */}




                    </View>
                </View>
                <View style={styles.profileInfo}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{AstrologerDetails?.full_name}</Text>
                        <MaterialIcons name="verified" size={24} color="#FF5A60" />
                    </View>

                    <Text style={styles.rate}>INR. {AstrologerDetails?.hourly_rate}<Text style={styles.rateUnit}>/hour</Text></Text>

                    <TouchableOpacity style={styles.messageButton}>
                        <Text style={styles.messageButtonText}>Message</Text>
                    </TouchableOpacity>

                    <View style={styles.bioSection}>
                        <Text style={styles.bioLabel}>Bio:</Text>
                        <Text style={styles.bioText}>
                            {isBioExpanded ?
                                AstrologerDetails?.about_you :
                                AstrologerDetails?.about_you}
                            <Text
                                style={styles.seeMoreText}
                                onPress={() => setIsBioExpanded(!isBioExpanded)}
                            >
                                {isBioExpanded ? ' See less' : ' See more'}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Experience</Text>
                    </View>

                    <View style={styles.timelineContainer}>
                        {AstrologerDetails?.experiences?.map((experience, index) => (
                            <View key={experience.id} style={styles.experienceItem}>
                                <View style={styles.timelineLeft}>
                                    <View style={[
                                        styles.iconContainer,
                                        { backgroundColor: '#FF5A60' }
                                    ]}>
                                        <MaterialCommunityIcons
                                            name="check"
                                            size={16}
                                            color="#FFF"
                                        />
                                    </View>
                                    {index !== AstrologerDetails?.experiences.length - 1 && (
                                        <View style={[
                                            styles.timelineLine,
                                            { backgroundColor: '#FF5A60' }
                                        ]} />
                                    )}
                                </View>

                                <View style={styles.contentContainer}>
                                    <Text style={styles.experienceTitle}>{experience.experience_title}</Text>
                                    <Text style={styles.experienceDescription}>{experience.experience_description}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={[styles.container, { marginHorizontal: 16 }]}>
                    <Text style={styles.title}>Reviews</Text>
                    <View>
                        {astrologerReviews?.map((review) => (
                            <View key={review.id} style={styles.reviewCard}>
                                <View style={styles.reviewHeader}>
                                    <View style={styles.userInfo}>
                                        <Image
                                            source={
                                                review.profile_photo1
                                                    ? { uri: getImagePath(review.profile_photo1) }
                                                    : require('../assets/Image/defaultImage.jpg')
                                            }
                                            style={styles.avatar}
                                        />
                                        <Text style={styles.userName}>{review.member_name}</Text>
                                    </View>
                                    <View style={styles.ratingTime}>
                                        {renderStars(review.rating)}
                                        <Text style={styles.timeText}>{formatTimeDifference(review.created_at)}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                    <Text style={styles.commentText}>{review.review}.</Text>
                                    <Text style={styles.replyText}>Reply</Text>
                                </View>
                                <View style={{ borderBottomWidth: 0.5, top: 12, borderColor: Color.border }} />
                            </View>
                        ))}
                    </View>

                    <View style={styles.commentInputContainer}>
                        <View style={{ backgroundColor: "white", flexDirection: "row", borderRadius: 4, paddingHorizontal: 5, alignItems: "center", width: "85%" }}>
                            <TouchableOpacity style={styles.emojiButton}>
                                <EvilIcons name="smile" size={24} color="#666" />
                            </TouchableOpacity>
                            <TextInput
                                style={styles.commentInput}
                                placeholder="Make a Comment"
                                placeholderTextColor="#999"
                                value={comment}
                                onChangeText={setComment}
                            />
                            <TouchableOpacity style={styles.attachmentButton}>
                                <Feather name="paperclip" size={20} color="#666" />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.sendButton}>
                            <Feather name="send" size={20} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </>
            }

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        height: 400,
        position: 'relative',
    },
    profileImage: {
        width,
        height: 400,
    },
    headerButtons: {
        position: 'absolute',
        top: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    iconButton: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotsContainer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    profileInfo: {
        padding: 16,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
    },
    rate: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        marginTop: 8,
    },
    rateUnit: {
        color: '#666',
    },
    messageButton: {
        backgroundColor: '#FF5A60',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    messageButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    bioSection: {
        marginTop: 24,
    },
    bioLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 8,
    },
    bioText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    seeMoreText: {
        color: '#FF5A60',
        fontWeight: '600',
    },

    header: {
        paddingVertical: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },

    timelineContainer: {
        flex: 1,
    },
    experienceItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    timelineLeft: {
        alignItems: 'center',
        marginRight: 12,
    },
    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 8,
        backgroundColor: '#FF5A60',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: '#FF5A60',
        position: 'absolute',
        top: 24,
        bottom: -20,
        left: '50%',
        marginLeft: -1,
    },
    contentContainer: {
        flex: 1,
        paddingBottom: 8,
    },
    experienceTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginBottom: 4,
    },
    experienceDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
        color: '#000',
    },
    filterContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 12,
    },
    filterButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    activeFilterButton: {
        backgroundColor: '#FF5A60',
    },
    filterText: {
        color: '#666',
        fontSize: 14,
    },
    activeFilterText: {
        color: '#FFF',
    },

    reviewCard: {
        marginBottom: 24,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    ratingTime: {
        alignItems: 'flex-end',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
    },
    timeText: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    commentText: {
        fontSize: 14,
        color: '#666',
    },
    replyText: {
        fontSize: 14,
        color: '#FF5A60',
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 12,
    },
    emojiButton: {
        padding: 4,
    },
    commentInput: {
        flex: 1,
        fontSize: 14,
        color: '#000',
    },
    attachmentButton: {
        padding: 4,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF5A60',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default AstrologerProfileView;
