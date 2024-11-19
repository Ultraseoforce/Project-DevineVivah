import React, { useState } from 'react'
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { moderateScaleVertical, scale } from '../../Theme/ResposiveSize'
import { images } from '../../Theme/Image'
import { FontSize } from '../../Theme/FontSize'
import BackHeader from '../../Component/Header/BackHeader'

const tabs = [
  { id: 'all', label: 'All', icon: 'apps' },
  { id: 'love', label: 'Love', icon: 'heart' },
  { id: 'marriage', label: 'Marriage', icon: 'ring' },
  { id: 'career', label: 'Career', icon: 'briefcase-variant' },
]

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
]

const BookPooja = () => {
  const [activeTab, setActiveTab] = useState('all')

  const renderTab = ({ item }) => (
    <Pressable
      onPress={() => setActiveTab(item.id)}
      style={[styles.tabButton, activeTab === item.id && styles.activeTabButton]}
    >
      <MaterialIcon
        name={item.icon}
        size={18}
        color={activeTab === item.id ? Color.white : Color.orange}
      />
      <Text style={[
        styles.tabText,
        activeTab === item.id && styles.activeTabText
      ]}>
        {item.label}
      </Text>
    </Pressable>
  )

  const renderPoojaItem = ({ item, index }) => (
    <View style={styles.poojaItemContainer}>
      <View style={styles.timelineContainer}>
        <View style={[
          styles.dateContainer,
          index > 0 && styles.otherDateContainer
        ]}>
          <Text style={[
            styles.dateNumber,
            index > 0 && styles.otherDateNumber
          ]}>
            {item.dateNumber}
          </Text>
          <Text style={[
            styles.monthText,
            index > 0 && styles.otherMonth
          ]}>
            {item.month}
          </Text>
        </View>
        {index < poojas.length - 1 && (
          <View style={[
            styles.verticalLine,
            { backgroundColor: index === 0 ? Color.orange : Color.chatBg }
          ]} />
        )}
      </View>

      <View style={styles.cardContainer}>
        <Image source={images.bookPoojaImage} style={styles.poojaImage} />
        <View style={styles.cardContent}>
          <View>
            <Text style={[styles.poojaTitle, Typography.smallTitle]}>{item.poojaTitle}</Text>
            <Text style={[styles.poojaDate, Typography.small]}>{item.poojaDate}</Text>
          </View>
          <Pressable style={styles.arrowContainer}>
            <Icon name="arrowright" size={24} color={Color.orange} />
          </Pressable>
        </View>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <BackHeader centerTitle="Book a Pooja" />
      
      <View style={styles.tabContainer}>
        <FlatList
          data={tabs}
          renderItem={renderTab}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabList}
        />
      </View>

      <FlatList
        data={poojas}
        renderItem={renderPoojaItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.poojaList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  tabContainer: {
    paddingVertical: 12,
  },
  tabList: {
    paddingHorizontal: 16,
    gap: 12,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.orange,
    gap: 6,
  },
  activeTabButton: {
    backgroundColor: Color.orange,
  },
  tabText: {
    color: Color.orange,
    fontSize: FontSize.Font14,
    fontWeight: '500',
  },
  activeTabText: {
    color: Color.white,
  },
  poojaList: {
    padding: scale(16),
    marginBottom: moderateScaleVertical(70),
  },
  poojaItemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineContainer: {
    alignItems: 'center',
    width: 60,
  },
  dateContainer: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 25,
    backgroundColor: Color.orange,
  },
  otherDateContainer: {
    backgroundColor: Color.white,
    borderColor: Color.chatBg,
    borderWidth: 1,
    padding: 4,
  },
  dateNumber: {
    fontSize: FontSize.Font14,
    fontWeight: '600',
    color: Color.white,
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  otherDateNumber: {
    color: Color.black,
  },
  monthText: {
    fontSize: FontSize.Font14,
    color: Color.white,
    marginTop: 4,
  },
  otherMonth: {
    color: Color.black,
  },
  verticalLine: {
    position: 'absolute',
    height: '78%',
    width: 2,
    left: '54%',
    top: '63%',
    transform: [{ translateY: -85 }],
  },
  cardContainer: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: Color.inputBg,
    borderRadius: 8,
    overflow: 'hidden',
  },
  poojaImage: {
    width: '100%',
    height: scale(170),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginVertical: 8,
  },
  poojaTitle: {
    color: Color.black,
    fontSize: FontSize.Font16,
  },
  poojaDate: {
    color: Color.black,
    marginTop: 4,
  },
  arrowContainer: {
    marginRight: 15,
    alignSelf: 'center',
  },
})

export default BookPooja