'use strict';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUp from './components/SignUp.js';

const RootNavigator = StackNavigator(
  {
    SignUp: { name: 'SignUp', screen: SignUp }
  },
  { headerMode: 'screen' }
);

AppRegistry.registerComponent('RNFirebaseChat', () => RootNavigator);
