import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import api from '../utils/api';

var styles = StyleSheet.create({
  bottomBump: {
    marginBottom: 15,
  },
});

export default class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { photo: null, };
  }

  componentWillMount() {
    var _this = this;
    api.getProfileInfo(this.props.user)
      .then((responseData) => {
        _this.setState({
          info: {
            name: responseData.name,
            email: responseData.email,
          },
        });
      })
      .done();
  }

  render() {
    var info = this.state.info;

    return (
      <View style={styles.bottomBump}>
        <Text>{ info && info.name }</Text>
        <Text>{ info && info.email }</Text>
      </View>
    )
  }
}
