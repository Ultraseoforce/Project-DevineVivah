import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'

const RightArrow = require('../../assets/Image/right.png')

const ticketData = [
  {
    id: '1',
    title: 'Ticket Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    status: 'Solved',
  },
  {
    id: '2',
    title: 'Ticket Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    status: 'Active',
  },
  {
    id: '3',
    title: 'Ticket Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    status: 'Active',
  }
];

const MyTickers = () => {
  const [seletedindex, setSeletedIndex] = useState(0)


  const tab = ["All Tickets", "Solved Tickets", "Active Tickets"]
  const renderTicket = ({ item }) => {
    const isSolved = item.status === 'Solved';

    return (
      <View style={[styles.ticketContainer, isSolved && styles.selectedTicket]}>
        <View style={styles.ticketHeader}>
          <View style={styles.ticketTitleContainer}>
            <Text style={[Typography.samll_bold, { fontSize: FontSize.Font18 }]}>{item.title}</Text>
            <Text style={[isSolved ? styles.solvedStatus : styles.activeStatus, Typography.smallText, { fontSize: FontSize.Font18, lineHeight: 20, color: isSolved ? Color.white : Color.orange }]}>
              {item.status}
            </Text>
          </View>
          <Pressable>
            <Image source={RightArrow} style={styles.rightArrow} />
          </Pressable>
        </View>
        <Text style={[Typography.body, { letterSpacing: 0, }]}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <BackHeader leftTitle='My Tickers' />
      <View style={{ padding: 16 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 15}}>

          <View style={styles.tab}>
            {tab.map((item, index) => (
              <Pressable onPress={() => setSeletedIndex(index)} style={{ borderWidth: 1, borderColor: Color.border, padding: 7, backgroundColor: seletedindex == index ? Color.orange : Color.white, borderRadius: 50, paddingHorizontal: 20 }}>
                <Text style={[Typography.smallTitle, { color: seletedindex == index ? Color.white : Color.black, letterSpacing: 0 }]}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
        <FlatList
          data={ticketData}
          keyExtractor={(item) => item.id}
          renderItem={renderTicket}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyTickers;

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  ticketContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Color.border,
    flexDirection: 'column',
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 15,
  },
  selectedTicket: {
    borderColor: "#FF5A60",
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 10,
  },
  ticketTitleContainer: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  ticketTitle: {
    alignSelf: 'center',
    marginRight: 10,
  },
  solvedStatus: {
    backgroundColor: "#FF5A60",
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 50,
  },
  activeStatus: {
    borderColor: "#FF5A60",
    borderWidth: 1,
    backgroundColor: Color.white,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 50,
  },
  rightArrow: {
    height: 20,
    width: 11.5,
    tintColor: "#FF5A60",
    alignSelf: 'center',
  },
  ticketDescription: {
    fontSize: 14,
    fontFamily: "Urbanist",
    color: Color.black,
  },
});
