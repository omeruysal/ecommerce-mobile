import React, { useEffect, useState, useContext} from 'react'
import { Text, View, Button , StyleSheet} from 'react-native'
import { Item, Picker, Toast } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormContainer from '../../../Components/Form/FormContainer'
import Input from '../../../Components/Form/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'


const countries = require("../../../assets/data/countries.json");

const Checkout = () => {
    const {navigate} = useNavigation();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems);

    const [ orderItems, setOrderItems ] = useState();
    const [ address, setAddress ] = useState();
    const [ address2, setAddress2 ] = useState();
    const [ city, setCity ] = useState();
    const [ zip, setZip ] = useState();
    const [ country, setCountry ] = useState();
    const [ phone, setPhone ] = useState();
    const [ user, setUser ] = useState();

    useEffect(() => {
        setOrderItems(cartItems);

        return () => {
            setOrderItems();
        }
    }, [])
    const checkOut = () =>{
        let order = {
            city,
            country,
            dateOrdered: Date.now(),
            orderItems,
            phone,
            shippingAddress1: address,
            shippingAddress2: address2,
            status: "3",
            user,
            zip,
        }
        navigate("Payment", {order} );
    }
    return (
        <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
        >
        <FormContainer title='Shipping Address'>
                    <Input
                    placeholder={"Phone"}
                    name={"phone"}
                    value={phone}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPhone(text)}
                />
                   <Input
                    placeholder={"Shipping Address 1"}
                    name={"ShippingAddress1"}
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                   <Input
                    placeholder={"Shipping Address 2"}
                    name={"ShippingAddress2"}
                    value={address2}
                    onChangeText={(text) => setAddress2(text)}
                />
                   <Input
                    placeholder={"City"}
                    name={"city"}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                />
                   <Input
                    placeholder={"Zip Code"}
                    name={"zip"}
                    value={zip}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setZip(text)}
                />
                <Item picker>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" color={"#007aff"} />}
                        style={{ width: undefined }}
                        selectedValue={country}
                        placeholder="Select your country"
                        placeholderStyle={{ color: '#007aff' }}
                        placeholderIconColor="#007aff"
                        onValueChange={(e) => setCountry(e)}
                    >
                        {countries.map((c) => {
                            return <Picker.Item 
                                    key={c.code} 
                                    label={c.name}
                                    value={c.name}
                                    />
                        })}
                    </Picker>
                </Item>
                <View style={{ width: '80%', alignItems: "center" }}>
                    <Button title="Confirm" onPress={() => checkOut()}/>
                </View>

        </FormContainer>
        </KeyboardAwareScrollView>
    )
}

export default Checkout;