'use strict'
import React, { Component } from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseApp from './firebaseConfig.js';
import styles from './styles.js';

class Messages extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Messages',
    headerStyle: styles.messagesHeader,
    headerTitleStyle: styles.messagesTitle,
    headerBackTitleStyle: styles.messagesBackTitle
  });

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <GiftedChat
          messages={[]}
          onSend={{}}
          user={{}}
        />
      </View>
    );
  }
}

export default Messages;
