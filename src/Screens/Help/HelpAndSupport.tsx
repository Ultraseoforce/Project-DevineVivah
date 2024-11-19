
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import About from '../../Component/Placeholder/About'
import Button from '../../Component/Buttons/Button'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { navigate } from '../../Navigator/Utils'
import TicketIssueDropdown from '../../Component/Dropdowns/TicketIssueDropdown'
import NameInput from '../../Component/Placeholder/NameInput'
import { useAddTicketMutation, useGetTicketIssueQuery } from '../../Store/HelpAndSupport/MyTickersApiSlice'
import Toast from '../../Component/Modal/ToastMessage'


const religion = [
  { label: 'issue 1', value: 'Hindu' },
  { label: 'issue 2', value: 'Catholicism' },
  { label: 'issue 3', value: 'Catholicism' },
]

const HelpAndSupport = () => {
  const [issue, setIssue] = useState()
  const [tickettitle, setTicketTitle] = useState("")
  const [ticketdetails, setTicketDetails] = useState("")
  const { showToast } = Toast();

  const { data: getTicketIssues, error, isLoading } = useGetTicketIssueQuery();
  const [creactTicket, {  }] =  useAddTicketMutation();


  const creactNewTicket = async () => {
    const request = {
      issue_id: issue.id,
      ticket_title: tickettitle,
      ticket_message: ticketdetails,
    }
    try {
      const res = await creactTicket(request).unwrap();
      console.log("creactNewTicket", res)
      if (res?.status == true) {
        showToast(res?.message, { type: 'normal' });
        navigate("MyTickets", {})
      } else {
        showToast(res?.errors, { type: 'normal' });
      }
    } catch (error) {
      console.log("ticket error", error)
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <BackHeader leftTitle='Help & Support' rightBtn="My Ticket" onpressButton={() => navigate("MyTickets", {})} />
      <View style={{ padding: 16, gap: 10 }}>
        <TicketIssueDropdown placeholder='Select issue' items={getTicketIssues}
          selectedValue={issue}
          onSelect={setIssue} />
        <NameInput
          placeholder='Enter ticket title'
          value={tickettitle}
          onChangeText={setTicketTitle}
        />
        <About
          placeholder='Explain in details'
          value={ticketdetails}
          onChangeText={setTicketDetails}
        />
        <Button title='Send' onPress={creactNewTicket} mainStyle={styles.btn} />
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