import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const RandomFoodCard =({food}) =>{


  return (
    <View style={styles.container} >
        <View style={{width:'100%', height:200, overflow:'hidden'}}>
            <Image source={food.img} resizeMode='stretch' style={{width:'100%', height:'100%'}} />
        </View>
        <View style={styles.foodName} >
            <Text style={{fontSize:22, color:'tomato', fontWeight:'bold'}} >{food.name} </Text>
        </View>
        <View style={styles.price} >
            <Text style={{fontWeight:'bold', fontSize:15, color:'white'}} >{food.amount} </Text>
        </View>
    </View>
   )

}


const styles = StyleSheet.create({
   container:{
      width: '100%',
      height: 280,
      marginBottom:20,
      borderRadius:10,
    //   borderWidth:1,
      backgroundColor:'white',
      overflow:'hidden',
      elevation:5,
      position:'relative'
   },
   foodName:{
       alignItems:'center',
       justifyContent:'center',
       flex:1,
   },
   price:{
       position:'absolute',
       width:90,
       height:90,
       borderRadius:45,
       backgroundColor:'tomato',
       justifyContent:'center',
       alignItems:'center',
       bottom:80,
       right:0
   }
})
export default RandomFoodCard