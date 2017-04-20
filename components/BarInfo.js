import React, { PropTypes } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, WebView } from 'react-native';

import { chooseBeerIcon } from './BarMarker';

const { height, width } = Dimensions.get('window');

const borderColor = '#bbb';
const backgroundColor = '#F1EDEA';

const viewCommon = {
  position: 'absolute',
  backgroundColor,
  width,
  height,
};

const badgeSize = height / 10;

const styles = StyleSheet.create({
  hiddenView: {
    ...viewCommon,
    top: height,
  },
  compactView: {
    ...viewCommon,
    top: height * (3.0 / 4.0),
    backgroundColor: 'transparent',
  },
  expandedView: {
    ...viewCommon,
    ...StyleSheet.absoluteFillObject,
  },
  contentView: {
    top: badgeSize / 2,
    flex: 1,
    backgroundColor,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  barDescription: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  priceBadgeView: {
    position: 'absolute',
    left: width * (3 / 4),
    width: badgeSize,
    height: badgeSize,
    borderRadius: badgeSize / 2,
    elevation: 2,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  priceBadge: {
    width: badgeSize,
    height: badgeSize,
  },
});

const BarInfo = ({ bar, walkingDuration, walkingDistance }) => (
  <View
    style={bar ? styles.compactView : styles.hiddenView}
    accessibilityLabel="Bar information"
    pointerEvents="box-none"
  >
    {
      bar &&
        <View style={styles.contentView}>
          <Text style={styles.title}>
            { bar.post_title }
          </Text>
          <Text>
            {bar.post_address}{'\n'}
            {walkingDuration} ({walkingDistance}) walk{'\n'}
          </Text>
          <WebView source={{ html: bar.post_content }} style={styles.barDescription} scrollEnabled={false} />
        </View>
    }
    { bar &&
      <View style={styles.priceBadgeView}>
        <Image source={chooseBeerIcon(bar.post_category)} style={styles.priceBadge} />
      </View>
    }
  </View>
);

BarInfo.defaultProps = {
  bar: null,
};

BarInfo.propTypes = {
  bar: PropTypes.shape({
    post_title: PropTypes.string.isRequired,
  }),
  walkingDuration: PropTypes.string.isRequired,
  walkingDistance: PropTypes.string.isRequired,
};

export default BarInfo;

// Local Variables:
// mode: js2-jsx
// End:
