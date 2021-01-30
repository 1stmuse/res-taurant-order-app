/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Screen from '../components/Screen';
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
    <Screen>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}> {food.name} </Text>
            <View style={{height: 200}}>
              <Image
                source={food.img}
                resizeMode="stretch"
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
          <View style={styles.actions}>
            <View style={styles.contentAction}>
              <Text style={styles.contentActionText}>Content</Text>
              <View style={styles.contentWrapper}>
                <View style={styles.content}>
                  <Text style={[styles.actionText, {textAlign: 'left'}]}>
                    Shawama
                  </Text>
                  <Text style={styles.actionText}>1</Text>
                  <TouchableOpacity style={styles.addContent}>
                    <Text
                      style={[
                        styles.actionText,
                        {
                          textAlign: 'center',
                          minWidth: 50,
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 22,
                        },
                      ]}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <Text style={[styles.actionText, {textAlign: 'left'}]}>
                    Egg
                  </Text>
                  <Text style={styles.actionText}>1</Text>
                  <TouchableOpacity style={styles.addContent}>
                    <Text
                      style={[
                        styles.actionText,
                        {
                          textAlign: 'center',
                          minWidth: 50,
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 22,
                        },
                      ]}>
                      +{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.orderOut}>
              <Text style={[styles.contentActionText, {marginBottom: 15}]}>
                Order Out
              </Text>
              <View style={styles.content}>
                <Text style={[styles.actionText, {textAlign: 'left'}]}>
                  Quantity
                </Text>
                <Text style={styles.actionText}>1</Text>
                <TouchableOpacity style={styles.addContent}>
                  <Text
                    style={[
                      styles.actionText,
                      {
                        textAlign: 'center',
                        minWidth: 50,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 22,
                      },
                    ]}>
                    +{' '}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.orderButton}>
                  <Text
                    style={[
                      {color: 'white', fontWeight: 'bold', fontSize: 20},
                    ]}>
                    Place order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  actions: {
    padding: 15,
    flex: 1,
  },
  addContent: {
    backgroundColor: 'tomato',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  contentAction: {},
  contentActionText: {
    alignSelf: 'center',
    fontSize: 25,
  },
  actionText: {
    minWidth: 80,
    textAlign: 'center',
    fontSize: 20,
  },
  contentWrapper: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
  orderButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 12,
    borderRadius: 50,
    // borderTopLeftRadius:50,
    // borderBottomRightRadius:50
  },
  orderOut: {
    // position: 'absolute',
    marginTop: 50,
    alignSelf: 'center',
    bottom: 10,
    width: '100%',
  },
  text: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 20,
  },
});
export default FoodDetails;
