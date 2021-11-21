import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    useEffect(() => {
        console.log('state : ')
        console.log(state)
    }, [])
    return (
        <View>
            <Text>Cart</Text>
            <Text>{state.cartItems.length}</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
