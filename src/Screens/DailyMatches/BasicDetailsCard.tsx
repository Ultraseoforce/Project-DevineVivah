import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Date from '../../assets/svg/Date.svg';
import Martial from '../../assets/svg/Martial.svg';
import Location from '../../assets/svg/Location.svg';
import Religion from '../../assets/svg/Religion.svg';

const Tag = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{children}</Text>
  </View>
);

const InfoRow = ({
  SvgIcon,
  label,
  value,
}: {
  SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}) => (
  <View style={styles.infoRow}>
    <View style={styles.iconContainer}>
      <SvgIcon width={24} height={24} />
    </View>
    <View style={styles.infoContent}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

export default function BasicDetailsCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Basic Details</Text>
      
      <View style={styles.tagsContainer}>
        <Tag>Created by Self</Tag>
        <View style={styles.idTag}>
          <Text style={styles.tagText}>ID : SH02213213</Text>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="content-copy" size={18} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.tagsContainer}>
        <Tag>39 Yrs old</Tag>
        <Tag>Height - 5'0</Tag>
      </View>

      <View style={styles.infoContainer}>
        <InfoRow
          SvgIcon={Date}
          label="Birth Date"
          value="Virgo, Born on 18-Sep 1985"
        />
        <InfoRow
          SvgIcon={Martial}
          label="Martial Status"
          value="Divorced (No Children)"
        />
        <InfoRow
          SvgIcon={Location}
          label="Lives in"
          value="Lives in Surat, Gujarat, India"
        />
        <InfoRow
          SvgIcon={Religion}
          label="Religion & Mother Tongue"
          value="Hindu, Gujarati"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 12,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  idTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  tagText: {
    color: '#333333',
    fontSize: 14,
  },
  infoContainer: {
    marginTop: 20,
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  infoContent: {
    flex: 1,
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
});