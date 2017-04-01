import React, { PropTypes } from 'react';
import MapView from 'react-native-maps';

const greenmug = require('../images/GreenMug.png');
const yellowmug = require('../images/YellowMug.png');
const redmug = require('../images/RedMug.png');

function chooseBeerIcon(maxBeerPriceCategory) {
  switch (maxBeerPriceCategory) {
    case 'Beer under 30':
      return greenmug;
    case 'Beer under 40':
      return yellowmug;
    default:
    case 'Beer under 50':
      return redmug;
  }
}

const BarMarker = ({ bar }) => (
  <MapView.Marker
    title={bar.post_title}
    description={bar.post_content}
    coordinate={{
      latitude: bar.post_latitude,
      longitude: bar.post_longitude,
    }}
    image={chooseBeerIcon(bar.post_category)}
  />
);

BarMarker.propTypes = {
  bar: PropTypes.shape({
    post_title: PropTypes.string.isRequired,
    post_content: PropTypes.string,
    post_category: PropTypes.string.isRequired,
    post_latitude: PropTypes.number.isRequired,
    post_longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default BarMarker;

// Local Variables:
// mode: js2-jsx
// End:
