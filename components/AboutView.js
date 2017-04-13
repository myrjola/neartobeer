import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: '#fcbb3a',
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
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    textAlign: 'center',
  },
});

const AboutView = () => (
  <View style={styles.appView} accessibilityLabel="About the service">
    <View style={styles.text}>
      <Text style={styles.title}>
        Beeriffic
      </Text>
      <Text style={styles.subtitle}>
        Your best bet to get a cheap beer nearby
      </Text>
    </View>
  </View>
);

export default AboutView;

// Local Variables:
// mode: js2-jsx
// End:
