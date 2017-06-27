'use strict';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Rooms from './components/Rooms.js';

const RootNavigator = StackNavigator(
  {
    SignIn: { name: 'SignIn', screen: SignIn },
    SignUp: { name: 'SignUp', screen: SignUp },
    Rooms: { name: 'Rooms', screen: Rooms }
  },
  { headerMode: 'screen' }
);

AppRegistry.registerComponent('RNFirebaseChat', () => RootNavigator);
