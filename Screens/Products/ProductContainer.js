import React,{useState,useEffect} from 'react'
import { StyleSheet,View,FlatList } from 'react-native'
import ProductList from './ProductList'
import {Container,Header,Icon,Item,Input,Text} from 'native-base'
import SearchedProducts from './SearchedProducts'
const data = require('../../assets/data/products.json')

const ProductContainer = () => {
    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])
    const [focus, setFocus] = useState()
    useEffect(() => {
        setProducts(data)
        setProductsFiltered(data)
        setFocus(false)
        return () => {
            setProducts([])
            setProductsFiltered([])
            setFocus()
        }
    }, [])
    const searchProduct = (text) =>{
        setProductsFiltered(
            products.filter((i)=> i.name.toLowerCase().includes(text.toLowerCase()))
        )
    } 
    const openList = () =>{
        setFocus(true);
    }
    const onBlur = ()=>{
        setFocus(false)
    }
    return (
       <Container>
           <Header searchBar rounded>
               <Item>
                   <Icon name="ios-search"/>
                   <Input placeholder='Search'
                   onFocus={openList}
                   onChangeText={(text)=> searchProduct(text)}
                   />
                   {focus === true ? (
                       <Icon onPress={onBlur} name="ios-close"/>
                   ) : null}
               </Item>
           </Header>
           {focus===true ? (
               <SearchedProducts
            productsFiltered={productsFiltered}
               />
           ):(
            <View style={styles.container}> 
            <Text>Product Container</Text>
            <View style={styles.listContainer}>
            <FlatList
                numColumns={2}
                data={products}
                renderItem={({item})=>
                <ProductList key={item.id} item={item}/>}
                keyExtractor={item=>item.name}
            />
            </View>
            </View>
           )}
           
       </Container>
    )
}

export default ProductContainer

const styles = StyleSheet.create({
    container: {
        //flexWrap: "wrap",
        backgroundColor: "gainsboro",
      },
      listContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
      },
      center: {
          justifyContent: 'center',
          alignItems: 'center'
      }
})
