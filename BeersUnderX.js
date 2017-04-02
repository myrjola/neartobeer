import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';


import FilteredBarMap from './containers/FilteredBarMap';

const store = configureStore();

export default class BeersUnderX extends Component {
  render() {
    return (
      <Provider store={store}>
        <FilteredBarMap />
      </Provider>
    );
  }
}

// Local Variables:
// mode: js2-jsx
// End:
