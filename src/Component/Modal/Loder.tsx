import {View, Text, StyleSheet, Modal, Image} from 'react-native';
import React from 'react';
import {SkypeIndicator} from 'react-native-indicators';
import { Color } from '../../Theme';
const Loder = ({Start}: any ) => {
  return (
    <Modal transparent={true} visible={Start}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          opacity: 10,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SkypeIndicator color={Color.orange} count={6} size={55} />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  mainCotainer: {},
});

export default Loder;
