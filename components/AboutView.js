import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navBarHeight } from '../constants';

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: '#fcbb3a',
    top: navBarHeight,
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
