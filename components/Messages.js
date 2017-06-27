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
    title: navigation.state.params.roomName,
    headerStyle: styles.messagesHeader,
    headerTitleStyle: styles.messagesTitle,
    headerBackTitleStyle: styles.messagesBackTitle
  });

  constructor(props) {
    super(props);
    var FirebaseDB = firebaseApp.database();
    var roomKey = this.props.navigation.state.params.roomKey;
    this.messagesRef = FirebaseDB.ref(`messages/${roomKey}`);
    this.state = {
      user: '',
      messages: []
    }
  }

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
