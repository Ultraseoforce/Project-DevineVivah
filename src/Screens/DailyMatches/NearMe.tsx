import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Style } from './CommonStyles';
import Chat from "../../assets/svg/Chat.svg";
import Fire from "../../assets/svg/Fire.svg";
import { Color } from '../../Theme';

const { width } = Dimensions.get('window');
const NearMe = () => {
  
  return (
    <View style={Style.container}>
    <Image
      source={{
        uri: 'https://images.pexels.com/photos/29326581/pexels-photo-29326581/free-photo-of-young-woman-in-uniform-holding-camera-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600',
      }}
      style={Style.image}
    />



    {/* Profile Info Overlay */}
    <View style={Style.profileOverlay}>
      <View style={Style.profileInfo}>
        <View style={Style.nameRow}>
          <Text style={Style.nameText}>Full Name</Text>
          <Text style={Style.ageText}>, 24</Text>
          <Icon name="check-decagram" size={20} color="#FF69B4" />
        </View>

        <View style={Style.detailsRow}>
          <View style={Style.distanceContainer}>
            <Text style={Style.distanceText}>2.4mi</Text>
          </View>
          <View style={Style.membershipContainer}>
            <Text style={Style.membershipText}>
              On Devinevivah since march 2023
            </Text>
          </View>
          <Fire />
        </View>
      </View>

      {/* Action Buttons */}
      <View style={Style.actionButtons}>
        <TouchableOpacity style={[Style.actionButton, Style.chatButton]}>
          <Chat />
        </TouchableOpacity>
        <TouchableOpacity style={[Style.actionButton, Style.likeButton]}>
          <Icon name="heart" size={30} color={Color.orange} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default NearMe

const styles = StyleSheet.create({
    
})