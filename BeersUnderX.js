import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import beersUnderXReducer from './reducers';

import FilteredBarMap from './containers/FilteredBarMap';

const store = createStore(beersUnderXReducer);

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
