import React from 'react'
import { StyleSheet,Dimensions, View } from 'react-native'
import {Content,Header,Body,Thumbnail,Left,ListItem,Text} from 'native-base'
import { useNavigation } from '@react-navigation/core'

let {width} = Dimensions.get("window")
const SearchedProducts = (props) => {
    const {navigate} = useNavigation()
    const { productsFiltered} = props
    return (
       <Content style={{width}}>
           { productsFiltered.length>0 ? (
               productsFiltered.map((item)=>(
                   <ListItem
                   key={item._id}
                   onPress={()=>{navigate('Product Detail',{item});}}
                   avatar
                   >
                       <Left>
                           <Thumbnail
                            source={{uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                           />
                       </Left>
                       <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                       </Body>
                   </ListItem>
               ))
           ): (
               <View style={styles.center}>
                   <Text style={{alignSelf:'center'}}>No products match the selected criteria</Text>
               </View>
           )}
       </Content>
    )
}

export default SearchedProducts

const styles = StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
})
