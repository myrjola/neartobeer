import React, { Component } from 'react';

import MapView from 'react-native-maps';

export default class BeersUnderX extends Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
