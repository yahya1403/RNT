import React from 'react';
import { Text, View,Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SearchBar} from 'react-native-elements'

import Home from './Home';
import Detail from './Detail';

const Navigator=createStackNavigator({
    Home: {screen: Home},
    Detail: {screen: Detail}
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
);

const App=createAppContainer(Navigator);
export default App;
