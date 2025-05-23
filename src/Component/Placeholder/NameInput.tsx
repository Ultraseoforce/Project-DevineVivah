import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, scale } from '../../Theme/ResposiveSize'; // Assuming scale is also defined for better scaling
import { Color } from '../../Theme';
import { FontSize } from '../../Theme/Typography';
import { Typography } from '../../Theme/Typography';
import CustomDatePicker from '../Modal/CustomDatePicker';

interface Input {
  title?: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  mainStyle?: any;
  nameStyle?: boolean;
  keyboardType?: any;
  maxLength?: number;
  isPassword?: boolean;
  isDate?: boolean;
}

const NameInput = (auto: Input) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    if (auto.onChangeText) {
      auto.onChangeText(date);
    }
  };

  return (
    <View style={[styles.container, auto.mainStyle]}>
      {auto.title && (
        <Text
          style={[
            Typography.title,
            {
              marginBottom: auto.nameStyle ? moderateScale(5) : moderateScale(-15),
              fontSize: moderateScale(14), // You can change font size based on screen size here
            },
          ]}
        >
          {auto.title}
        </Text>
      )}
      <View style={styles.inputBox}>
        <TextInput
          placeholder={auto.placeholder}
          onChangeText={auto.onChangeText}
          style={[styles.input, { fontSize: moderateScale(14) }]} // Responsive font size
          value={auto.value || selectedDate}
          keyboardType={auto.keyboardType}
          maxLength={auto.maxLength}
          secureTextEntry={auto.isPassword && !showPassword}
          editable={!auto.isDate}
          placeholderTextColor={Color.chatBg}
        />
        {auto.isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.icon}
          >
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={moderateScale(22)} // Responsive icon size
              color="#6A707C"
            />
          </TouchableOpacity>
        )}
        {auto.isDate && (
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.icon}
          >
            <Ionicons
              name="calendar-outline"
              size={moderateScale(22)} // Responsive icon size
              color={Color.orange}
            />
          </TouchableOpacity>
        )}
      </View>

      <CustomDatePicker
        isVisible={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onDateSelect={handleDateSelect}
      />
    </View>
  );
};

export default NameInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(10),
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(50), // Rounded corners with responsive scaling
    borderColor: Color.border,
    backgroundColor: Color.inputBg,
    paddingHorizontal: moderateScale(15), // Responsive padding
  },
  input: {
    flex: 1,
    fontFamily: 'Urbanist-Medium',
    color: Color.placeholderText,
    fontWeight: '500',
    paddingVertical: moderateScale(10), // Responsive padding
  },
  icon: {
    padding: moderateScale(5), // Responsive icon padding
  },
});
