import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Theme';
import ChatHeader from '../../Component/Header/ChatHeader';
import ChatModal from '../../Component/Modal/Modal';

const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    return hours + ':' + minutes + ' ' + ampm;
};

const LiveChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello!", sent: false, time: "14:30 AM" },
        { id: 2, text: "React Native Paper is the cross-platform UI kit library containing a collection of.", sent: false, time: "14:31 PM" },
        { id: 3, text: "React Native Paper is the cross-platform UI kit and production-ready components, which by default are following and respecting the Google’s Material Design guidelines.", sent: true, time: "14:32 AM" },
        { id: 4, text: "What's up?", sent: true, time: "14:33 PM" },
        { id: 5, text: "Hello!", sent: false, time: "14:30 AM" },
        { id: 6, text: "React Native Paper is the cross-platform UI kit library containing a collection of customizable and production-ready components, which by default are following and respecting the Google’s Material Design guidelines.", sent: false, time: "14:31 PM" },
        { id: 7, text: "React Native Paper is the cross-platform UI kit library containing a collection of customizable and production-ready components, which by default are following and respecting the Google’s Material Design guidelines React Native Paper is the cross-platform UI kit library containing a collection of customizable and production-ready components, which by default are following and respecting the Google’s Material Design guidelines.", sent: true, time: "14:32 AM" },
        { id: 8, text: "What's up?", sent: true, time: "14:33 PM" },
    ]);

    const [newMessage, setNewMessage] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const flatListRef = useRef(null);

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const newMessageObj = {
                id: messages.length + 1,
                text: newMessage,
                sent: true,
                time: getCurrentTime(),
            };
            setMessages([...messages, newMessageObj]);
            setNewMessage('');
        }
    };

    const renderMessage = ({ item }: any) => (
        <View style={[styles.messageContainer, item.sent ? styles.sentContainer : styles.receivedContainer]}>
            <View style={[styles.messageBubble, item.sent ? styles.sent : styles.received]}>
                <Text style={styles.messageText}>{item.text}</Text>
            </View>
            <Text style={[styles.timeText, item.sent ? styles.sentTime : styles.receivedTime]}>{item.time}</Text>
        </View>
    );

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

            <ChatHeader toggleModal={toggleModal} />

            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={item => item.id.toString()}
                style={styles.chatList}
                ref={flatListRef}
            />

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Type a message..."
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Icon name="send-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ChatModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    chatList: {
        paddingHorizontal: 10,
        marginBottom: 10,
        flex: 1,
    },
    messageContainer: {
        marginVertical: 3,
    },
    messageBubble: {
        maxWidth: '70%',
        padding: 10,
    },
    sentContainer: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    receivedContainer: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
    },
    sent: {
        backgroundColor: Color.orange,
        borderRadius: 8,
        borderTopRightRadius: 0,
    },
    received: {
        backgroundColor: Color.chatBg,
        borderRadius: 8,
        borderTopLeftRadius: 0,
    },
    messageText: {
        fontSize: 16,
        color: Color.white,
    },
    timeText: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
    },
    sentTime: {
        textAlign: 'right',
    },
    receivedTime: {
        textAlign: 'left',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#f1f0f0',
        borderRadius: 30,
        fontSize: 16,
        padding: 15
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: Color.orange,
        padding: 10,
        borderRadius: 50,
    },
});

export default LiveChat;
