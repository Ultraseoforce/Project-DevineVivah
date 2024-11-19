import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Family from '../../assets/svg/Family.svg';

const FamilyDetailsCard = () => {
  return (
    <View style={styles.card}>
    <Text style={styles.heading}>Family Details</Text>
    
    <View style={styles.detailRow}>
      <View style={styles.iconContainer}>
        <Family/>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.label}>Parent's Details</Text>
        <Text style={styles.value}>Father(army officer)</Text>
        <Text style={styles.value}>Mother(House Wife)</Text>
      </View>
    </View>
    
    <View style={styles.detailRow}>
      <View style={styles.iconContainer}>
        <Family/>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.label}>Siblings</Text>
        <Text style={styles.value}>1 Brother</Text>
      </View>
    </View>
  </View>
  )
}

export default FamilyDetailsCard

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
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