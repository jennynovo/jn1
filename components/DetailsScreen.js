import {Button, StyleSheet, Text, View } from 'react-native';
import * as React from "react";

//
const navController = (navigation, route) =>{
    navigation.navigate(route)
}
//Husk at ændre navn
export default function DetailsScreen({navigation}) {
    return (
        <View>
            <Button title="Book a hiking trip" onPress={() => navController(navigation, 'ScreenOne')}  />
            <Button title="Book a shelter trip" onPress={() => navController(navigation, 'ScreenTwo')}  />
            <Button title="Book a kayak trip " onPress={() => navController(navigation, 'ScreenOne')}  />
        </View>
    );
}




