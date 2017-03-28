import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class PhotoGrid extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (

      <ScrollView>
        <View style={styles.photoGrids}>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/1.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/2.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/3.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/4.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/5.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/6.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/7.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/8.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/9.jpg')}/>
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/10.jpg')}/>
          </View>
        </View>
        <TouchableOpacity style={styles.loginBack} onPress={this.BackLogin}>
          <Text style={styles.loginBackText}>Back To Login Page</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }//end render
  BackLogin = () => {
    var x = this.props.navigator;
    // alert(x);
    this.props.navigator.push({id: 'login'});
  }
}//end class Compontent
const styles = StyleSheet.create({
  photoGrids: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photoWrap: {
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',

  },
  loginBack: {

    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'silver',
    width: null,
    borderRadius: 10,
    padding: 10,
  },
  loginBackText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    // borderWidth: 5,
    alignSelf: 'stretch',
    padding: 10,
    borderColor: '#98b4c4',
    borderRadius: 5,
    backgroundColor: '#98b4c4',
  }

});
