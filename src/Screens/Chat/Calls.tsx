import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import VideoCall from '../../assets/svg/Video.svg';
import VoiceCall from '../../assets/svg/Voice.svg';


const ProfileImage = require('../../assets/Image/Notification1.png');

const chatData = [
  {
    id: 1,
    name: 'Kyle Ayyress',
    time: 'Today, 12:19',
    Duration: '15 min 32 sec',
    image: require('../../assets/Image/VideoCall.png'),
    type: 'video',
  },
  {
    id: 2,
    name: 'Missed Call',
    status: 'missed (3) calls',
    image: require('../../assets/Image/VideoCall.png'),
    type: 'video',
  },
  {
    id: 3,
    name: 'Kyle Ayyress',
    time: 'Today, 12:19',
    Duration: '15 min 32 sec',
    image: require('../../assets/Image/voicecall.png'),
    type: 'voice',
  },
  {
    id: 4,
    name: 'Kyle Ayyress',
    status: 'missed (3) calls',
    image: require('../../assets/Image/VideoCall.png'),
    type: 'video',
  },
  {
    id: 5,
    name: 'Kyle Ayyress',
    time: 'Today, 12:19',
    Duration: '15 min 32 sec',
    image: require('../../assets/Image/voicecall.png'),
    type: 'voice',
  },
  {
    id: 6,
    name: 'Kyle Ayyress',
    status: 'missed (3) calls',
    image: require('../../assets/Image/voicecall.png'),
    type: 'voice',
  },
  {
    id: 7,
    name: 'Kyle Ayyress',
    time: 'Today, 12:19',
    Duration: '15 min 32 sec',
    image: require('../../assets/Image/VideoCall.png'),
    type: 'video',
  },
];

const Calls = () => {
  const handlePress = (item) => {
    console.log('User Details:', item);
  };

  const renderItem = ({ item }: any) => {
    // Define the styles for each image type
    const iconStyle = item.type === 'video' ? styles.videoCallIcon : styles.voiceCallIcon;

    return (
      <View style={styles.chatContainer}>
        <View style={styles.chatRow}>
          <Image source={ProfileImage} style={styles.profileImage} />
          <View style={styles.chatDetails}>
            <Text style={[Typography.smallTitle, {letterSpacing: 0}]}>
              {item.name}
            </Text>
            {item.time && (
              <Text style={styles.infoText}>
                <Text style={[Typography.smallTitle, { color: Color.black, fontSize: FontSize.Font12 }]}>Time: </Text>{item.time}
              </Text>
            )}
            {item.Duration && (
              <Text style={styles.infoText}>
                <Text style={[Typography.smallTitle, { color: Color.black, fontSize: FontSize.Font12, letterSpacing: 0 }]}>Duration:</Text> {item.Duration}
              </Text>
            )}
            {item.status && (
              <Text style={[styles.statusText, Typography.small]}>
                {item.status}
              </Text>
            )}
          </View>
        </View>
        <Pressable
          style={styles.iconContainer}
          onPress={() => handlePress(item)} // Call handlePress with item details
        >
          <Image source={item.image} style={iconStyle} />
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  listContent: {
    padding: moderateScale(16),
  },
  chatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Color.border,
    paddingVertical: moderateScale(12),
    alignItems: 'center',
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  chatDetails: {
    marginLeft: moderateScale(12),
    // flex: 1,
  },
  userName: {
   
  },
  infoText: {
    color: Color.chatBg,
    fontSize: FontSize.Font14,
    // marginTop: 2,
  },
  statusText: {
    color: Color.orange,
    fontSize: FontSize.Font14,
    marginTop: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoCallIcon: {
    height: moderateScale(29),
    width: moderateScale(29),
  },
  voiceCallIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
});
