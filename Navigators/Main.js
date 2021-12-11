import React from 'react'
import { View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import Icon from '@react-native-vector-icons/FontAwesome'
import {Ionicons as Icon, FontAwesome,Entypo} from '@expo/vector-icons'
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';

import CartIcon from '../Components/CartIcon'

const Tab = createBottomTabNavigator();

const Main = ()=>{
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions = {{
            keyboardOptions: true,
            showLabel : false,
            activeTintColor:'#e91e63'}}
        >  
            <Tab.Screen name='Home' component={HomeNavigator} 
                options={{headerShown:false ,tabBarIcon:({color})=>(
                    <Icon name='home' style={{position:'relative'}} color={color} size={30}/>
                    )}}/>

            <Tab.Screen name='Cart' component={CartNavigator} 
                options={{headerShown:false ,tabBarIcon:({color})=>(
                    <View>
                    <Entypo name='shopping-cart' style={{position:'relative'}} color={color} size={30}/>
                    <CartIcon/>
                    </View>
                    )}}/>

            <Tab.Screen name='Admin' component={HomeNavigator} 
                options={{tabBarIcon:({color})=>(
                    <Icon name='cog' color={color} size={30}/>
                    )}}/>

            <Tab.Screen name='User' component={HomeNavigator} 
                options={{tabBarIcon:({color})=>(
                    <FontAwesome name='user' style={{position:'relative'}} color={color} size={30}/>
                    ) }}/>
        </Tab.Navigator>
    )
}
export default Main;