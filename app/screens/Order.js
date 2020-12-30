import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Screen from '../components/Screen'

const Order =() =>{

  return (
      <Screen>
         <View style={styles.container} >
               <Text>Order screen</Text>
         </View>
      </Screen>
   )

}


const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
   }
})
export default Order