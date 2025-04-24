import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {
  return (
    <NavigatorContainer>
      <AppNavigation/>
    </NavigatorContainer>
  )
}

export default App