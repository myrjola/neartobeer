import React, { Component } from 'react';

import View from 'react-native';

import MapView from 'react-native-maps';

const marker = {
  latlng: {
    latitude: 59.329323,
    longitude: 18.068580,
  }
};

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
          }}>
        <MapView.Marker
          title="Bar 1"
          description="Beer under 30"
          coordinate={marker.latlng}
          image={require('./images/YellowMug.png')}
          />
      </MapView>
    );
  }
}

// Local Variables:
// mode: js2-jsx
// End:
