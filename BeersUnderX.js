import React, { Component } from 'react';

import MapView from 'react-native-maps';

export default class BeersUnderX extends Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 59.329323,
          longitude: 18.068580,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

// Local Variables:
// mode: js2-jsx
// End:
