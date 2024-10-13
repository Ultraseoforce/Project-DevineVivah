
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import React, { useState } from 'react';
import BackHeader from '../Header/BackHeader';
import { Color } from '../../Theme';
import NameInput from '../Placeholder/NameInput';
import RadioButton from '../Buttons/RadioButton';
import { moderateScale } from '../../Theme/ResposiveSize';
import Button from '../Buttons/Button';
import { navigate } from '../../Navigator/Utils';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';


const AddShippingAddress = () => {
    const [addressCategory, setAddressCategory] = useState('home');
    const [defaultShipping, setDefaultShipping] = useState('off');
    const [defaultBilling, setDefaultBilling] = useState('off');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
            <BackHeader centerTitle='Add Shipping Address' />
            <ScrollView>
                <View style={styles.inputContainer}>

            
         
                <NameInput placeholder='Input the real name' title='Recipient’s Name' nameStyle />
                <NameInput placeholder='+91 ' title='Phone Number' nameStyle />
                <NameInput title='Region/City/Area' nameStyle />
                <NameInput title='Address' nameStyle />
                <NameInput placeholder='0' title='Famous Landmark(optional)' nameStyle />
           

            <View style={styles.radioContainer}>
                <View style={[styles.radioRow]}>
                    <Text style={[Typography.smallText,{fontSize: FontSize.Font16, color: Color.black, lineHeight: 20}]}>Address Category</Text>
                    <View style={styles.radioGroup}>
                        <RadioButton
                            selected={addressCategory === 'home'}
                            onPress={() => setAddressCategory('home')}
                            label="Home"
                        />
                        <RadioButton
                            selected={addressCategory === 'office'}
                            onPress={() => setAddressCategory('office')}
                            label="Office"
                        />
                    </View>
                </View>

                <View style={[styles.radioRow, { marginTop: 20 }]}>
                    <Text style={[Typography.smallText,{fontSize: FontSize.Font16, color: Color.black, lineHeight: 20}]}>Default Shipping Address</Text>
                    <View style={styles.radioGroup}>
                        <RadioButton
                            selected={defaultShipping === 'on'}
                            onPress={() => setDefaultShipping('on')}
                            label="On"
                        />
                        <RadioButton
                            selected={defaultShipping === 'off'}
                            onPress={() => setDefaultShipping('off')}
                            label="Off"
                        />
                    </View>
                </View>

                <View style={[styles.radioRow, { marginTop: 20 }]}>
                    <Text style={[Typography.smallText,{fontSize: FontSize.Font16, color: Color.black, lineHeight: 20}]}>Default Billing Address</Text>
                    <View style={styles.radioGroup}>
                        <RadioButton
                            selected={defaultBilling === 'on'}
                            onPress={() => setDefaultBilling('on')}
                            label="On"
                        />
                        <RadioButton
                            selected={defaultBilling === 'off'}
                            onPress={() => setDefaultBilling('off')}
                            label="Off"
                        />
                    </View>
                </View>
            </View>
            
                <Button title="SAVE"  onPress={() => navigate("SelectPaymentMethod",{})} />
            
            </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default AddShippingAddress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    inputContainer: {
        padding: moderateScale(16),
        gap: 10
    },
    radioContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        // padding: moderateScale(27),
        marginVertical: 15
    },
    radioRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    labelText: {
        fontSize: 14,
        color: '#000000',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: moderateScale(160),
    },
    saveButton: {
        marginTop: moderateScale(30),
        alignSelf: 'center',
    },
});
