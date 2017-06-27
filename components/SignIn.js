'use strict';
import React, { Component } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import firebaseApp from './firebaseConfig.js';
import styles from './styles.js';

class SignIn extends Component {
  static navigationOptions = {
    title: 'SignIn',
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userPassword: ''
    }
  }

  async signIn() {
    if (this.state.userEmail != '' && this.state.userPassword != '') {
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword);
        console.log(this.state.userEmail + ' signed in');
      } catch(error) {
        console.log(error.toString());
        Alert.alert(error.toString());
      }
    }
    else {
      Alert.alert(
        'Invalid Sign In',
        'The Email and Password fields cannot be blank.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.keyboardView}
        contentContainerStyle={styles.authContainer}
        behavior={'position'}
      >
        <StatusBar barStyle='light-content'/>
        <Text style={styles.appTitle}>Chatypus!</Text>
        <Text style={styles.authInputLabel}>Email</Text>
        <TextInput
          style={styles.authTextInput}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          placeholder={'example@email.com'}
          placeholderTextColor={'#fff'}
          onChangeText={(text) => this.setState({ userEmail: text })}
        />
        <Text style={styles.authInputLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.authTextInput}
          placeholder={'password'}
          placeholderTextColor={'#fff'}
          onChangeText={(text) => this.setState({ userPassword: text })}
        />
        <TouchableHighlight style={styles.authButton}
          underlayColor={'#1E90FF'}
          onPress={this.signIn.bind(this)}
        >
          <Text style={styles.authButtonText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'#1E90FF'}
        >
          <Text style={styles.authLowerText}>Go to Sign Up</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

export default SignIn;
