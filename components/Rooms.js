'use strict'
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  StatusBar,
  ListView,
  FlatList,
  View
} from 'react-native';
import firebaseApp from './firebaseConfig.js';
import styles from './styles.js';

class Rooms extends Component {
  static navigationOptions = {
    title: 'Rooms',
    header: null
  };

  renderRow(item) {
    return (
      <TouchableHighlight style={styles.roomLi}
      underlayColor="#fff"
      >
        <Text style={styles.roomLiText}>{item.name}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.roomsContainer}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.roomsHeader}>Chatypus</Text>
        <View style={styles.roomsInputContainer}>
          <TextInput
            style={styles.roomsInput}
            placeholder={"New Room Name"}
          />
          <TouchableHighlight style={styles.roomsNewButton}
            underlayColor="#fff"
          >
            <Text style={styles.roomsNewButtonText}>Create</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.roomsListContainer}>
          <FlatList
            data={{}}
            renderItem={({item}) => (this.renderRow(item)
            )}
          />
        </View>
      </View>
    );
  }
}

export default Rooms;
