import {StyleSheet, Text, View } from 'react-native';
import * as React from "react";

//Husk at ændre navn
export default function HomeScreen() {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Welcome to PackApp</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "dcf6cb"
    },
    title: {
      marginTop: 10,
      paddingVertical: 40,
      borderWidth: 5,
      borderColor: "#20232a",
      borderRadius: 10,
      backgroundColor: "#c5efaa",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  
