import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const Loader = ({ isLoading, message }: { isLoading: boolean; message?: string }) => {
  if (!isLoading) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FF5A60" />
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    // ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: '#333333',
  },
});

export default Loader;
