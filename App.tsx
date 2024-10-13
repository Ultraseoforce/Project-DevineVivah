import { LogBox, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Application from './src/Navigator/Application'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Store'
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from 'react-native-toast-notifications'

LogBox.ignoreAllLogs()


const App = () => {

  useEffect(() => {
    if (Platform.OS === 'android')
      SplashScreen.hide();
  }, []);


  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Application />
        </PersistGate>
      </Provider>
    </ToastProvider>

  )
}

export default App

const styles = StyleSheet.create({})