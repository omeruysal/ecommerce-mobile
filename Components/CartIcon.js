import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Badge, Text} from 'native-base'
import {useSelector} from 'react-redux';

const CartIcon = () => {
    const cartItems = useSelector(state => state.cartItems);
    return (
        <>
        {cartItems.length ? (
             <Badge style={styles.badge}>
             <Text style={styles.text}>{cartItems.length}</Text>
           </Badge>
         ) : null}
        </>
    )
}

export default CartIcon

const styles = StyleSheet.create({
    badge: {
        width: 20,
        height:20,
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        top: -4,
        right: -15,
      },
      text: {
        fontSize: 12,
        width: 80,
        fontWeight: "bold",
        top: -2,
      },
})