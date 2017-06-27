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

class SignUp extends Component {
  static navigationOptions = {
    title: 'SignUp',
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userPassword: ''
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
        />
        <Text style={styles.authInputLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.authTextInput}
          placeholder={'password'}
          placeholderTextColor={'#fff'}
        />
        <TouchableHighlight style={styles.authButton}
          underlayColor={'#1E90FF'}
        >
          <Text style={styles.authButtonText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'#1E90FF'}
        >
          <Text style={styles.authLowerText}>Go to Sign In</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

export default SignUp;
