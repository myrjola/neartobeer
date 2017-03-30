import React, { Component } from 'react';

import MapView from 'react-native-maps';

const greenmug = require('./images/GreenMug.png');
const yellowmug = require('./images/YellowMug.png');
const redmug = require('./images/RedMug.png');

const marker = {
  latlng: {
    latitude: 59.329323,
    longitude: 18.068580,
  },
};

export default class BeersUnderX extends Component {
  render() {
    var category = 'Beer under 30';
    var icon;
    switch (category) {
      case 'Beer under 30':
        icon = greenmug;
        break;
      case 'Beer under 40':
        icon = yellowmug;
        break;
      default:
      case 'Beer under 50':
        icon = redmug;
        break;
    }
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 59.329323,
          longitude: 18.068580,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
          title="Bar 1"
          description="Beer under 30"
          coordinate={marker.latlng}
          image={icon}
        />
      </MapView>
    );
  }
}

// Local Variables:
// mode: js2-jsx
// End:
