import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';


import FilteredBarMap from './containers/FilteredBarMap';

const store = configureStore();

export default class BeersUnderX extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={StyleSheet.absoluteFillObject}>
          <FilteredBarMap />
        </View>
      </Provider>
    );
  }
}

// Local Variables:
// mode: js2-jsx
// End:
