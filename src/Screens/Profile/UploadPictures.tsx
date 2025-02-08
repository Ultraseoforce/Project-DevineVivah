// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Image,
//     StyleSheet,
//     Dimensions,
//     SafeAreaView,
//     ActivityIndicator,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { getImagePath } from '../../Component/Utils/helper';
// import { useGetProfileQuery, useUploadProfileImgMutation, useDeleteProfileImgMutation } from '../../Store/auth/authApiSlice';
// import Button from '../../Component/Buttons/Button';
// import Toast from '../../Component/Modal/ToastMessage';
// import Loder from '../../Component/Modal/Loder';
// import BackHeader from '../../Component/Header/BackHeader';
// import { navigate } from '../../Navigator/Utils';
// import { useRoute } from '@react-navigation/native';

// const { width } = Dimensions.get('window');
// const imageWidth = (width - 73) / 2.01;

// type ImageType = 'primary' | 'second' | 'third';

// const UploadPictures = () => {
//     const route = useRoute();
//     const { showToast } = Toast();
//     const { data: userProfileData, isLoading: isProfileLoading } = useGetProfileQuery({});
//     const [uploadPicture] = useUploadProfileImgMutation();
//     const [deleteProfileImg] = useDeleteProfileImgMutation();
//     const [images, setImages] = useState<Record<ImageType, string>>({
//         primary: '',
//         second: '',
//         third: '',
//     });
//     const [loading, setLoading] = useState(false);
//     const [validationError, setValidationError] = useState<string | null>(null);

//     useEffect(() => {
//         if (userProfileData) {
//             setImages({
//                 primary: getImagePath(userProfileData?.profile_photo1 || ""),
//                 second: getImagePath(userProfileData?.profile_photo2 || ""),
//                 third: getImagePath(userProfileData?.profile_photo3 || ""),
//             });
//         }
//     }, [userProfileData]);

//     const handleImagePick = async (type: ImageType) => {
//         const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 });

//         if (result.assets && result.assets[0]?.uri) {
//             const { uri, fileName, type: mimeType } = result.assets[0];
//             setLoading(true);

//             try {
//                 const formData = new FormData();
//                 formData.append('picture_number', getPictureNumber(type));
//                 formData.append('profile_photo', { uri, name: fileName, type: mimeType || 'image/jpeg' });

//                 const response = await uploadPicture(formData).unwrap();
//                 setImages(prev => ({ ...prev, [type]: uri }));
//                 showToast(response?.message, { type: 'normal' });
//             } catch (error) {
//                 console.error("Upload Error:", error);
//                 setImages(prev => ({ ...prev, [type]: '' })); // Remove the image if upload fails
//                 showToast('Failed to upload image. Please try again.', { type: 'error' });
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };

//     const handleDeleteImage = async (type: ImageType) => {
//         setLoading(true);
//         try {
//             const response = await deleteProfileImg({ picture_number: getPictureNumber(type) }).unwrap();
//             setImages(prev => ({ ...prev, [type]: '' }));
//             showToast(response?.message, { type: 'normal' });
//         } catch (error) {
//             console.error("Delete Error:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getPictureNumber = (type: ImageType): string => {
//         return type === 'primary' ? '1' : type === 'second' ? '2' : '3';
//     };

//     const handleSave = () => {
//         if (!images.primary) {
//             setValidationError('Primary image is required.');
//             return;
//         }
//         setValidationError(null);
//         navigate(route.params?.type ? "CreationSteps" : "MainNavigator", {});
//     };

//     const renderImageBox = (type: ImageType, title: string) => {
//         const imageUri = images[type];

