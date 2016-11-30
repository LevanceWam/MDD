import React, { Component } from 'react';
import{
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';

export default class WebComp extends Component {
  state = {
    scalingEnabled: true,
  };

  render() {
    return (
      <View>
        <WebView
          style={{
            backgroundColor: 'red',
            height: 300,
            marginTop: 20,
            marginBottom: 20
          }}
          source={{uri: 'https://www.youtube.com/watch?v=o3XnXdBEZI0'}}
          scalesPageToFit={this.state.scalingEnabled}
        />
      </View>
    );
  }
}
