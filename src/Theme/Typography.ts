
import { StyleSheet } from "react-native";
import { FontSize } from "./FontSize";
import { Color } from ".";


export const Typography = StyleSheet.create({
  main_heading: {
    fontFamily: "Urbanist-Black",
    fontSize: FontSize.Font33,
    color: Color.black,
  },
  title: {
    fontFamily: "Urbanist-Medium",
    fontSize: FontSize.Font14,
    color: Color.black,
    fontWeight: "500"
  },
  small: {
    fontFamily: "Urbanist-Medium",
    fontSize: FontSize.Font16,
    fontWeight: "500",
     color: Color.white,
  },
  smallText: {
    fontSize: FontSize.Font12,
    lineHeight: 15,
    fontFamily: "Urbanist-SemiBold",
    color: Color.chatBg
  },
  smallTitle: {
    fontSize: FontSize.Font16,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    letterSpacing: 0.5
  },
  tab: {
    fontSize: FontSize.Font12,
    fontFamily: "Poppins-Medium",
    fontWeight: "400",

  },
  body: {
    fontFamily: "Poppins-Medium",
    fontSize: FontSize.Font16,
    fontWeight: "400",
    letterSpacing: 1,
  },
  samll_bold: {
    fontFamily: "Urbanist-Bold",
    fontSize: FontSize.Font16,
    // lineHeight: moderateScale(20)
  },
  large_headings:{
    fontFamily: "Urbanist-Medium",
    fontSize: FontSize.Font20,
    lineHeight: 26,
    fontWeight: "500",
    color: Color.black
  }
})

export { FontSize };
