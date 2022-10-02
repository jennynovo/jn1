import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Trips} from "../const";

const FlatListComponent = () => {

    const TripItem = ({item,msg}) => {
        return(
            <Text>
                {msg} "{item}"
            </Text>
        )
    }

    return(
        <View style={styles.container}>
            {/* Title med styling*/ }
            <Text style={{ fontSize: 20, textAlign:'center',paddingTop:40 }}>
                1 Mine biler - Flatlist
            </Text>
            {/* FlatList komponent med title propertien og en værdi HANS*/ }
            <FlatList
                style={{height:80}}
                data={Trips}
                renderItem={({item})=>{
                    {/*Render TripItem, her er det vigtigt at kalde et subkomponent*/}
                    return(
                        <TripItem
                            item={item}
                            msg={"..."}
                        />
                    )
                }}
                keyExtractor={item => item}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    inlineScroll:{
        height:80
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default FlatListComponent;