import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const PickerItem = ({menu, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cat}>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 20, color: 'white'}}>{menu}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  cat: {
    // width: '100%',
    borderRadius: 15,
    backgroundColor: 'tomato',
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
export default PickerItem;
