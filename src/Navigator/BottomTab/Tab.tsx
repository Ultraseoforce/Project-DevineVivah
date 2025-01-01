import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Platform } from "react-native";
import { Color } from "../../Theme";
import { scale } from "../../Theme/ResposiveSize";
import { Typography } from "../../Theme/Typography";
import { images } from '../../Theme/Image';

const NavigationTab = ({ state, descriptors, navigation }: any) => {

  return (
    <View
      style={[
        styles.wrapper,
        { paddingBottom: 0, marginBottom: 0, marginTop: 0 },
      ]}
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: index,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: index,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: "center", marginBottom: Platform.OS === 'ios' ? 10 : 0}}
            key={Math.random() * 10}
          >
            <View style={isFocused ? styles.activeTab : styles.tab}>
              {label === "Home" && (
                <Image
                  source={isFocused ? images.HomeBGIcon : images.HomeIcon}
                  resizeMode="contain"
                  style={{ height: scale(23), width: scale(23) }}
                />
              )}
              {label === "Store" && (
                <Image
                  source={isFocused ? images.storeBGIcon : images.storeIcon}
                  resizeMode="contain"
                  style={{ height: scale(24), width: scale(24) }}
                />
              )}
              {label === "Daily" && (
                <View
                  style={[
                    {
                      backgroundColor: Color.orange,
                      height: scale(45),
                      width: scale(45),
                      borderRadius: scale(50),
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: 5
                    },
                  ]}
                >
                  <Image
                    source={images.DailyMatch}
                    style={{ height: scale(25), width: scale(31) }}
                    resizeMode="contain"
                  />
                </View>
              )}
              {label === "Chats" && (
                <Image
                  source={isFocused ? images.ChatBGIcon : images.ChatIcon}
                  resizeMode="contain"
                  style={{ height: scale(23), width: scale(23) }}
                />
              )}
              {label === "Profile" && (
                <Image
                  source={isFocused ? images.ProfileBGIcon : images.ProfileIcon}
                  style={{ height: scale(23), width: scale(23) }}
                  resizeMode="contain"
                />
              )}
              {isFocused && (
                <Text
                  key={Math.floor(Math.random() * 100) + 1}
                  style={[styles.activeText, Typography.tab, { bottom: label === "Daily" ? 9 : 0 }]}
                >
                  {label}
                </Text>
              )}
              {!isFocused && (
                <Text
                  key={Math.floor(Math.random() * 100) + 1}
                  style={[styles.text, Typography.tab, { bottom: label === "Daily" ? 9 : 0 }]}
                >
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === 'ios' ? 4 : 0,
    gap: 5,
    // borderRadius: 15,
  },
  activeTab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === 'ios' ? 4 : 0,
    gap: 5,
  },
  text: {

    color: Color.black,
  },
  activeText: {
    color: Color.orange,
  },
});

export default NavigationTab;