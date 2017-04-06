import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const boxAroundCoordinates = (position) => {
  const coordinates = position.coords;
  const PADDING = 0.01;
  const upperLeft = {
    latitude: coordinates.latitude - PADDING,
    longitude: coordinates.longitude - PADDING,
  };
  const bottomRight = {
    latitude: coordinates.latitude + PADDING,
    longitude: coordinates.longitude + PADDING,
  };
  return [upperLeft, bottomRight];
};

const zoomToUserLocation = () => navigator.geolocation.getCurrentPosition(
  position => this.map.fitToCoordinates(boxAroundCoordinates(position), { animated: true }),
);

const ZoomToUserLocationButton = () => (
  <TouchableHighlight onPress={zoomToUserLocation}>
    <Text>Zoom</Text>
  </TouchableHighlight>
);

export default ZoomToUserLocationButton;

// Local Variables:
// mode: js2-jsx
// End:
