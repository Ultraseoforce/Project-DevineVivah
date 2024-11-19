import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function AboutCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...`;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About "Full Name"</Text>
      <View>
        <Text style={styles.description} numberOfLines={isExpanded ? undefined : 4}>
          {fullText}
        </Text>
        <TouchableOpacity 
          onPress={() => setIsExpanded(!isExpanded)}
          style={styles.viewMoreButton}
        >
          <Text style={styles.viewMoreText}>
            {isExpanded ? 'View less' : 'View more'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    margin: 16,
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
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    marginBottom: 8,
  },
  viewMoreButton: {
    alignSelf: 'flex-start',
  },
  viewMoreText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '500',
  },
});