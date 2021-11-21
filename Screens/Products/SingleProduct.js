import React,{useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import {Left,Right,Container,H1, Button} from 'native-base'
import { useRoute } from '@react-navigation/core'

const SingleProduct = (props) => {
    const route = useRoute();
    const [item, setItem] = useState(route.params.item)
    const [availability, setAvailability] = useState('')
    return (
        <Container style={styles.container}>
            <ScrollView style={{marginBottom : 80, padding : 5}}>
                    <View>
                    <Image
                        source={{
                            uri: item.image ? item.image : 
                            'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                           
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    </View>
                    <View style={styles.contentContainer}>
                        <H1 style={styles.contentHeader}>{item.name}</H1>
                        <Text style={styles.contentText}>{item.brand}</Text>
                    </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <Left>
                    <Text style={styles.price}>$ {item.price}</Text>
                </Left>
                <Right>
                   <Button>
                       <Text style={{ color: 'white'}}>Add</Text>
                   </Button>
                </Right>

            </View>
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
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    },
})
