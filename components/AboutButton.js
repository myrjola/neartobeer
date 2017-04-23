import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  aboutIcon: {
    marginRight: 0,
  },
});

const AboutButton = () => (
  <Icon.Button
    name="md-beer"
    size={26}
    iconStyle={styles.aboutIcon}
    onPress={Actions.aboutView}
    accessibilityLabel="About button"
  />
);

export default AboutButton;

// Local Variables:
// mode: js2-jsx
// End:
