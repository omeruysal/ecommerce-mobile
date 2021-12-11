import React, { useEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View,Dimensions,Button } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import {
    Container,
    Text,
    Left,
    Right,
    H1,
    ListItem,
    Thumbnail,
    Body
  } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import {clearCart, removeFromCart} from '../../Redux/Actions/cartActions'
var { height, width } = Dimensions.get("window");

const Cart = () => {
    const {navigate} = useNavigation()
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const cartItems = useSelector(state => state.cartItems);
    
    useEffect(() => {
        cartItems.map(e => {
           setTotal(total+e.price);
        });
    }, [cartItems])
    
    const clear =()=> {
        dispatch(clearCart());
    }
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
                                 source={{uri: item.image ? item.image 
                                     : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}/>
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
                    <View style={styles.bottomContainer}>
                        <Left>
                            <Text style={styles.price}>$ {total}</Text>
                        </Left>
                        <Right>
                                    <Button title='Clear' onPress={()=>clear()}/>
                        </Right>
                        <Right>
                                    <Button title='Checkout' onPress={()=>navigate('Checkout')} />
                        </Right>
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
      body : {
          flexDirection: 'row',
          marginRight: 10
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
