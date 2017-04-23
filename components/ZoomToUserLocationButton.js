import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const styles = StyleSheet.create({
  gpsIcon: {
    marginRight: 0,
  },
});

const ZoomToUserLocationButton = () => (
  <Icon.Button name="gps-fixed" size={26} iconStyle={styles.gpsIcon} onPress={zoomToUserLocation} />
);

export default ZoomToUserLocationButton;

// Local Variables:
// mode: js2-jsx
// End:
