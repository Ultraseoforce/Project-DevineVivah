import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { FontSize } from '../../Theme/Typography';
import { Typography } from '../../Theme/Typography';
import CustomDatePicker from '../Modal/CustomDatePicker';
// import CustomDatePicker from './custom-date-picker';

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
      <Text
        style={[
          Typography.title,
          { marginBottom: auto.nameStyle ? 5 : -15 },
        ]}
      >
        {auto.title}
      </Text>
      <View style={styles.inputBox}>
        <TextInput
          placeholder={auto.placeholder}
          onChangeText={auto.onChangeText}
          style={styles.input}
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
              size={22}
              color="#6A707C"
            />
          </TouchableOpacity>
        )}
        {auto.isDate && (
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.icon}
          >
            <Ionicons name="calendar-outline" size={22} color={Color.orange} />
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
  container: {},
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(50),
    borderColor: Color.border,
    backgroundColor: Color.inputBg,
    paddingHorizontal: moderateScale(15),
  },
  input: {
    flex: 1,
    fontFamily: 'Urbanist-Medium',
    // fontSize: FontSize.Font11,
    color: Color.placeholderText,
    fontWeight: '500',
    paddingVertical: 10,
  },
  icon: {
    padding: 5,
  },
});