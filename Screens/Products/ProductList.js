import { useNavigation } from '@react-navigation/core';
import React,{useEffect} from 'react'
import {TouchableOpacity, Dimensions, StyleSheet, Text, View, Alert } from 'react-native'
import ProductCard from './ProductCard';

const { width } = Dimensions.get('window');
const ProductList = (props) => {
    const {navigate,setParams} = useNavigation()
    const { item } = props;
    
    return (
    <TouchableOpacity style={{width:'50%'}} onPress={()=>{
        navigate('Product Detail',{item});
        }}>
        <View style ={{ width:  width / 2 }}>
            <ProductCard {...item}/>
        </View>
    </TouchableOpacity>
    )
}

export default ProductList

const styles = StyleSheet.create({})
