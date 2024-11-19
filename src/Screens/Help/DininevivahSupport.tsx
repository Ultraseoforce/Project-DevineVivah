import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import BackHeader from '../../Component/Header/BackHeader';
import { useRoute } from '@react-navigation/native';
import { useAddTicketReplyMutation, useGetTicketdetailsMutation } from '../../Store/HelpAndSupport/MyTickersApiSlice';

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
}

export default function DininevivahSupport() {
  const route = useRoute();
  const [ticketData, setTicketData] = useState([]);
  const selectedTicket = route.params.item;
  const [message, setMessage] = useState('');

  const [getTicketdetails, { isLoading }] = useGetTicketdetailsMutation();
  const [ticketReply, { }] = useAddTicketReplyMutation();

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const respo = await getTicketdetails(selectedTicket.id).unwrap();
        if (respo?.status === true) {
          setTicketData(respo.data);
        }
      } catch (error) {
        console.log("Error fetching ticket details:", error);
      }
    };
    fetchTicketDetails();
  }, [selectedTicket.id]);

  console.log("selectedTicket", selectedTicket)

  const formatMessages = (messagesData) => {
    return messagesData.map((item, index) => ({
      id: index.toString(),
      text: item.text,
      timestamp: new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: item.user_id !== 1,
    }));
  };
  const handleSend = async () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSent: true,
      };
      console.log("newMessage", newMessage);

      // Update the ticketData state with the new message
      setTicketData(prevTicketData => [...prevTicketData, newMessage]);
      setMessage('');

      const request = {
        ticket_id: selectedTicket.id,
        text: newMessage.text,
      };

      try {
        const respo = await ticketReply(request).unwrap();
        if (respo?.status === true) {
          console.log("Response:", respo);
        } else {
          console.log("Unexpected response:", respo);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };


  const handleImagePicker = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets && result.assets[0]) {
      console.log('Selected image:', result.assets[0]);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[
      styles.messageContainer,
      item.isSent ? styles.sentMessage : styles.receivedMessage
    ]}>
      <Text style={[styles.messageText, item.isSent ? styles.sentMessageText : styles.receivedMessageText]}>
        {item.text}
      </Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader leftTitle='Dininevivah Support' />

      {isLoading ? <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF4D4F" />
      </View>
        :
        <FlatList
          data={formatMessages(ticketData)}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
        />}

      {selectedTicket.ticket_status != 1 ? <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleImagePicker} style={styles.iconButton}>
            <Icon name="images-outline" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSend} style={styles.iconButton}>
            <Icon name="send" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </View> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 4,
    padding: 12,
    borderRadius: 20,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FF4D4F',
    borderBottomRightRadius: 4,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#808080',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  sentMessageText: {
    color: '#fff',
  },
  receivedMessageText: {
    color: '#fff',
  },
  timestamp: {
    fontSize: 12,
    color: '#ddd',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
