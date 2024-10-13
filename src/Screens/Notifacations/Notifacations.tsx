// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Notifacations = () => {
//   return (
//     <View>
//       <Text>Notifacations</Text>
//     </View>
//   )
// }

// export default Notifacations

// const styles = StyleSheet.create({})

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import BackHeader from '../../Component/Header/BackHeader';
import { scale } from '../../Theme/ResposiveSize';

const orders = [
    {
        id: '1',
        title: 'Recommendations',
        Details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        Time: '7:07 PM',
        ShowImage: require('../../assets/Image/bigprofile.png'),
    },
    {
        id: '2',
        title: 'Profile View',
        Details: 'Person Name viewed your profile.',
        Time: '7:07 PM',
        ShowImage: require('../../assets/Image/bigprofile.png')
    },
    {
        id: '3',
        title: 'Person Name',
        Details: 'Person Name requested for the conversation. kindly check your Chat to response.',
        Time: '7:07 PM',
        ShowImage: require('../../assets/Image/bigprofile.png')
    },
];

const Notifacations = () => {

    const renderItem = ({ item }: any) => (
        <View style={styles.orderContainer}>
            <Image source={item.ShowImage} style={styles.Image} />
            <View style={styles.orderDetails}>
                <Text style={[styles.orderTitle, Typography.small,{color: Color.black}]}>{item.title}</Text>
                <Text style={[styles.orderStatus, Typography.small,{color: Color.black}]}>{item.Details}</Text>
            </View>
            <Text style={styles.orderDate}>{item.Time}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        
            <BackHeader centerTitle='Notification' />
            <View style={styles.sectionContainer}>
                <FlatList
                    data={orders}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {/* <View style={styles.sectionContainer}>
                <FlatList
                    data={orders.slice(2)}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    sectionContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    orderContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: Color.chatBg,
    },
    orderDetails: {
        flex: 1,
        marginLeft: 10,
    },
    orderTitle: {
        fontSize: 16,
        color: Color.black,
    },
    boldText: {
        fontSize: 15,
        color: Color.black,
    },
    orderStatus: {
        fontSize: 16,
        color: Color.chatBg,
    },
    orderDate: {
        fontSize: 12,
        color: Color.chatBg,
        alignSelf: 'flex-start',
        marginTop: 3,
    },
    Image: {
        height: scale(49),
        width: scale(49),
        borderRadius: scale(50)
    },
});

export default Notifacations;
