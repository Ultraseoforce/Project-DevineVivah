import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BackHeader from '../../Component/Header/BackHeader'
import { Color } from '../../Theme'
import { moderateScale, scale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import { images } from '../../Theme/Image'
import Button from '../../Component/Buttons/Button'
import { navigate } from '../../Navigator/Utils'


const data = [
  { id: 1, icon: images.ReadingIcon, title: "Reading" },
  { id: 2, icon: images.PhotographyIcon, title: "Photography" },
  { id: 3, icon: images.GamingIcon, title: "Gaming" },
  { id: 4, icon: images.MusicIcon, title: "Music" },
  { id: 5, icon: images.TravelIcon, title: "Travel" },
  { id: 6, icon: images.PaintingIcon, title: "Painting" },
  { id: 7, icon: images.PoliticsIcon, title: "Politics" },
  { id: 8, icon: images.CharityIcon, title: "Charity" },
  { id: 9, icon: images.CookingIcon, title: "Cooking" },
  { id: 10, icon: images.PetsIcon, title: "Pets" },
  { id: 11, icon: images.FashionIcon, title: "Fashion" },
  { id: 12, icon: images.SportsIcon, title: "Sports" },
];

const SelectInterests = () => {

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };



  const renderRow = (items: any[], isEvenRow: boolean) => {
    return (
      <View style={styles.row}>
        {items.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          const itemStyle = isSelected ? styles.selectedItem : styles.item;
          const textStyle = isSelected ? styles.selectedText : styles.text;
          const iconTintColor = isSelected ? Color.white : Color.orange;

          return (
            <TouchableOpacity
              key={item.id}
              style={[itemStyle, isEvenRow ? styles.twoColumn : styles.threeColumn]}
              onPress={() => toggleSelectItem(item.id)}
              onLongPress={() => toggleSelectItem(item.id)}
              delayLongPress={200}
            >
              <Image style={[styles.icon, { tintColor: iconTintColor }]} resizeMode='contain' source={item.icon} />
              <Text style={[textStyle, Typography.smallTitle]}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };



  const groupDataIntoRows = () => {
    let rows = [];
    let currentIndex = 0;

    while (currentIndex < data.length) {
      const isEvenRow = rows.length % 2 === 0;
      const numColumns = isEvenRow ? 2 : 3;

      rows.push(data.slice(currentIndex, currentIndex + numColumns));
      currentIndex += numColumns;
    }

    return rows;
  };

  const groupedData = groupDataIntoRows();


  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <BackHeader />
    <View style={{ padding: 16, }}>
         <Text style={[Typography.main_heading, { textAlign: "center" }]}>Select Interests</Text>
         <Text style={[styles.hedingtext, Typography.body]}>
           Tell us what piques your curiosity and passions
         </Text>
       </View>
       <ScrollView>
         {groupedData.map((row, index) => renderRow(row, index % 2 === 0))}
         <Button title='Save' onPress={() => navigate("MainNavigator", {})}mainStyle={{marginHorizontal: moderateScale(16),}}/>
       </ScrollView>
</View>
  )
}

export default SelectInterests

const styles = StyleSheet.create({
  hedingtext: {
        marginTop: moderateScale(20),
        
        color: Color.chatBg,
        textAlign: "center",
      },
      row: {
        flexDirection: 'row',
        alignSelf: "center",
        alignItems: "center",
        marginBottom: moderateScale(10),
      },
      twoColumn: {
        padding: 10,
        marginBottom: 15,
        marginRight: 7,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Color.border,
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        justifyContent: 'center',
      },
      threeColumn: {
        padding: 10,
        marginBottom: 15,
        marginRight: 7,
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Color.border,
        justifyContent: 'center',
      },
      item: {
        backgroundColor: Color.inputBg,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        
      },
      selectedItem: {
        backgroundColor: '#FF5A60',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      text: {
        color: Color.black,
        textAlign: 'center',
      },
      icon: {
        width: scale(18),
        height: scale(18),
        marginBottom: 5, 
      },
      selectedText: {
        color: Color.white,
        textAlign: 'center',
      },
})