//         return (
//             <View style={styles.imageBoxContainer}>
//                 <Text style={styles.title}>{title}</Text>
//                 <TouchableOpacity
//                     style={styles.imageBox}
//                     onPress={() => handleImagePick(type)}
//                 >
//                     {imageUri ? (
//                         <View style={styles.imageContainer}>
//                             <Image source={{ uri: imageUri }} style={styles.image} />
//                             <TouchableOpacity
//                                 style={styles.deleteButton}
//                                 onPress={() => handleDeleteImage(type)}
//                             >
//                                 <View style={styles.deleteIconBackground}>
//                                     <Icon name="trash-2" size={16} color="#fff" />
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                     ) : (
//                         <Icon name="plus" size={24} color="#666" />
//                     )}
//                 </TouchableOpacity>
//             </View>
//         );
//     };

//     if (isProfileLoading || loading) {
//         return (
//             <View style={styles.loaderContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <BackHeader leftTitle='Upload your Pictures' />
//             <View style={styles.container}>
//                 <View style={styles.content}>
//                     <View style={styles.primaryImageContainer}>
//                         {renderImageBox('primary', 'Picture 1(primary)')}
//                     </View>
//                     <View style={styles.row}>
//                         {renderImageBox('second', 'Picture 2')}
//                         {renderImageBox('third', 'Picture 3')}
//                     </View>
//                 </View>
//                 {validationError && <Text style={styles.errorText}>{validationError}</Text>}
//                 <View style={styles.buttonContainer}>
//                     <Button title='SAVE' onPress={() => navigate(route.params?.type != "MainNavigator" ? "CreationSteps" : "MainNavigator", {})} />
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: "white"
//     },
//     container: {
//         flex: 1,
//         padding: 20,
//         justifyContent: 'space-between'
//     },
//     content: {
//         flex: 1
//     },
//     primaryImageContainer: {
//         marginBottom: 20,
//         width: imageWidth
//     },
//     title: {
//         fontSize: 16,
//         marginBottom: 8,
//         color: '#000'
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     imageBoxContainer: {
//         width: imageWidth
//     },
//     imageBox: {
//         width: imageWidth,
//         height: imageWidth,
//         backgroundColor: '#f5f5f5',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 8,
//         overflow: 'hidden'
//     },
//     imageContainer: {
//         width: '100%',
//         height: '100%',
//         position: 'relative'
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover'
//     },
//     deleteButton: {
//         position: 'absolute',
//         top: 8,
//         right: 8
//     },
//     deleteIconBackground: {
//         backgroundColor: '#ff4444',
//         borderRadius: 20,
//         padding: 8
//     },
//     buttonContainer: {
//         marginTop: 20
//     },
//     loaderContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     errorText: {
//         color: 'red',
//         textAlign: 'center',
//         marginTop: 10,
//     },
// });

// export default UploadPictures;


import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import { getImagePath } from '../../Component/Utils/helper';
import { useGetProfileQuery, useUploadProfileImgMutation, useDeleteProfileImgMutation } from '../../Store/auth/authApiSlice';
import Button from '../../Component/Buttons/Button';
import Toast from '../../Component/Modal/ToastMessage';
import Loder from '../../Component/Modal/Loder';
import BackHeader from '../../Component/Header/BackHeader';
import { navigate } from '../../Navigator/Utils';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const imageWidth = (width - 73) / 2.01;

type ImageType = 'primary' | 'second' | 'third';

const UploadPictures = () => {
    const route = useRoute();
    const { showToast } = Toast();
    const { data: userProfileData, isLoading: isProfileLoading } = useGetProfileQuery({});
    const [uploadPicture] = useUploadProfileImgMutation();
    const [deleteProfileImg] = useDeleteProfileImgMutation();
    const [images, setImages] = useState<Record<ImageType, string>>({
        primary: '',
        second: '',
        third: '',
    });
    const [loading, setLoading] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    useEffect(() => {
        if (userProfileData) {
            setImages({
                primary: getImagePath(userProfileData?.profile_photo1 || ""),
                second: getImagePath(userProfileData?.profile_photo2 || ""),
                third: getImagePath(userProfileData?.profile_photo3 || ""),
            });
        }
    }, [userProfileData]);

    const handleImagePick = async (type: ImageType) => {
        const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 });

        if (result.assets && result.assets[0]?.uri) {
            const { uri, fileName, type: mimeType } = result.assets[0];
            setLoading(true);

            try {
                const formData = new FormData();
                formData.append('picture_number', getPictureNumber(type));
                formData.append('profile_photo', { uri, name: fileName, type: mimeType || 'image/jpeg' });

                const response = await uploadPicture(formData).unwrap();
                setImages(prev => ({ ...prev, [type]: uri }));
                showToast(response?.message, { type: 'normal' });
            } catch (error) {
                console.error("Upload Error:", error);
                setImages(prev => ({ ...prev, [type]: '' })); // Remove the image if upload fails
                showToast('Failed to upload image. Please try again.', { type: 'error' });
            } finally {
                setLoading(false);
            }
        }
    };

    const handleDeleteImage = async (type: ImageType) => {
        setLoading(true);
        try {
            const response = await deleteProfileImg({ picture_number: getPictureNumber(type) }).unwrap();
            setImages(prev => ({ ...prev, [type]: '' }));
            showToast(response?.message, { type: 'normal' });
        } catch (error) {
            console.error("Delete Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const getPictureNumber = (type: ImageType): string => {
        return type === 'primary' ? '1' : type === 'second' ? '2' : '3';
    };

    const handleSave = () => {
        if (!images.primary) {
            setValidationError('Primary image is required.');
            return;
        }
        setValidationError(null);
        navigate(route.params?.type ? "CreationSteps" : "MainNavigator", {});
    };

    const renderImageBox = (type: ImageType, title: string) => {
        const imageUri = images[type];

        return (
            <View style={styles.imageBoxContainer}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    style={styles.imageBox}
                    onPress={() => handleImagePick(type)}
                >
                    {imageUri ? (
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: imageUri }} style={styles.image} />
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => handleDeleteImage(type)}
                            >
                                <View style={styles.deleteIconBackground}>
                                    <Icon name="trash-2" size={16} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <Icon name="plus" size={24} color="#666" />
                    )}
                </TouchableOpacity>
            </View>
        );
    };

    if (isProfileLoading || loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <BackHeader leftTitle='Upload your Pictures' />
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.primaryImageContainer}>
                        {renderImageBox('primary', 'Picture 1 (Primary)')}
                    </View>
                    <View style={styles.row}>
                        {renderImageBox('second', 'Picture 2')}
                        {renderImageBox('third', 'Picture 3')}
                    </View>
                </View>
                {validationError && <Text style={styles.errorText}>{validationError}</Text>}
                <View style={styles.buttonContainer}>
                    <Button title='SAVE' onPress={handleSave} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    content: {
        flex: 1
    },
    primaryImageContainer: {
        marginBottom: 20,
        width: imageWidth
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageBoxContainer: {
        width: imageWidth
    },
    imageBox: {
        width: imageWidth,
        height: imageWidth,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    deleteButton: {
        position: 'absolute',
        top: 8,
        right: 8
    },
    deleteIconBackground: {
        backgroundColor: '#ff4444',
        borderRadius: 20,
        padding: 8
    },
    buttonContainer: {
        marginTop: 20
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default UploadPictures;