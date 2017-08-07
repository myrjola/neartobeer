import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  aboutIcon: {
    marginRight: 0,
  },
  buttonStyle: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AboutButton = ({ style }) => (
  <View style={style}>
    <Icon.Button
      name="bars"
      size={26}
      iconStyle={styles.aboutIcon}
      onPress={Actions.aboutView}
      accessibilityLabel="About button"
      borderRadius={5}
      style={styles.buttonStyle}
      backgroundColor="#f47621"
    />
  </View>
);

AboutButton.propTypes = {
  style: View.propTypes.style,
};

AboutButton.defaultProps = {
  style: {},
};

export default AboutButton;

// Local Variables:
// mode: react
// End:
