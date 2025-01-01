// import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Style } from './CommonStyles';
// import { Color } from '../../Theme';
// import Chat from "../../assets/svg/Chat.svg";
// import Fire from "../../assets/svg/Fire.svg";

// const { width } = Dimensions.get('window');
// const MyMatches = () => {
//   return (
//     <View style={Style.container}>
//     <Image
//       source={{
//         uri: 'https://images.pexels.com/photos/29326581/pexels-photo-29326581/free-photo-of-young-woman-in-uniform-holding-camera-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600',
//       }}
//       style={Style.image}
//     />

//     {/* Profile Info Overlay */}
//     <View style={Style.profileOverlay}>
//       <View style={Style.profileInfo}>
//         <View style={Style.nameRow}>
//           <Text style={Style.nameText}>Full Name</Text>
//           <Text style={Style.ageText}>, 24</Text>
//           <Icon name="check-decagram" size={20} color="#FF69B4" />
//         </View>

//         <View style={Style.detailsRow}>
//           <View style={Style.distanceContainer}>
//             <Text style={Style.distanceText}>2.4mi</Text>
//           </View>
//           <View style={Style.membershipContainer}>
//             <Text style={Style.membershipText}>
//               On Devinevivah since march 2023
//             </Text>
//           </View>
//           <Fire />
//         </View>
//       </View>

//       {/* Action Buttons */}
//       <View style={Style.actionButtons}>
//         <TouchableOpacity style={[Style.actionButton, Style.chatButton]}>
//           <Chat />
//         </TouchableOpacity>
//         <TouchableOpacity style={[Style.actionButton, Style.likeButton]}>
//           <Icon name="heart" size={30} color={Color.orange} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
//   )
// }

// export default MyMatches

// const styles = StyleSheet.create({
//     container: {
//         height: width * 1.5,
//         borderRadius: 8,
//         overflow: 'hidden',
//         marginHorizontal: 16
//       },
//       image: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//       },


//       profileOverlay: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         padding: 16,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//       },
//       profileInfo: {
//         marginBottom: 16,
//       },
//       nameRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 8,
//       },
//       nameText: {
//         color: '#fff',
//         fontSize: 24,
//         fontWeight: 'bold',
//       },
//       ageText: {
//         color: '#fff',
//         fontSize: 24,
//         marginRight: 8,
//       },
//       detailsRow: {
//         flexDirection: 'column',
//         gap: 8,
//       },
//       distanceContainer: {
//         backgroundColor: 'rgba(255,255,255,0.2)',
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         borderRadius: 12,
//         alignSelf: 'flex-start',
//       },
//       distanceText: {
//         color: '#fff',
//         fontSize: 14,
//       },
//       membershipContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'rgba(255,255,255,0.2)',
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         borderRadius: 12,
//         alignSelf: 'flex-start',
//         gap: 8,
//       },
//       membershipText: {
//         color: '#fff',
//         fontSize: 14,
//       },
//       actionButtons: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         gap: 16,
//       },
//       actionButton: {
//         flex: 1,
//         height: 50,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       chatButton: {
//         backgroundColor: 'rgba(0,0,0,0.6)',
//       },
//       likeButton: {
//         backgroundColor: '#E94057',
//       },
// })


import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Style } from './CommonStyles';
import Chat from "../../assets/svg/Chat.svg";
import Fire from "../../assets/svg/Fire.svg";
import { Color } from '../../Theme';
import { useGetMyMatchesProfilesQuery } from '../../Store/profile/DailyMatchApiSlice';
import NoData from '../../Component/Cards/NoData';
import { getImagePath } from '../../Component/Utils/helper';

const { width } = Dimensions.get('window');

const MyMatches = () => {
  const { data: MyMatchesData, isLoading, error } = useGetMyMatchesProfilesQuery({});
  const defaultImage = require('../../assets/Image/noprofile.jpeg');

  if (isLoading) {
    return <ActivityIndicator size="large" color={Color.orange} style={styles.loader} />;
  }




  const renderItem = ({ item }) => (
    <View style={Style.container}>
      <Image
        source={item.profile_photo1 ? { uri: getImagePath(item.profile_photo1) } : defaultImage}
        style={Style.image}
      />
      <View style={Style.profileOverlay}>
        <View style={Style.profileInfo}>
          <View style={Style.nameRow}>
            <Text style={Style.nameText}>{item.member_name}</Text>
            <Text style={Style.ageText}>, {item.age}</Text>
            <Icon name="check-decagram" size={20} color="#FF69B4" />
          </View>
          <View style={Style.detailsRow}>
            <View style={Style.distanceContainer}>
              <Text style={Style.distanceText}>{item.divinevivah_profile_number}</Text>
            </View>
            <View style={Style.membershipContainer}>
              <Text style={Style.membershipText}>
                {item.on_app_since}
              </Text>
            </View>
            <Fire />
          </View>
        </View>
        <View style={Style.actionButtons}>
          <TouchableOpacity style={[Style.actionButton, Style.chatButton]}>
            <Chat />
          </TouchableOpacity>
          {item.is_favorite === 1 ? <TouchableOpacity style={[Style.actionButton, Style.likeButton]}>
            <Icon name="heart" size={30} color={Color.orange} />
          </TouchableOpacity>
            :
            <TouchableOpacity style={[Style.actionButton, { backgroundColor: "#FFFFFF", opacity: 0.5 }]}>
              <Icon name="heart" size={30} color={Color.white} />
            </TouchableOpacity>}
        </View>
      </View>
    </View>
  );

  return (
    <View>
      {MyMatchesData.length === 0 ? <NoData /> : null}
      <FlatList
        data={MyMatchesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.mId}
      />
    </View>
  );
};

export default MyMatches;

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});