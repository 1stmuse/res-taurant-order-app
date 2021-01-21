/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {menus} from '../data';

const FoodDetails = ({route}) => {
  const {id} = route.params;
  const [food, setFood] = useState({});

  const showFood = (foodID) => {
    const foodMain = menus.find((item) => item.id === foodID);

    setFood(foodMain);
  };

  useEffect(() => {
    showFood(id);
  });
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 29, color: 'blue'}}> {food.name} </Text>
      <Image
        source={food.img}
        resizeMode="stretch"
        style={{width: '100%', height: '50%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FoodDetails;
