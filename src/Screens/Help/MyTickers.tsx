import { FlatList, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Color } from '../../Theme';
import BackHeader from '../../Component/Header/BackHeader';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import Right from "../../assets/svg/Right.svg";
import { useGetAllTicketQuery } from '../../Store/HelpAndSupport/MyTickersApiSlice';
import { navigate } from '../../Navigator/Utils';

const MyTickets = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ticketStatus, setTicketStatus] = useState<null | number>(null);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  const { data: getAllTicket, error, isLoading } = useGetAllTicketQuery(ticketStatus);
  const tab = ["All Tickets", "Solved Tickets", "Active Tickets"];

  useEffect(() => {
    if (selectedIndex === 0) {
      setTicketStatus(null); // Show all tickets
    } else if (selectedIndex === 1) {
      setTicketStatus(1); // Show solved tickets
    } else if (selectedIndex === 2) {
      setTicketStatus(0); // Show active tickets
    }
  }, [selectedIndex]);



  const renderTicket = ({ item }: any) => {
    const isSelected = item.id === selectedTicketId;

    return (
      <Pressable
        onPress={() => {
          setSelectedTicketId(item.id);
          navigate("DininevivahSupport", {item});
        }}
        style={[styles.ticketContainer, isSelected && styles.selectedTicket]}
      >
        <View style={styles.ticketHeader}>
          <View style={styles.ticketTitleContainer}>
            <Text style={[Typography.samll_bold, { fontSize: FontSize.Font18 }]}>
              {item.ticket_title}
            </Text>
            <Text
              style={[
                item.ticket_status === 1 ? styles.solvedStatus : styles.activeStatus,
                Typography.smallText,
                {
                  fontSize: FontSize.Font18,
                  lineHeight: 20,
                  color: item.ticket_status === 1 ? Color.white : Color.orange,
                },
              ]}
            >
              {item.ticket_status === 1 ? "Solved" : "Active"}
            </Text>
          </View>
          <Pressable>
            <Right />
          </Pressable>
        </View>
        <Text style={[Typography.body, { letterSpacing: 0 }]}>
          {item.ticket_message}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <BackHeader leftTitle='My Tickets' />
      <View style={{ padding: 16, flex: 1 }}>
        <View style={styles.tab}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 5 }}>
            {tab.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedIndex(index)}
                style={{
                  borderWidth: 1,
                  borderColor: Color.border,
                  padding: 7,
                  backgroundColor: selectedIndex === index ? Color.orange : Color.white,
                  borderRadius: 50,
                  paddingHorizontal: 20
                }}
              >
                <Text style={[
                  Typography.smallTitle,
                  {
                    color: selectedIndex === index ? Color.white : Color.black,
                    letterSpacing: 0
                  }
                ]}>
                  {item}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        {isLoading ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={Color.orange} />
          </View>
        ) : getAllTicket && getAllTicket.length > 0 ? (
          <FlatList
            data={getAllTicket}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTicket}
            showsVerticalScrollIndicator={false}

          />
        ) : (
          <View style={styles.centered}>
            <Text>No tickets found.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  ticketContainer: {
    padding: 16,
    backgroundColor: Color.white,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.border,
  },
  selectedTicket: {
    borderColor: Color.orange,
    borderWidth: 1,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ticketTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  solvedStatus: {
    backgroundColor: Color.orange,
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 50,
    textAlign: "center"
  },
  activeStatus: {
    borderColor: Color.orange,
    borderWidth: 1,
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 50,
    textAlign: "center"
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTickets;

