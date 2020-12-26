import React from 'react'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

// import screens
import Order from '../screens/Order'

const options = {
    headerShown:false
  }

// const tabs = createBottomTabNavigator()
const stack = createStackNavigator()
// const drawer = createDrawerNavigator()

const Home =({navigation}) =>{

    return (
      <View style={styles.container} >
           <Text style={{fontSize:26}} >home mehn</Text>
           <TouchableOpacity style={{marginTop:20}} onPress={()=>navigation.navigate('order')} >
               <Text style={{color:'blue', fontSize:20}} >Go to order screen</Text>
           </TouchableOpacity>
      </View>
     )
  
  }

const RootStack =() =>{

  return (
    <stack.Navigator >
        <stack.Screen name='homeRoot' component={Home} options={{...options}} />
        <stack.Screen name='order' component={Order} options={()=>({
            headerTitle : 'Make an Order',
            headerTitleAlign:'center'
        })}  />
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