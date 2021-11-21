import React ,{}from 'react';
import Header from './Components/Header';
import Main from './Navigators/Main'

//Redux
import {Provider} from 'react-redux'
import store from './Redux/store';

//Navigation
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <Header/>
            <Main/>
        </NavigationContainer>
    </Provider>
  );
}

