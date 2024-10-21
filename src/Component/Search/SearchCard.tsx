import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Color } from "../../Theme";
import Octicons from 'react-native-vector-icons/Octicons';
import { moderateScale } from "../../Theme/ResposiveSize";
import { FontSize } from "../../Theme/FontSize";
import Search from '../../assets/svg/Search.svg'

interface ISearch {
  searchData?: Function;
  text?: string;
  style?: any;
  placeHolder?: string;
  onChangeText?: any;
  value?: string;
}

const SearchBar = (search: ISearch) => {
  return (
    <View style={[styles.textInput, search.style]}>
      {/* <Octicons name="search" size={25} color={Color.black} /> */}
      <Search />
      <TextInput
        style={styles.input}
        placeholder={search?.placeHolder || "Search...."}
        value={search?.value}
        onChangeText={search?.onChangeText}
        placeholderTextColor={Color.chatBg}
        textAlignVertical="center"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  textInput: {
    height: moderateScale(48),
    backgroundColor: Color.white,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "80%",
    alignSelf: "center"
  },
  input: {
    marginHorizontal: 10,
    flex: 1,
    fontFamily: "Poppins-Medium",
    fontSize: FontSize.Font16,
    textAlignVertical: "center",
    paddingVertical: 0,
  },
});
