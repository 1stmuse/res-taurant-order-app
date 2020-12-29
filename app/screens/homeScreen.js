import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const HomeScreen =() =>{

  return (
    <View style={styles.main} >
         <Text style={[{fontSize:20}]} >home tab</Text>
    </View>
   )

}


const styles = StyleSheet.create({
   main:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
   }
})
export default HomeScreen