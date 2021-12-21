import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, ScrollView, Alert, Dimensions } from 'react-native'
import ProductList from './ProductList'
import { Container, Header, Icon, Item, Input, Text } from 'native-base'
import SearchedProducts from './SearchedProducts'
import Banner from '../../Components/Banner'
import CategoryFilter from './CategoryFilter'
import baseURL from '../../assets/common/baseUrl'
import axios from 'axios'
//const data = require('../../assets/data/products.json')
const productCategories = require('../../assets/data/categories.json')
const { height }=Dimensions.get("window");


const ProductContainer = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [productsCtg, setProductsCtg] = useState([])
    const [active, setActive] = useState()
    const [productsFiltered, setProductsFiltered] = useState([])
    const [focus, setFocus] = useState()
    const [initialState, setInitialState] = useState()
    useEffect(() => {
        setFocus(false)
        setCategories(productCategories)
        setActive(-1)

        axios.get(`${baseURL}products`)
        .then((res)=>{
        setProducts(res.data)
        setProductsFiltered(res.data)
        setInitialState(res.data)
        setProductsCtg(res.data)
        })
        return () => {
            setProducts([])
            setProductsFiltered([])
            setFocus()
            setCategories([])
            setActive()
            setInitialState()
        }
    }, [])
   const searchProduct = (text) => { // This part should be take care on backend
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    const openList = () => {
        setFocus(true);
    }
    const onBlur = () => {
        setFocus(false)
    }
    const changeCtg = (ctg) => {
        
        {
            ctg === 'all'
                ? setProductsCtg(initialState)
                : [setProductsCtg(products.filter((i) => i.category.$oid === ctg))]
        }
    }
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder='Search'
                        onFocus={openList}
                        onChangeText={(text) => searchProduct(text)}
                    />
                    {focus === true ? (
                        <Icon onPress={onBlur} name="ios-close" />
                    ) : null}
                </Item>
            </Header>
            {focus === true ? (
                <SearchedProducts
                    productsFiltered={productsFiltered}
                />
            ) : (
                    <ScrollView style={styles.container}>
                        <View>
                            <Banner />
                        </View>
                        <View>
                            <CategoryFilter
                                categories={categories}
                                categoryFilter={changeCtg}
                                productsCtg={productsCtg}
                                active={active}
                                setActive={setActive}
                            />
                        </View>
                        {productsCtg.length> 0 ? (
                            <View style={styles.listContainer}>
                                {productsCtg.map((item)=>{
                                    return(
                                        <ProductList
                                        key={item._id}
                                        item={item}
                                        />
                                    )
                                })}
                            </View>
                        ):(
                            <View style={[styles.center, {height: height / 2}]}>
                                <Text>No products found</Text>
                            </View>
                        )}
                    
                    </ScrollView>
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

    {/* <View style={styles.listContainer}>
                            <FlatList
                                numColumns={2}
                                data={products}
                                renderItem={({ item }) =>
                                    <ProductList key={item.id} item={item} />}
                                keyExtractor={item => item.name}
                            />
                        </View> */}