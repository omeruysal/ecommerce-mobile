import React, { useEffect } from 'react'
import { StyleSheet, View,Dimensions,Button } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import {
    Container,
    Text,
    Left,
    Right,
    H1,
    ListItem,
    Thumbnail
  } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {removeFromCart} from '../../Redux/Actions/cartActions'
var { height, width } = Dimensions.get("window");

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems);
    
    return (
        <>
            {cartItems.length ? (
                <Container>
                    <H1 style={{alignSelf:'center'}}>Cart</H1>
                    {cartItems.map(item=>{
                        return (
                            <ListItem
                            style={''}
                            avatar
                            key={Math.random()}>
                                <Left>
                                    <Thumbnail
                                    source={{uri: item.product.image ? item.product.image 
                                    : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}/>
            
                                </Left>
                                <Body style={styles.bottomContainer}>
                                    
                                </Body>
                            </ListItem>
                        )
                    })}
                    <View style={styles.bottomContainer}>
                        <Left>
                            <Text style={styles.price}>$</Text>
                        </Left>
                    </View>
                </Container>
            ):
            (
                <Container style={styles.emptyContainer}>
                    <Text>There is no product</Text>
                </Container>
            )}
        </>
    )
}

export default Cart

const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: "center",
        justifyContent: "center",
      },
      bottomContainer: {
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: 'white',
          elevation: 20
      },
      price: {
          fontSize: 18,
          margin: 20,
          color: 'red'
      },
      hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
      },
      hiddenButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 1.2
      }
})
