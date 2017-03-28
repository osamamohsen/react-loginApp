import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Bar extends Component {

  render() {

    return (

      <View style={styles.bar}>
        <View style={[styles.barItem,styles.barseparator]}>
          <Text style={styles.barTop}>12K</Text>
          <Text style={styles.barBottom}>19K</Text>
        </View>
        <View style={styles.barItem}>
          <Text style={styles.barTop}>322</Text>
          <Text style={styles.barBottom}>Following</Text>
        </View>
      </View>

    );
  }//end render
}//end class Compontent
const styles = StyleSheet.create({
  bar: {
    borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: '#ec2e4a',
    flexDirection: 'row',
  },
  barseparator: {
    borderRightWidth: 4,
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
    padding: 18,
  },
  barTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  barBottom: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',

  }
});
