import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

export default class Header extends Component {

  render() {

    return (
      <Image style={styles.headerBackgroud} source={require('../img/background.jpg')}>
        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('../img/profile.jpg')} />
          </View>
          <Text style={styles.name}> John Dee</Text>
          <Text style={styles.pos}>- App Developer -</Text>
        </View>
      </Image>
    );
  }//end render
}//end class Compontent
const styles = StyleSheet.create({
  headerBackgroud: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profilepicWrap: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderWidth: 4,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic',
  }
});
