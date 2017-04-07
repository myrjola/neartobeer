import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const AboutButton = () => (
  <TouchableHighlight onPress={Actions.aboutView}>
    <Text>About</Text>
  </TouchableHighlight>
);

export default AboutButton;

// Local Variables:
// mode: js2-jsx
// End:
