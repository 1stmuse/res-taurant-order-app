/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {menus} from '../data';
import Screen from '../components/Screen';
import RandomFoodCard from '../components/RandomFoodCard';

const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.main}>
        <FlatList
          data={menus}
          renderItem={({item}) => <RandomFoodCard food={item} />}
          keyExtractor={({name}) => name}
          bounces={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
export default HomeScreen;
