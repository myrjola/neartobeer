import React, { PropTypes } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View, WebView } from 'react-native';

import { chooseBeerIcon } from './BarMarker';

const { height, width } = Dimensions.get('window');

const borderColor = '#bbb';
const backgroundColor = '#F1EDEA';

const badgeSize = height / 10;
const badgeXPosition = width * (3 / 4);

const styles = StyleSheet.create({
  barInfo: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width,
    height,
    top: height,
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
    width: badgeXPosition,
  },
  barDescription: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  priceBadgeView: {
    position: 'absolute',
    left: badgeXPosition,
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

const BarInfoText = ({ bar, walkingDuration, walkingDistance }) => (
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
);

const BarPriceBadge = ({ bar }) => (
  <View style={styles.priceBadgeView}>
    <Image source={chooseBeerIcon(bar.post_category)} style={styles.priceBadge} />
  </View>
);

class BarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      yPosition: new Animated.Value(0),
      props: {
        walkingDistance: '',
        walkingDuration: '',
        // We have to store the props so that we get a sane slideout animation.
        ...props,
        // Bar may be null, so let's provide a default.
        bar: {
          post_title: '',
          post_content: '',
          post_category: '',
          post_address: '',
          ...props.bar,
        },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const barIsSelected = nextProps.bar;
    if (barIsSelected) {
      this.state.props = nextProps;
    }
    this.animateBarInfoView(nextProps.bar ? -height * (1.0 / 4.0) : 0);
  }

  animateBarInfoView(toYPosition) {
    Animated.spring(
      this.state.yPosition,
      {
        toValue: toYPosition,
        useNativeDriver: true,
      },
    ).start();
  }

  render() {
    const bar = this.state.props.bar;
    const walkingDuration = this.state.props.walkingDuration;
    const walkingDistance = this.state.props.walkingDistance;
    return (
      <Animated.View
        style={[
          styles.barInfo,
          {
            transform: [{ translateY: this.state.yPosition }],
          },
        ]}
        accessibilityLabel="Bar information"
        pointerEvents="box-none"
      >
        <BarInfoText bar={bar} walkingDistance={walkingDistance} walkingDuration={walkingDuration} />
        <BarPriceBadge bar={bar} />
      </Animated.View>
    );
  }
}

const propTypes = {
  bar: PropTypes.shape({
    post_title: PropTypes.string.isRequired,
    post_content: PropTypes.string.isRequired,
    post_address: PropTypes.string.isRequired,
    post_category: PropTypes.string.isRequired,
  }),
  walkingDuration: PropTypes.string.isRequired,
  walkingDistance: PropTypes.string.isRequired,
};

const defaultProps = {
  bar: null,
};

BarInfo.propTypes = propTypes;
BarInfo.defaultProps = defaultProps;
BarInfoText.propTypes = BarInfo.propTypes;
BarInfoText.defaultProps = BarInfo.defaultProps;
BarPriceBadge.propTypes = { bar: BarInfo.propTypes.bar };

export default BarInfo;

// Local Variables:
// mode: js2-jsx
// End:
