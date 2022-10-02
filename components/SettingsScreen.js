import {Text, StyleSheet, View } from 'react-native';
import * as React from "react";

//Husk at ændre navn
export default function SeetingsScreen() {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Profile</Text>
             <Text style={styles.name}>Name</Text>
             <Text style={styles.Region}>Region</Text>
             <Text style={styles.Activities}>Activities</Text>
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
    },
    name: {
        marginTop: 10,
        paddingVertical: 10,
        borderColor: "#384134",
        borderRadius: 10,
        backgroundColor: "#384134",
        color: "#67964C",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      Region: {
        marginTop: 10,
        paddingVertical: 10,
        borderColor: "#384134",
        borderRadius: 10,
        backgroundColor: "#384134",
        color: "#67964C",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      Activities: {
        marginTop: 10,
        paddingVertical: 10,
        borderColor: "#384134",
        borderRadius: 10,
        backgroundColor: "#384134",
        color: "#67964C",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      }
  });