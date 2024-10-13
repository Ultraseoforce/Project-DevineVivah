import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'
import YourMatches from '../../Component/Cards/YourMatches'
import FavoritesPeoples from './FavoritesPeoples'
import FavoritesAstrologers from './FavoritesAstrologers'

const MyFavorites = () => {
    const [selected, setSelected] = useState(0);

    const handlePress = (index: any) => {
        setSelected(index);
        // Scroll to the selected item if necessary
    };

    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <BackHeader leftTitle='My Favorites' />
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {['Peoples', 'Astrologers'].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.textContainer,
                                selected === index && styles.selectedTextContainer
                            ]}
                            onPress={() => handlePress(index)}
                        >
                            <Text style={[
                                selected === index ? Typography.samll_bold : Typography.title,
                                {
                                    fontSize: selected === index ? FontSize.Font16 : FontSize.Font16,
                                    color: selected === index ? Color.white : Color.chatBg
                                }
                            ]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
             {selected === 0 ?  <FavoritesPeoples /> : <FavoritesAstrologers/>}
                
        </View>
    )
}

export default MyFavorites

const styles = StyleSheet.create({
    wrapper: {
        padding: moderateScale(16),
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: "#F6F6F6",
        height: moderateScale(50),
        justifyContent: "space-between",
        width: moderateScale(240),
        borderRadius: 50,
        alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
    },
    selectedTextContainer: {
        backgroundColor: '#FF5A60',
        height: moderateScale(48),
        width: moderateScale(130),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
