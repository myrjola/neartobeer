import React, { PropTypes } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, WebView } from 'react-native';

import { chooseBeerIcon } from './BarMarker';

const { height, width } = Dimensions.get('window');

const borderColor = '#bbb';

const viewCommon = {
  position: 'absolute',
  backgroundColor: '#F1EDEA',
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
    borderTopColor: borderColor,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  expandedView: {
    ...viewCommon,
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  barDescription: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  priceBadgeBorder: {
    position: 'absolute',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor,
    left: width * (3 / 4),
    top: -badgeSize / 2,
    width: badgeSize,
    height: badgeSize,
    borderRadius: badgeSize / 2,
  },
  priceBadge: {
    width: badgeSize,
    height: badgeSize,
  },
});

const BarInfo = ({ bar }) => (
  <View style={bar ? styles.compactView : styles.hiddenView} accessibilityLabel="Bar information">
    {
      bar &&
        <View style={StyleSheet.absoluteFillObject}>
          <Text style={styles.title}>
            { bar.post_title }
          </Text>
          <Text>
            {bar.post_address}{'\n'}
          </Text>
          <WebView source={{ html: bar.post_content }} style={styles.barDescription} scrollEnabled={false} />
          <View style={styles.priceBadgeBorder}>
            <Image source={chooseBeerIcon(bar.post_category)} style={styles.priceBadge} />
          </View>
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
};


export default BarInfo;

// Local Variables:
// mode: js2-jsx
// End:
