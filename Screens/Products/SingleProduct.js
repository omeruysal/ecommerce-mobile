import React,{useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import {Left,Right,Container,H1} from 'native-base'
import { useRoute } from '@react-navigation/core'

const SingleProduct = (props) => {
    const route = useRoute();
    const [item, setItem] = useState(route.params.item)
    const [availability, setAvailability] = useState('')
    return (
        <Container style={styles.container}>
            <ScrollView style={{marginBottom : 80, padding : 5}}>
                    <Image
                        source={{
                            uri: item.image ? item.image : 
                            'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                           
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
            </ScrollView>
        </Container>
    )
}

export default SingleProduct

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        height: '100%'
    },
    imageContainer:{
        backgroundColor: 'white',
        padding:0,
        margin:0
    },
    image: {
        width: '100%',
        height: 250
    },
})
