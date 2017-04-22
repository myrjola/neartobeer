import React, { PropTypes } from 'react';
import { Animated, Dimensions, Image, PanResponder, StyleSheet, Text, View, WebView } from 'react-native';

import { chooseBeerIcon } from './BarMarker';
import { borderColor, backgroundColor } from '../constants';

const { height, width } = Dimensions.get('window');

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

class BarInfo extends React.Component {
  static propTypes = {
    bar: PropTypes.shape({
      post_title: PropTypes.string.isRequired,
      post_content: PropTypes.string.isRequired,
      post_address: PropTypes.string.isRequired,
      post_category: PropTypes.string.isRequired,
    }),
    walkingDuration: PropTypes.string.isRequired,
    walkingDistance: PropTypes.string.isRequired,
  };

  static defaultProps = {
    bar: null,
  };

  constructor(props) {
    super(props);

    const yPosition = new Animated.Value(0);
    yPosition.addListener(({ value }) => (this._yPosition = value));

    this._expanded = false;

    this.state = {
      yPosition,
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

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
  }

  componentWillReceiveProps(nextProps) {
    const barIsSelected = nextProps.bar;
    if (barIsSelected) {
      this.state.props = nextProps;
    }
    this._compactOrHiddenBarInfoView(nextProps.bar);
  }

  _compactOrHiddenBarInfoView(bar) {
    const hiddenYPosition = 0;
    const compactYPosition = -height * (1.0 / 6.0);
    this._animateBarInfoView(bar ? compactYPosition : hiddenYPosition);
  }

  _expandBarInfoView() {
    this._expanded = true;
    this._animateBarInfoView(-height - (badgeSize / 2));
  }

  _animateBarInfoView(toYPosition) {
    Animated.spring(
      this.state.yPosition,
      {
        toValue: toYPosition,
        useNativeDriver: true,
      },
    ).start();
  }

  _handleStartShouldSetPanResponder(): boolean {
    return true;
  }

  _handleMoveShouldSetPanResponder(): boolean {
    return true;
  }

  _handlePanResponderGrant = () => {
    this._dragStartYPosition = this._yPosition;
  };

  _handlePanResponderMove = (e: Object, gestureState: Object) => {
    this.state.yPosition.setValue(this._dragStartYPosition + gestureState.dy);
  };

  _handlePanResponderEnd = (e: Object, gestureState: Object) => {
    if (gestureState.dy < 1) {
      this._expandBarInfoView();
    } else {
      this._compactOrHiddenBarInfoView(this.state.props.bar);
    }
  };

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
        <View style={styles.contentView} {...this._panResponder.panHandlers}>
          <Text style={styles.title}>
            { bar.post_title }
          </Text>
          <Text>
            {bar.post_address}{'\n'}
            {walkingDuration} ({walkingDistance}) walk{'\n'}
          </Text>
          <WebView source={{ html: bar.post_content }} style={styles.barDescription} scrollEnabled={false} />
        </View>
        <View style={styles.priceBadgeView} {...this._panResponder.panHandlers}>
          <Image source={chooseBeerIcon(bar.post_category)} style={styles.priceBadge} />
        </View>
      </Animated.View>
    );
  }
}

export default BarInfo;

// Local Variables:
// mode: js2-jsx
// End:
