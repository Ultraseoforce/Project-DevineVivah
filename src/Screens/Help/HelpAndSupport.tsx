// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const HelpAndSupport = () => {
//   return (
//     <View>
//       <Text>HelpAndSupport</Text>
//     </View>
//   )
// }

// export default HelpAndSupport

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import About from '../../Component/Placeholder/About'
import Button from '../../Component/Buttons/Button'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { navigate } from '../../Navigator/Utils'


const religion = [
  { label: 'issue 1', value: 'Hindu' },
  { label: 'issue 2', value: 'Catholicism' },
  { label: 'issue 3', value: 'Catholicism' },
]

const HelpAndSupport = () => {
  const [issue, setIssue] = useState("")

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <BackHeader leftTitle='Help & Support' rightBtn="My Ticket" onpressButton={() => navigate("MyTickers", {})} />
      <View style={{ padding: 16 }}>
        <CustomDropdown placeholder='Select issue' items={religion}
          selectedValue={issue}
          onSelect={setIssue} />
        <About placeholder='Explain in details' />
        <Button title='Send' mainStyle={styles.btn} />
      </View>
    </View>
  )
}

export default HelpAndSupport

const styles = StyleSheet.create({
  btn: {
    marginTop: 10
  }
})