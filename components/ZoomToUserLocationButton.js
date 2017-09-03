import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { badgeSize, borderColor } from '../constants';

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
  buttonStyle: {
    height: badgeSize,
    width: badgeSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ZoomToUserLocationButton = ({ style }) => (
  <View style={style} accessibilityLabel="Center on user">
    <Icon.Button
      name="gps-fixed"
      size={24}
      iconStyle={styles.gpsIcon}
      onPress={zoomToUserLocation}
      style={styles.buttonStyle}
      backgroundColor="transparent"
      color={borderColor}
    />
  </View>
);

ZoomToUserLocationButton.propTypes = {
  style: View.propTypes.style,
};

ZoomToUserLocationButton.defaultProps = {
  style: {},
};

export default ZoomToUserLocationButton;

// Local Variables:
// mode: react
// End:
