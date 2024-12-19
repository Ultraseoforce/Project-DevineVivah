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

const { width } = Dimensions.get('window');
const imageWidth = (width - 73) / 2.01;

type ImageType = 'primary' | 'second' | 'third';

export default function ImagePickerComponent() {
    const { showToast } = Toast();
    const { data: userProfileData } = useGetProfileQuery();
    const [uploadPictures] = useUploadProfileImgMutation();
    const [deleteProfileImg] = useDeleteProfileImgMutation();
    const [images, setImages] = useState<Record<ImageType, string>>({
        primary: '',
        second: '',
        third: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setImages({
            primary: getImagePath(userProfileData?.profile_photo1 || ""),
            second: getImagePath(userProfileData?.profile_photo2 || ""),
            third: getImagePath(userProfileData?.profile_photo3 || ""),
        });
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

                const response = await uploadPictures(formData).unwrap();
                setImages(prev => ({ ...prev, [type]: uri }));
                showToast(response?.message, { type: 'normal' });
            } catch (error) {
                console.error("Upload Error:", error);
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

    return (
        <SafeAreaView style={styles.safeArea}>
              <BackHeader leftTitle='Upload your Pictures' />
            {loading && <Loder />}
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.primaryImageContainer}>
                        {renderImageBox('primary', 'Picture 1(primary)')}
                    </View>
                    <View style={styles.row}>
                        {renderImageBox('second', 'Picture 2')}
                        {renderImageBox('third', 'Picture 3')}
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='SAVE' onPress={() => navigate("MainNavigator", {})} />
                </View>
            </View>
        </SafeAreaView>
    );
}

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
});
