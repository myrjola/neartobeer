import React, { PropTypes } from 'react';
import MapView from 'react-native-maps';
import { Image, StyleSheet } from 'react-native';

import { BEER_UNDER_30, BEER_UNDER_40, BEER_UNDER_50 } from '../reducers/maxBeerPriceCategory';

import greenmug from '../images/GreenMug.png';
import yellowmug from '../images/YellowMug.png';
import redmug from '../images/RedMug.png';

const barMarkerSize = 32;

const styles = StyleSheet.create({
  barMarker: {
    width: barMarkerSize,
    height: barMarkerSize,
  },
});

export function chooseBeerIcon(maxBeerPriceCategory) {
  switch (maxBeerPriceCategory) {
    case BEER_UNDER_30:
      return greenmug;
    case BEER_UNDER_40:
      return yellowmug;
    default:
    case BEER_UNDER_50:
      return redmug;
  }
}

export const getBarCoordinate = bar => ({
  latitude: bar.post_latitude,
  longitude: bar.post_longitude,
});

const BarMarker = ({ bar, onPress }) => (
  <MapView.Marker
    coordinate={getBarCoordinate(bar)}
    onPress={onPress}
  >
    <Image source={chooseBeerIcon(bar.post_category)} style={styles.barMarker} />
    <MapView.Callout tooltip={true} />
  </MapView.Marker>
);

BarMarker.propTypes = {
  bar: PropTypes.shape({
    post_title: PropTypes.string.isRequired,
    post_content: PropTypes.string,
    post_category: PropTypes.string.isRequired,
    post_latitude: PropTypes.number.isRequired,
    post_longitude: PropTypes.number.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default BarMarker;

// Local Variables:
// mode: js2-jsx
// End:
