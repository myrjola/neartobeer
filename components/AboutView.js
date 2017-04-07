import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    // There is a NavBar on top. This was the best way to not get overlapped by
    // it https://github.com/aksonov/react-native-router-flux/issues/1279#issuecomment-253459678
    ...Platform.select({
      ios: {
        top: 64,
      },
      android: {
        top: 54,
      },
    }),
  },
});

const AboutView = () => (
  <View style={styles.appView}>
    <Text>{'\n'}Contact info, graphics and other cool stuff.</Text>
  </View>
);

export default AboutView;

// Local Variables:
// mode: js2-jsx
// End:
