import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const AboutButton = () => (
  <TouchableHighlight onPress={Actions.aboutView}>
    <View accessibilityLabel="About button">
      <Text>About</Text>
    </View>
  </TouchableHighlight>
);

export default AboutButton;

// Local Variables:
// mode: js2-jsx
// End:
