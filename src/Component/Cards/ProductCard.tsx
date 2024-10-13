import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { Typography } from '../../Theme/Typography'
import { Color } from '../../Theme'
import { scale } from '../../Theme/ResposiveSize'
import { FontSize } from '../../Theme/FontSize'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../Navigator/Utils'

interface IProdutCard {
    heding?: String
    data?: any
}




const ProductCard = (Props: IProdutCard) => {
    const star = require("../../assets/Image/star.png")

    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => navigate("ProductView", {item})} style={styles.itemContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.save}>
            <FontAwesome name="heart" size={20} color={Color.orange} />
            </View>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
                <Text style={[Typography.samll_bold, { color: Color.black }]}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Text style={[Typography.small, { fontSize: FontSize.Font15, color: Color.black}]}>RS.{item.lessprice}</Text>
                    <Text style={[Typography.small, { fontSize: FontSize.Font15, color: Color.black }]}> {item.price}</Text>
                    <View style={styles.off}>
                        <Text style={[Typography.small, { fontSize: FontSize.Font12, color: Color.white }]}>{item.off}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Image source={star} style={{ height: 16, width: 16 }} />
                <Text style={[Typography.small, { fontSize: FontSize.Font15,color: Color.black }]}>{item.reting}</Text>
                <Text style={[Typography.small, { fontSize: FontSize.Font15, marginRight: 5, color: Color.black }]}>({item.review})</Text>
                <Text style={[Typography.small, { fontSize: FontSize.Font15, color: Color.black }]}>{item.solds}</Text>
            </View>
        </Pressable>

    )
    return (
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={[Typography.samll_bold, { color: Color.black }]}>{Props.heding}</Text>
                <Text style={[Typography.title, { color: Color.orange }]}>See All</Text>
            </View>
            <FlatList
                data={Props.data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 17 }}
            />
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    itemContainer: {
        width: scale(178),
        backgroundColor: Color.boxBg,
        borderRadius: 10,
        marginVertical: 5,
       
    },
    productImage: {
        width: scale(178),
        height: scale(168),
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignSelf: 'center',
    },
  
    off: {
        backgroundColor: Color.orange,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        height: scale(30),
        width: scale(60)
    },
    footer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginVertical: 10,
        gap: 2
    },
    save:{backgroundColor: Color.white, height: scale(30), width: scale(30), borderRadius: 50, position: "absolute", alignItems: "center", justifyContent: "center", margin: 10, alignSelf: "flex-end", right: 1}
})