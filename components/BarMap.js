import React, { PropTypes } from 'react';

import MapView from 'react-native-maps';

import BarMarker from './BarMarker';

const BarMap = ({ bars }) => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 59.329323,
      longitude: 18.068580,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    >
    {bars.map(bar => (
      <BarMarker
        key={bar.post_id}
        bar={bar}
        />)
             )
    }
  </MapView>
);

BarMap.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.shape({
    post_id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default BarMap;

// Local Variables:
// mode: js2-jsx
// End:
