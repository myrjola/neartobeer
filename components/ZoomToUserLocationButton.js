import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };
const COORDINATE1 = {
  latitude: 59.329323 - 0.01,
  longitude: 18.068580 - 0.01,
};
const COORDINATE2 = {
  latitude: 59.329323 + 0.01,
  longitude: 18.068580 + 0.01,
};

const zoomToUserLocation = () => {
  this.map.fitToCoordinates([COORDINATE1, COORDINATE2], {
    edgePadding: DEFAULT_PADDING,
    animated: true,
  });
};

const ZoomToUserLocationButton = () => (
  <TouchableHighlight onPress={zoomToUserLocation}>
    <Text>Zoom</Text>
  </TouchableHighlight>
);

export default ZoomToUserLocationButton;

// Local Variables:
// mode: js2-jsx
// End:
