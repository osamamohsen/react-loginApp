import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import Header from './Header';
import Bar from './Bar';
import PhotoGrid from './PhotoGrid';
export default class Memberarea extends Component {

  constructor(props){
    super(props);
    // alert(this.props.navigator);
  }

  render() {

    return (

      <View style={styles.container}>
        <Header />
        <Bar />
        <PhotoGrid navigator={this.props.navigator} />
      </View>

    );
  }//end render
}//end class Compontent
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
