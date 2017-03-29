/**
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class BeersUnderX extends Component {
  render() {
    return (
      <Text>{'\n'}Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('beersunderx', () => BeersUnderX);

// Local Variables:
// mode: js2-jsx
// End:
