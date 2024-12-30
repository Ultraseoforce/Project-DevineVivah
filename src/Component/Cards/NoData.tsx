import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const NoData = () => {
    const nodata = require('../../assets/Image/nodata.png');
    const { width, height } = Dimensions.get('window'); 

    return (
        <View style={styles.container}>
            <Image 
                source={nodata} 
                style={[
                    styles.image, 
                    { width: width * 0.6, height: height * 0.7 } 
                ]} 
                resizeMode="contain" 
            />
        </View>
    );
};

export default NoData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
       
    },
});
