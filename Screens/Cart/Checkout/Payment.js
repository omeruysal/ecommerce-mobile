import { useNavigation, useRoute } from '@react-navigation/core'
import React,{useState} from 'react'
import { StyleSheet, View, Button} from 'react-native'
import {
    Container,
    Header,
    Content,
    ListItem,
    Text,
    Radio,
    Right,
    Left,
    Picker,
    Body,
    Title
} from 'native-base';
import {SimpleLineIcons} from 'react-native-vector-icons'
const methods = [
    { name: 'Cash on Delivery', value: 1 },
    { name: 'Bank Transfer', value: 2 },
    { name: 'Card Payment', value: 3}
]
const paymentCards = [
    { name: 'Wallet', value: 1 },
    { name: 'Visa', value: 2 },
    { name: 'MasterCard', value: 3},
    { name: 'Other', value: 4}
]


const Payment = (props) => {
    const {navigate} = useNavigation()
    const route = useRoute();

     const order = route.params;
    

    const [selected, setSelected] = useState();
    const [card, setCard] = useState();
    return (
        <Container>
        <Header>
            <Body>
                <Title>Choose your payment method</Title>
            </Body>
        </Header>
        <Content>
            {methods.map((item, index) => {
                return (
                    <ListItem key={item.name} onPress={() => setSelected(item.value)}>
                        <Left>
                         <Text>{item.name}</Text>
                        </Left>
                        <Right>
                            <Radio selected={selected == item.value}/>
                        </Right>
                    </ListItem>
                )
            })}
            {selected == 3 ? (
                <Picker
                 mode="dropdown"
                 iosIcon={<SimpleLineIcons name={"arrow-down"}/>}
                 headerStyle={{ backgroundColor: 'orange' }}
                 headerBackButtonTextStyle={{ color: '#fff' }}
                 headerTitleStyle={{ color: '#fff' }}
                 selectedValue={card}
                 onValueChange={(x) => setCard(x)}
                >
                    {paymentCards.map((c, index) => {
                        return <Picker.Item 
                        key={c.name} 
                        label={c.name} 
                        value={c.name} />
                    })}
                </Picker>
            ) : null }
            <View style={{ marginTop: 60, alignSelf: 'center' }}>
                    <Button 
                    title={"Confirm"} 
                    onPress={() =>navigate("Confirm", { order })}/>
            </View>
        </Content>
    </Container>
    )
}

export default Payment

const styles = StyleSheet.create({})
