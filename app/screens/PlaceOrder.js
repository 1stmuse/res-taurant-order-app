import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Screen from '../components/Screen';

const PlaceOrder = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text>Order Details</Text>
        </View>
        <View>
          <Text>how would you like pay</Text>
          <View>
            <View>
              <Text>Cash</Text>
            </View>
            <View>
              <Text>Card</Text>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PlaceOrder;
