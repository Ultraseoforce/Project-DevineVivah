import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Idropdown {
    items?: { id: number; issue: string }[],
    selectedValue?: { id: number; issue: string },
    onSelect?: (item: { id: number; issue: string }) => void,
    title?: string,
    placeholder?: string
}

const TicketIssueDropdown = (props: Idropdown) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSelect = (item: { id: number; issue: string }) => {
        if (props.onSelect) {
            props.onSelect(item);
        }
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            {props.title && (
                <Text style={[Typography.title, { marginBottom: props.title ? 5 : -15 }]}>
                    {props.title}
                </Text>
            )}
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setIsVisible(!isVisible)}
            >
                <Text style={[Typography.small, { color: Color.black }]}>
                    {props.selectedValue ? props.selectedValue.issue : props.placeholder}
                </Text>
                <AntDesign name="down" size={16} color="#8391A1" style={styles.icon} />
            </TouchableOpacity>
            {isVisible && (
                <View style={styles.showdropdown}>
                    <FlatList
                        contentContainerStyle={{
                            rowGap: 13,
                            padding: 15,
                        }}
                        nestedScrollEnabled
                        showsVerticalScrollIndicator={false}
                        data={props.items}
                        maxHeight={170}
                        // keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={[Typography.small, { color: Color.black }]}>
                                    {item.issue}
                                </Text>
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
    showdropdown: {
        marginTop: 10,
        elevation: 5,
        alignSelf: "center",
        width: "100%",
        zIndex: 1,
        backgroundColor: Color.inputBg,
        borderRadius: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderRadius: moderateScale(50),
        borderColor: Color.border,
        backgroundColor: Color.inputBg,
        paddingHorizontal: moderateScale(15),
        justifyContent: 'center',
        padding: moderateScale(15),
    },
    item: {
        paddingHorizontal: moderateScale(10),
    },
    icon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: moderateScale(20),
    },
});

export default TicketIssueDropdown;
