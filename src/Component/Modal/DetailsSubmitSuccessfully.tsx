import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailsSubmitted from '../../assets/svg/DetailsSubmitted.svg'
import { Color } from '../../Theme'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import Button from '../Buttons/Button'
import { navigate } from '../../Navigator/Utils'

const DetailsSubmitSuccessfully = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <DetailsSubmitted />
        <Text style={styles.title}>
          Identity Verification details{'\n'}Submitted!!
        </Text>
        <Text style={styles.subtitle}>
          You can proceed to the homepage, we{'\n'}will review and verify your details soon.
        </Text>
      </View>
      <Button    
        title="Continue" 
        mainStyle={styles.button}
        onPress={() => {
          navigate("Login", {})
        }}
      />
    </View>
  )
}

export default DetailsSubmitSuccessfully

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(20)
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...Typography.h2,
    textAlign: 'center',
    marginTop: moderateScale(24),
    marginBottom: moderateScale(8),
    color: Color.black
  },
  subtitle: {
    ...Typography.small,
    textAlign: 'center',
    color: Color.gray,
    lineHeight: moderateScale(20)
  },
  button: {
    marginBottom: moderateScale(30),
    backgroundColor: '#FF5D5D'
  }
})