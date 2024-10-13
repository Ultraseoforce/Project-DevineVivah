import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import RightArrow from 'react-native-vector-icons/AntDesign';
import { Typography } from '../../Theme/Typography';
import { Color } from '../../Theme';
import { moderateScaleVertical, scale } from '../../Theme/ResposiveSize';
import { images } from '../../Theme/Image';
import { FontSize } from '../../Theme/FontSize';
import BackHeader from '../../Component/Header/BackHeader';



const poojas = [
  {
    id: '1',
    dateNumber: '13',
    month: 'Oct',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '09 Sep',
  },
  {
    id: '2',
    dateNumber: '13',
    month: 'Oct',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '15 Oct',
  },
  {
    id: '3',
    dateNumber: '13',
    month: 'Oct',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '21 Oct',
  },
  {
    id: '4',
    dateNumber: '13',
    month: 'Nov',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '31 Nov',
  },
];

const BookPooja = () => {
  const renderPoojaItem = ({ item, index }: any) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>

      <View style={[styles.dateContainer, index > 0 && styles.otherDateContainer]}>
        <Text style={[styles.DateNumber, index > 0 && styles.otherDateNumber]}>
          {item.dateNumber}
        </Text>
        <Text style={[styles.month, index > 0 && styles.otherMonth]}>
          {item.month}
        </Text>

        {index < poojas.length - 1 && (
          <View style={[styles.verticalLine, { backgroundColor: index === 0 ? Color.orange : Color.chatBg }]} />
        )}
      </View>

      <View style={{ justifyContent: "space-between", backgroundColor: Color.inputBg, borderRadius: 8, marginLeft: 5 }}>
        <Image source={images.bookPoojaImage} style={styles.PoojaImage} />
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginLeft: 15, marginVertical: 8 }}>
          <View style={{ flexDirection: 'column', justifyContent: "space-between", alignItems: "flex-start", }}>
            <Text style={[styles.DurgaMa, Typography.smallTitle]}>{item.poojaTitle}</Text>
            <Text style={[styles.month, Typography.small]}>{item.poojaDate}</Text>
          </View>
          <Pressable style={{ marginRight: 15, alignSelf: "center" }}>
            <RightArrow name='arrowright' size={24} color={Color.orange} />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <BackHeader centerTitle='Book a Pooja' />
      <View style={{ padding: scale(16), marginBottom: moderateScaleVertical(70)}}>
        <FlatList
          data={poojas}
          renderItem={renderPoojaItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          
        />
      </View>
    </View>
  );
}

export default BookPooja;

const styles = StyleSheet.create({
  DateNumber: {
    backgroundColor: Color.orange,
    borderRadius: 50,
    color: Color.white,
    fontSize: FontSize.Font14,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    // padding:7,
    textAlignVertical: 'center',
  },
  otherDateNumber: {
    backgroundColor: Color.white,
    color: Color.black,
    borderWidth: 1,
    borderColor: Color.chatBg,
  },
  month: {
    fontSize: FontSize.Font14,
    marginTop: 5,
  },
  otherMonth: {
    color: Color.black,
  },
  PoojaImage: {
    height: scale(170),
    width: scale(295),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
  },
  DurgaMa: {
    color: Color.black,
    fontSize: FontSize.Font16,
  },
  verticalLine: {
    position: 'absolute',
    height: '78%',
    width: 2,
    left: '54%',
    top: '63%',
    transform: [{ translateY: -85 }],
  },
  dateContainer: {
    alignSelf: "center",
    alignItems: "center",
    // marginRight: 10,
  },
  otherDateContainer: {
    backgroundColor: Color.white,
    borderColor: Color.chatBg,
    borderRadius: 50,
    padding: 4,
  },
});
