import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Call from '../../assets/svg/Call.svg';
import Email from '../../assets/svg/Email.svg';
import { Color } from '../../Theme';


const ContactDetailsCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Contact Details</Text>
                <Icon name="crown" size={24} color={Color.orange} />
            </View>

            <View style={styles.detailRow}>
                <View style={styles.iconContainer}>
                    <Call />
                </View>
                <View style={styles.detailContent}>
                    <Text style={styles.label}>Contact No.</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}>+91 9023*******</Text>
                        <Icon name="lock" size={20} color="#666" />
                    </View>
                </View>
            </View>

            <View style={styles.detailRow}>
                <View style={styles.iconContainer}>
                <Email />
                </View>
                <View style={styles.detailContent}>
                    <Text style={styles.label}>Email ID</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}>************@gmail.com</Text>
                        <Icon name="lock" size={20} color="#666" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ContactDetailsCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        margin: 16,
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 0.5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 4,
    },
    detailRow: {
        flexDirection: 'row',
        gap: 16,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF6B6B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailContent: {
        flex: 1,
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        color: '#333333',
        fontWeight: '500',
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
})