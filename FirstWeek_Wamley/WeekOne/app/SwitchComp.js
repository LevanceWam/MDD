import React, { Component } from 'react';
import{
  Platform,
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native';

export default class OnSwitchComp extends Component{
  state = {
      SwitchIsOn: true,
      SwitchIsOff: false,
    };
    render() {
      return (
        <View>
        <Switch
              onValueChange={(value) => this.setState({SwitchIsOff: value})}
              onTintedColor="#FC4O2C"
              thumbTintColor="#FDA3C9"
              tintColor="#AEC785"
              style={{marginBottom:30,
                      marginTop:20
                    }}
              value={this.state.SwitchIsOff} />


            <Switch
              onValueChange={(value) => this.setState({SwitchIsOn: value})}
              onTintedColor="#FFFF00"
              thumbTintColor="#66CCCC"
              tintColor="#333333"
              style={{marginBottom:30}}
              value={this.state.SwitchIsOn} />
        </View>
      )
    }
};
