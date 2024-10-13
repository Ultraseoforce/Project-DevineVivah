import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Pressable } from 'react-native';
import { Color } from '../../Theme'; // Adjust this import according to your project structure
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';

const RadioButton = ({ selected, onPress, label, mainStyle }: any) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, mainStyle]}>
            <View style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonInner} /> : null}
            </View>
            <Text style={[Typography.smallText,{fontSize: FontSize.Font16, color: Color.black, lineHeight: 20, marginLeft: 5}]}>{label}</Text>
        </Pressable>
    );
};

export default RadioButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginHorizontal: 10,
    },
    radioButton: {
        height: 23,
        width: 23,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonInner: {
        height: 18,
        width: 18,
        borderRadius: 50,
        backgroundColor: Color.orange,
    },
    label: {
        marginLeft: 10,
        fontSize: 16,
        color: '#000000',
    }
});
