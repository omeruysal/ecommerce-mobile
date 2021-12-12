import React, {useState} from 'react'
import { StyleSheet} from 'react-native'
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

const CartItem = (props) => {
    const data = props.item.item;
    const [quantity, setQuantity] = useState(data.quantity);
    return (
        <ListItem
            style={styles.listItem}
            avatar
            key={Math.random()}>
           <Left>
             <Thumbnail
             source={{uri: data.image ? data.image 
                 : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}/>
            </Left>
            <Body style={styles.body}>
                <Left>
                    <Text>{data.name}</Text>
                </Left>
                <Right>
                <Text>$ {data.price}</Text>
                </Right>
            </Body>
        </ListItem>
    )
}

export default CartItem

const styles = StyleSheet.create({

    body : {
        flexDirection: 'row',
        marginRight: 10
    },
    listItem : {
        alignItems : 'center',
        backgroundColor : 'white',
        justifyContent : 'center'
    },
})
