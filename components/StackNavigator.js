import {Text, View } from 'react-native';
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import DetailsScreen from "./DetailsScreen";
import ScreenOne from "./stackComponents/ScreenOne";
import ScreenTwo from "./stackComponents/ScreenTwo";


//Husk at ændre navn
export default function StackNavigator() {
    //instantiere en stacknavigator
const Stack = createStackNavigator()
        return (
            <Stack.Navigator>
            <Stack.Screen name= "Select Trips"component={DetailsScreen}
             options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#dcf6cb'}
            }
                   
            }/>
            <Stack.Screen name= "ScreenOne"component={ScreenOne}
            options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }}/>
            <Stack.Screen name= "ScreenTwo"component={ScreenTwo}
            options={{
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#62bab5'}
            }}/> 
            </Stack.Navigator>
    );
}
