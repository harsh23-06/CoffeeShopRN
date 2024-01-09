import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from "./app/config/colors"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./app/screens/HomeScreen"
import CoffeeDetailsScreen from './app/screens/CoffeeDetailsScreen'
import coffees from './app/config/coffees'

const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='CoffeeDetailsScreen' component={CoffeeDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>

  )
}
export default App;
const styles = StyleSheet.create({

})