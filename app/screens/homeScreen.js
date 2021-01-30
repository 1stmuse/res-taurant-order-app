/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {menus} from '../data';
import Screen from '../components/Screen';
import RandomFoodCard from '../components/RandomFoodCard';
import AppPicker from '../components/AppPicker';

const HomeScreen = () => {
  const [category, setCategory] = useState('');
  const selectCatgeory = (cat) => {
    setCategory(cat);
  };
  return (
    <Screen style={{paddingTop: 0}}>
      <View>
        <AppPicker
          selectedItem={category}
          placeholder="Category"
          icon="apps"
          menus={menus}
          selectCat={selectCatgeory}
        />
      </View>
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
    marginTop: 20,
    backgroundColor: 'white',
  },
});
export default HomeScreen;
