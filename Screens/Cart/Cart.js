import React, { useEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View,Dimensions,Button } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
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
import CartItem from '../Admin/CartItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

var { height, width } = Dimensions.get("window");

const Cart = () => {
    const {navigate} = useNavigation()
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const cartItems = useSelector(state => state.cartItems);
    
    useEffect(() => {
        setTotal(0);
        cartItems.map(e => {
           setTotal(pr=> {return pr+e.price});
        });
    }, [cartItems])
    
    const clear =()=> {
        setTotal(0);
        dispatch(clearCart());
    }
    const removeSingleProduct =(item)=>{
    dispatch(removeFromCart(item));
     
    }
    return (
        <>
            {cartItems.length ? (
                <Container>
                    <H1 style={{alignSelf:'center'}}>Cart</H1>
                    <SwipeListView
                    data={cartItems}
                    renderItem={(data)=>(
                        <CartItem item={data}/>
                    )}
                    renderHiddenItem={(data)=>(
                        <View style={styles.hiddenContainer}>
                            <TouchableOpacity 
                            onPress={()=>removeSingleProduct(data.item)}
                            style={styles.hiddenButton}>
                                <Icon name="trash" color={"white"} size={30}/>
                            </TouchableOpacity>
                        </View>
                    )}
                    disableRightSwipe={true}
                    previewOpenDelay={3000}
                    friction={1000}
                    tension={40}
                    leftOpenValue={75}
                    stopLeftSwipe={75}
                    rightOpenValue={-75}
                    />
                    <View style={styles.bottomContainer}>
                        <Left>
                            <Text style={styles.price}>$ {total.toFixed(2)}</Text>
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
