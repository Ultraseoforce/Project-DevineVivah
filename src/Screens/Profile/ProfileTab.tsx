import { FlatList, Image, Pressable, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import React from 'react';
import RightIcon from 'react-native-vector-icons/Feather';
import { moderateScale, scale } from '../../Theme/ResposiveSize';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import { Color } from '../../Theme';
import { navigate } from '../../Navigator/Utils';
import { useUserLogOutMutation } from '../../Store/auth/authApiSlice';
import Toast from '../../Component/Modal/ToastMessage';
import { useDispatch } from 'react-redux';
import { clearCredentials} from '../../Store/auth/authSlice';

interface Details {
    Data?: any;
}

const ProfileTabCard = (Props: Details) => {
    const { showToast } = Toast();
    const dispatch = useDispatch();
    const [logOut, { isLoading, error, data }] = useUserLogOutMutation();
    const handleLogout = () => {
        Alert.alert(
            'Log Out',
            'Are you sure you want to log out?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async () => {
                        try {
                            const response = await logOut();
                            if (response.data) {
                                dispatch(clearCredentials());
                                showToast(response?.data?.message, { type: 'normal' })
                                console.log('User logged out successfully:', response.data);
                            }
                            navigate('Login', {});
                        } catch (err) {
                            console.error('Logout failed:', err);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const renderItem = ({ item }) => {
        if (item.title === 'LogOut') {
            return (
                <TouchableOpacity activeOpacity={0.4} onPress={handleLogout} style={styles.itemContainer}>
                    <View style={styles.textImageContainer}>
                        <Image source={item.icon} style={styles.imageStyle} resizeMode="contain" />
                        <Text style={[Typography.smallText, { fontSize: FontSize.Font18, lineHeight: 22, marginLeft: moderateScale(13), color: Color.black }]}>{item.title}</Text>
                    </View>
                    <RightIcon name="chevron-right" size={30} color="#292D32" />
                </TouchableOpacity>
            );
        } else {
            return (
                <Pressable onPress={() => item.screen && navigate(item.screen, {})} style={styles.itemContainer}>
                    <View style={styles.textImageContainer}>
                        <Image source={item.icon} style={styles.imageStyle} resizeMode="contain" />
                        <Text style={[Typography.smallText, { fontSize: FontSize.Font18, lineHeight: 22, marginLeft: moderateScale(13), color: Color.black }]}>{item.title}</Text>
                    </View>
                    <RightIcon name="chevron-right" size={30} color="#292D32" />
                </Pressable>
            );
        }
    };

    return (
        <View>
            <FlatList
                data={Props.Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default ProfileTabCard;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 7,
        marginHorizontal: 16,
        backgroundColor: Color.boxBg,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageStyle: {
        height: scale(20),
        width: scale(20),
    },
    textStyle: {
        fontSize: 16,
        fontFamily: 'Profile',
        color: '#000',
        marginLeft: 10,
    },
});
