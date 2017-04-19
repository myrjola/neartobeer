import React, { PropTypes } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get('window');

const viewCommon = {
  position: 'absolute',
  backgroundColor: '#F1EDEA',
  width,
  height,
};

const styles = StyleSheet.create({
  hiddenView: {
    ...viewCommon,
    top: height,
  },
  compactView: {
    ...viewCommon,
    top: height * (3.0 / 4.0),
    borderTopColor: '#bbb',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  expandedView: {
    ...viewCommon,
    ...StyleSheet.absoluteFillObject,
  },
});

const BarInfo = ({ bar }) => (
  <View style={bar ? styles.compactView : styles.hiddenView} accessibilityLabel="Bar information">
    {
      bar &&
        <View>
          <Text>
            Beeriffic
          </Text>
          <Text>
            { bar.post_title }
          </Text>
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
