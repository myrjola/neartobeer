import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import beersUnderXApp from './reducers';

import FilteredBarMap from './containers/FilteredBarMap';

const store = createStore(beersUnderXApp);

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
