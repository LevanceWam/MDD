/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import OnSwitchComp from './app/SwitchComp';
import DateComp from './app/DateComp';
import ActivComp from './app/ActivComp';
import ModalComp from './app/ModalComp';
import WebComp from './app/WebComp';

export default class WeekOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <OnSwitchComp/>
        <DateComp/>
        <ActivComp/>
        <ModalComp/>
        <WebComp/>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WeekOne', () => WeekOne);
