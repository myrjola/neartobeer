import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import FilteredBarMap from './containers/FilteredBarMap';
import MaxBeerPriceSelector from './containers/MaxBeerPriceSelector';
import ZoomToUserLocationButton from './components/ZoomToUserLocationButton';

const store = configureStore();

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
  buttonRow: {
    padding: 10,
    backgroundColor: '#F1EDEA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const BeersUnderX = () => (
  <Provider store={store}>
    <View style={styles.appView}>
      <StatusBar hidden={true} />
      <View style={styles.buttonRow}>
        <Text>About</Text>
        <MaxBeerPriceSelector />
        <ZoomToUserLocationButton />
      </View>
      <FilteredBarMap />
    </View>
  </Provider>
);

export default BeersUnderX;

// Local Variables:
// mode: js2-jsx
// End:
