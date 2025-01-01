import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Income from '../../assets/svg/Income.svg';
import Profession from '../../assets/svg/Profession.svg';
import Education from '../../assets/svg/Education.svg';

const CareerEducationCard = ({data}: any) => {
  return (
    <View style={styles.card}>
    <Text style={styles.heading}>Career & Education</Text>
    
    <View style={styles.detailRow}>
      <View style={styles.iconContainer}>
        <Profession />
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.label}>Profession</Text>
        <Text style={styles.value}>{data.profession ? data.profession : "-"} </Text>
      </View>
    </View>
    
    <View style={styles.detailRow}>
      <View style={styles.iconContainer}>
        <Income/>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.label}>Annual Income</Text>
        <Text style={styles.value}>{data.annual_income}</Text>
      </View>
    </View>
    
    <View style={styles.detailRow}>
      <View style={styles.iconContainer}>
        <Education/>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.label}>Highest Qualification</Text>
        <Text style={styles.value}>{data.highest_qualification}</Text>
      </View>
    </View>
    
    {/* <View style={styles.detailRow}>
      <View style={styles.iconContainer}>
        <Education/>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.label}>Education Field</Text>
        <Text style={styles.value}>Finance / Commerce</Text>
      </View>
    </View> */}
  </View>
  )
}

export default CareerEducationCard

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