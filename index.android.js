/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import Login from './app/components/Login';
import Memberarea from './app/components/Memberarea';
export default class loginApp extends Component {
  render() {
    return (
      <Navigator  initialRoute={{id: 'login'}}
                  renderScene={this.navigatorRenderScene} />
    );
  }//end render

  navigatorRenderScene(route,navigator){
    _navigator: navigator;
    switch (route.id) {
      case 'login':
        return (<Login navigator= {navigator} />);
      case 'Memberarea':
        return ( <Memberarea navigator= {navigator} />);
    }
  }//END NAVIGATOR FUNCTION
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('loginApp', () => loginApp);
