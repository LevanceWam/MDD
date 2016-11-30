import React, { Component } from 'react';
import{
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
type State = { animating: boolean; };
type Timer = number;

export default class ActivComp extends Component {
  
  state: State;
  _timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[{height: 200}]}
        size="large"
      />
    );
  }
}
