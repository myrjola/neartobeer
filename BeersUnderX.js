import React from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import FilteredBarMap from './containers/FilteredBarMap';
import MaxBeerPriceSelector from './containers/MaxBeerPriceSelector.js';

const store = configureStore();

const styles = StyleSheet.create({
  buttonRow: {
    padding: 10,
    backgroundColor: '#F1EDEA',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };
const COORDINATE1 = {
  latitude: 59.329323 - 0.01,
  longitude: 18.068580 - 0.01,
};
const COORDINATE2 = {
  latitude: 59.329323 + 0.01,
  longitude: 18.068580 + 0.01,
};

const zoomToUserLocation = () => {
  this.map.fitToCoordinates([COORDINATE1, COORDINATE2], {
    edgePadding: DEFAULT_PADDING,
    animated: true,
  });
};

const BeersUnderX = () => (
  <Provider store={store}>
    <View style={StyleSheet.absoluteFillObject}>
      <StatusBar hidden={true} />
      <FilteredBarMap />
      <View style={styles.buttonRow}>
        <Text>About</Text>
        <MaxBeerPriceSelector />
        <TouchableHighlight onPress={zoomToUserLocation}>
          <Text>Zoom</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Provider>
);

export default BeersUnderX;

// Local Variables:
// mode: js2-jsx
// End:
