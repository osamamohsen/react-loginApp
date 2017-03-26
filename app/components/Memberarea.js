import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

export default class Memberarea extends Component {

  constructor(props){
    super(props);
    this.state= {
      username: [],
    }
  }


  //called before draw render
  componentDidMount(){
    this._loadInitialState().done();
  }

  //load initial State
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('username'); // after push username now it could fetch
    if(value != null){
      // it pushed
      this.setState({username: value})
    }
    //check if not exist
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {this.state.username} in React Native</Text>
        <TouchableOpacity style={styles.loginBack}  onPress={this.returnLogin}>
          <Text style={styles.loginBackText}>
            Login Page
          </Text>
        </TouchableOpacity>
    </View>
    );
  }//end render
  returnLogin = () => {
    this.props.navigator.pop(); // that mean pop the last value
  }
}//end class Compontent
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 18,
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
