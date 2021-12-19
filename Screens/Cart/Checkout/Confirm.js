import { useNavigation, useRoute } from '@react-navigation/core'
import React,{useState} from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
var { width, height } = Dimensions.get("window");

const Confirm = () => {
    const {navigate} = useNavigation()
    const route = useRoute();

     const order = route.params;
    return (
        <ScrollView>
            <Text>Confirm Screen</Text>
        </ScrollView>
    )
}

export default Confirm

const styles = StyleSheet.create({
    container: {
        height: height,
        padding: 8,
        alignContent: "center",
        backgroundColor: "white",
      },
      titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
      },
      title: {
        alignSelf: "center",
        margin: 8,
        fontSize: 16,
        fontWeight: "bold",
      },
      listItem: {
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
        width: width / 1.2,
      },
      body: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
      },
})
