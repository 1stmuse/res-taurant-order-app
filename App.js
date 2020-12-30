import 'react-native-gesture-handler'

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './app/components/Screen'
import RootStack from './app/rootStacks/index'

const Main = () =>{
  return (
    <NavigationContainer>
      <RootStack/>
   </NavigationContainer>
  )
}

const App =() => {
  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='tomato' />
      {/* <Screen > */}
          <Main/>
      {/* </Screen> */}
    </>
  );
};



export default App;
