import React, { PropTypes } from 'react';
import { Dimensions, StyleSheet, Text, View, WebView } from 'react-native';

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
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  barDescription: {
    flex: 1,
    backgroundColor: 'transparent',
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
