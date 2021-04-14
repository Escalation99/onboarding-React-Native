import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Providers from './src/navigation'

const AppStack = createStackNavigator();

const App = () => {
  return <Providers />
}

export default App