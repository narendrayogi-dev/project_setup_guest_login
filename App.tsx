import './src/unistyles';
import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Animated, { FadeIn } from 'react-native-reanimated'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import RootNavigator from './src/navigator/RootNavigator'
import Toast from 'react-native-toast-message'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App = () => {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  return (
    <KeyboardProvider>
    <Provider store={store}>
      <SafeAreaProvider>
     <NavigationContainer ref={navigationRef}>
        <RootNavigator />
        <Toast />
      </NavigationContainer>
      </SafeAreaProvider>

    </Provider>
    </KeyboardProvider>
  )
}

export default App

const styles = StyleSheet.create({})