import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import FilteredBarMap from './containers/FilteredBarMap';
import MaxBeerPriceSelector from './containers/MaxBeerPriceSelector.js';

const store = configureStore();

const styles = StyleSheet.create({
  buttonRow: {
    justifyContent: 'space-between',
  },
});

export default class BeersUnderX extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={StyleSheet.absoluteFillObject}>
          <StatusBar hidden={true} />
          <FilteredBarMap />
          <View style={styles.buttonRow}>
            <MaxBeerPriceSelector />
          </View>
        </View>
      </Provider>
    );
  }
}

// Local Variables:
// mode: js2-jsx
// End:
