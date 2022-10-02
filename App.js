import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import StackNavigator from "./components/StackNavigator";
import ScreenOne from "./components/stackComponents/ScreenOne";

import { Trips } from './const';

const Tab = createBottomTabNavigator();
/* Oprettede af tabs!!! */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
        <Tab.Screen name="Book a Trip" component ={StackNavigator}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}