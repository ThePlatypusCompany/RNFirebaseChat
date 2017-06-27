'use strict';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';

const RootNavigator = StackNavigator(
  {
    SignIn: { name: 'SignIn', screen: SignIn },
    SignUp: { name: 'SignUp', screen: SignUp }
  },
  { headerMode: 'screen' }
);

AppRegistry.registerComponent('RNFirebaseChat', () => RootNavigator);
