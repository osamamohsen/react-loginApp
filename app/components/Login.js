import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/background.jpg')} style={styles.backgroundImage}>
          <View style={styles.content}>
            <Text style={styles.logo}>- NATIVE -</Text>
            <View style={styles.inputContainer}>

              <TextInput underlineColorAndroid="transparent" style={styles.input}

                onChangeText={(username) => this.setState({username})}
                value={this.state.username}

                placeholder="username" placeholderTextColor="silver"></TextInput>

              <TextInput style={styles.input}
                  secureTextEntry={true} underlineColorAndroid="transparent"

                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}

                  placeholder="password" placeholderTextColor="silver"></TextInput>


            </View>
            <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
  login = () => {
    fetch('http://192.168.1.106/ReactProjects/loginApp/backEnd/ReactLogin/public/users',{
        method: "Post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            })
      })
      .then((response) => response.json())
      .then((res) => {
        //if our response had been true
        console.log(res);
        if(res.message === true){
          var username = res.user.username;
          //we yse AsyncStorage to save the username
          AsyncStorage.setItem('username',username);
          this.props.navigator.push({
            id: 'Memberarea'
          });
        }else{
          alert(res.error+", Now Local Login");
          AsyncStorage.setItem('username',this.state.username);
          this.props.navigator.push({
            id: 'Memberarea'
          });
        }
      }).done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    textShadowColor: '#252525',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 15,
    marginBottom: 20,
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
