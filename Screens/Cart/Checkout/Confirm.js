import { useNavigation, useRoute } from '@react-navigation/core'
import React,{useState,useEffect} from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../Redux/Actions/cartActions'
var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
    const {navigate} = useNavigation()
    const route = useRoute();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems);
    const order = route.params;

    const confirmOrder = () =>{
      dispatch(actions.clearCart())
      navigate('Cart')
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{fontSize:20,fontWeight:'bold',marginBottom:'5%'}}>
                Confirm Order
                </Text>
                {order ? 

                <View style={{borderWidth: 1, borderColor:'orange'}}>
                    <Text style={styles.shipping}> Shipping to :</Text>
                    <View style={{padding:8}}>
                      <Text>Address : {order.order.order.shippingAddress1}</Text>
                      <Text>Address 2 : {order.order.order.shippingAddress2}</Text>
                      <Text>City : {order.order.order.city}</Text>
                      <Text>Zip Code : {order.order.order.zip}</Text>
                      <Text>Country : {order.order.order.country}</Text>
                    </View>
                    <Text style={styles.title}>Items:</Text>
                    {order.order.order.orderItems.map((item)=>{
                      return(
                        <ListItem
                        style={styles.listItem}
                        key={item.name}
                        avatar
                        >
                          <Left>
                            <Thumbnail source={{uri:item.image}}/>
                          </Left>
                          <Body style={styles.body}>
                          <Left>
                            <Text>{item.name}</Text>
                          </Left>
                          <Right>
                            <Text>$ {item.price}</Text>
                          </Right>
                          </Body>
                        </ListItem>
                      )
                    })}
                </View>

                : null}
                <View style={{alignItems:'center',margin:20}}>
                  <Button title='Place order' onPress={confirmOrder}/>
                </View>
            </View>
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
      shipping: {
        alignSelf: 'center',
        margin: 8,
        fontSize: 16,
        fontWeight: 'bold'
      }
})
