import 'react-native-gesture-handler'

import React from 'react';
import { SafeAreaView, StyleSheet, View,Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

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
      {/* <StatusBar barStyle="dark-content" backgroundColor='red' /> */}
      <SafeAreaView style={styles.scrollView} >
          <Main/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex:1
  },
});

export default App;
