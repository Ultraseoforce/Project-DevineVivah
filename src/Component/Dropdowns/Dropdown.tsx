import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import AntDesign from 'react-native-vector-icons/AntDesign';


interface Idropdown {
    items?: any,
    selectedValue?: any,
    onSelect?: any
    title?: string
    placeholder?: string

}

const CustomDropdown = (auto: Idropdown) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSelect = (item: string) => {
        auto.onSelect ? auto.onSelect(item) : null
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={[Typography.title, {marginBottom: auto.title ? 5 : -15}]}>{auto.title}</Text>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setIsVisible(!isVisible)}
            >
                <Text style={[Typography.small,{color: Color.black}]}>
                    {auto.selectedValue ? auto.selectedValue.label : auto.placeholder}
                </Text>
                <AntDesign name="down" size={16} color="#8391A1" style={styles.icon} />
            </TouchableOpacity>

            {isVisible && (
                <View style={styles.dropdownList}>
                    <FlatList
                        data={auto.items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={[Typography.small,{color: Color.black}]}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    dropdown: {
        borderWidth: 1,
        borderRadius: moderateScale(50),
        borderColor: Color.border,
        backgroundColor: Color.inputBg,
        paddingHorizontal: moderateScale(15),
        justifyContent: "center",
        padding: moderateScale(15),
    },
    dropdownList: {
        borderWidth: 1,
        borderColor: Color.border,
        marginTop: 5,
        borderRadius: moderateScale(10),
        backgroundColor: Color.inputBg,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    item: {
        padding: moderateScale(5),
        paddingHorizontal:  moderateScale(20)
    },
    icon: {
        position: "absolute",
        alignSelf: "flex-end",
        right: moderateScale(20)
    }
});

export default CustomDropdown;
