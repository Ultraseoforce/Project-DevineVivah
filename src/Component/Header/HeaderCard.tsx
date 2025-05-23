import React, { useEffect, useMemo } from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../Store/auth/authSlice';
import { capitalize, getGreeting, getImagePath } from '../Utils/helper';
import SearchContent from '../Search/SearchCard';
import Filters from '../Filters/Filters';
import { navigate } from '../../Navigator/Utils';
import { Color } from '../../Theme';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Typography } from '../../Theme/Typography';
import Shopping_cart from '../../assets/svg/Shopping.svg';
import { useGetProfileQuery } from '../../Store/auth/authApiSlice';
import { useIsFocused } from '@react-navigation/native';
import Bell from '../../assets/svg/Ball.svg'

interface IHeader {
  BgWhite?: boolean;
  showCard?: boolean;
  showNotification?: boolean;
  StatusBarColor?: string;
}

const HeaderCard = (Props: IHeader) => {
  const isFocused = useIsFocused();
  const { data: profiledata, isLoading, refetch } = useGetProfileQuery({});
  const profileImage = getImagePath(profiledata?.profile_photo1 || profiledata?.profile_photo2 || profiledata?.profile_photo3 || "")
  const bell = require('../../assets/Image/bell.png');

  const backgroundColor = useMemo(
    () => (Props.BgWhite ? Color.white : Color.orange),
    [Props.BgWhite]
  );
  const nameColor = useMemo(
    () => (Props.BgWhite ? Color.black : Color.white),
    [Props.BgWhite]
  );


  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);
  return (
    <View style={[styles.mainView, { backgroundColor }]}>
      {/* StatusBar Styling */}
      <StatusBar
        backgroundColor={Props.StatusBarColor || backgroundColor}
        barStyle={Props.BgWhite ? 'dark-content' : 'light-content'}
        translucent={Platform.OS === 'android'}
      />
      <View style={styles.headerContent}>
        <View style={styles.profileCard}>
          <Image source={{ uri: profileImage }} style={styles.image} />
          <Text style={[styles.name, Typography.samll_bold, { color: nameColor }]}>
            {getGreeting()}, {capitalize(profiledata?.member_name)}
          </Text>
        </View>
        {!Props.showCard ? (
          <TouchableOpacity onPress={() => navigate('Notifacations', {})}>
            <Image source={bell} style={styles.bell} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Shopping_cart />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.searchCard}>
        <SearchContent
          style={{ width: Props.showNotification ? '65%' : '80%', backgroundColor: Color.boxBg }}
        />
        <Filters onFilter={() => navigate('Filters', {})} mainStyle={styles.filterStyle} />
        {Props.BgWhite && (
          <Pressable onPress={() => navigate('Notifacations', {})} style={styles.bgball}>
            {/* <Image source={bell} style={styles.bellInsideWhite} tintColor={Color.border} /> */}
            <Bell style={styles.bellInsideWhite} color={'red'} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  mainView: {
    minHeight: moderateScale(167),
    borderBottomLeftRadius: moderateScale(13),
    borderBottomRightRadius: moderateScale(13),
    paddingTop: Platform.OS === 'android' ? moderateScale(20) : moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  image: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(50)
  },
  headerContent: {
    marginTop: moderateScale(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  name: {
    color: Color.white,
  },
  bell: {
    height: moderateScale(27),
    width: moderateScale(27),
  },
  searchCard: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: moderateScale(10),
  },
  filterStyle: {
    backgroundColor: Color.boxBg,
  },
  bgball: {
    height: moderateScale(48),
    width: moderateScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.boxBg,
    borderRadius: moderateScale(5),
  },
  bellInsideWhite: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
});