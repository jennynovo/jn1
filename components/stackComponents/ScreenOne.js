import {Button} from 'react-native';
import * as React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Trips} from "../../const";

//Husk at ændre navn
export default function ScreenOne({navigation}) {

    const TripItem = ({item,msg}) => {
        return(
            <Text>
                {msg} "{item}"
            </Text>
        )
    }
    return (
        <View>
             <FlatList
                style={{height:80}}
                data={Trips}
                renderItem={({item})=>{
                    {/*Render TripItem, her er det vigtigt at kalde et subkomponent*/}
                    return(
                        <TripItem
                            item={item}
                            msg={"Vælg - "}
                        />
                    )
                }}
                keyExtractor={item => item}
            />
             <Button 
            onPress={()=> navigation.goBack()}
            title= "Go Back"
            />
            <Button
            onPress={()=> navigation.navigate('ScreenTwo')}
            title= "Go to ScreenTwo"
            />
        </View>
    );
}