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

  constructor(props) {
    super(props);
    var firebaseDB = firebaseApp.database();
    this.roomsRef = firebaseDB.ref('rooms');
    this.state = {
      rooms: [],
      newRoom: ''
    }
  }

  componentDidMount() {
    this.listenForRooms(this.roomsRef);
  }

  listenForRooms(roomsRef) {
    roomsRef.on('value', (dataSnapshot) => {
      var roomsFB = [];
      dataSnapshot.forEach((child) => {
        roomsFB.push({
          name: child.val().name,
          key: child.key
        });
      });
      this.setState({ rooms: roomsFB });
    });
  }

  addRoom() {
    if (this.state.newRoom === '') {
      return;
    }
    this.roomsRef.push({ name: this.state.newRoom });
    this.setState({ newRoom: '' });
  }

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
