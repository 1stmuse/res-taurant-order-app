import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

// import screens
import TabRoot from './tabs/index'

const options = {
    headerShown:false
  }

// const tabs = createMaterialBottomTabNavigator()
const stack = createStackNavigator()
// const drawer = createDrawerNavigator()

const Home =({navigation}) =>{

    return (
     <TabRoot/>
     )
  
  }

const RootStack =() =>{

  return (
    <stack.Navigator >
        <stack.Screen name='homeRoot' component={Home} options={{...options}} />
    </stack.Navigator>
   )

}


const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
   }
})
export default RootStack