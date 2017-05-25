import React, { PropTypes } from 'react';
import { Animated, Image, PanResponder, StyleSheet, View, WebView } from 'react-native';

import GreyText from './GreyText';
import { chooseBeerIcon } from './BarMarker';
import { width, height, borderColor, backgroundColor, badgeSize, badgeXPosition } from '../constants';

// We have an invisible view half of badgeSize before the content starts.
const barInfoTopWithBadge = -height - (badgeSize / 2);

const styles = StyleSheet.create({
  barInfo: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width,
    height: height * 2,
    top: height,
  },
  contentView: {
    top: badgeSize / 2,
    flex: 1,
    padding: 10,
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
      post_id: PropTypes.number.isRequired,
      post_title: PropTypes.string.isRequired,
      post_content: PropTypes.string.isRequired,
      post_address: PropTypes.string.isRequired,
      post_category: PropTypes.string.isRequired,
    }),
    walkingDuration: PropTypes.string.isRequired,
    walkingDistance: PropTypes.string.isRequired,
    hideBarInfoView: PropTypes.func.isRequired,
  };

  static defaultProps = {
    bar: null,
  };

  constructor(props) {
    super(props);

    this._switchingToBar = null;

    this._yPosition = new Animated.Value(0);

    this.state = {
      bar: {
        post_title: '',
        post_content: '',
        post_category: '',
        post_address: '',
        ...props.bar,
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
    this._switchBar(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._switchBar(nextProps);
  }

  _compactOrHiddenBarInfoView(bar) {
    const hiddenYPosition = 0;
    const compactYPosition = -height * (2.0 / 11.0);
    this._animateBarInfoView(bar ? compactYPosition : hiddenYPosition);
  }

  _expandBarInfoView() {
    this._animateBarInfoView(barInfoTopWithBadge);
  }

  _animateBarInfoView(toYPosition, callback) {
    Animated.spring(
      this._yPosition,
      {
        toValue: toYPosition,
      },
    ).start(callback);
  }

  // Hide current bar information and expand the new one.
  _switchBar(nextProps) {
    const bar = nextProps.bar;
    const barId = bar && bar.post_id;
    if (this._switchingToBar !== barId || !bar) {
      this._switchingToBar = barId;
      Animated.timing(
        this._yPosition,
        {
          toValue: 0,
          duration: 200,
        },
      ).start(
        () => {
          if (bar) this.setState({ ...this.state, bar });
          this._compactOrHiddenBarInfoView(bar);
        });
    }
  }

  _handleStartShouldSetPanResponder(): boolean {
    return true;
  }

  _handleMoveShouldSetPanResponder(): boolean {
    return true;
  }

  _handlePanResponderGrant = () => {
    this._yPosition.stopAnimation(position => (this._dragStartYPosition = position));
  };

  _handlePanResponderMove = (e: Object, gestureState: Object) => {
    this._yPosition.setValue(this._dragStartYPosition + gestureState.dy);
  };

  _handlePanResponderEnd = (e: Object, gestureState: Object) => {
    if (gestureState.dy > 1) {
      this.props.hideBarInfoView();
    } else {
      this._compactOrHiddenBarInfoView(this.state.bar);
    }
  };

  render() {
    const bar = this.state.bar;
    const walkingDuration = this.props.walkingDuration;
    const walkingDistance = this.props.walkingDistance;
    return (
      <Animated.View
        style={[
          styles.barInfo,
          {
            transform: [{ translateY: this._yPosition }],
          },
        ]}
        accessibilityLabel="Bar information"
        pointerEvents="box-none"
      >
        <View style={styles.contentView} {...this._panResponder.panHandlers}>
          <GreyText style={styles.title}>
            { bar.post_title }
          </GreyText>
          <GreyText textType="secondary">
            {bar.post_address}{'\n'}
            {walkingDuration} ({walkingDistance}) walk
          </GreyText>
          <WebView source={{ html: bar.post_content }} style={styles.barDescription} scrollEnabled={false} />
        </View>
        <Animated.View
          style={[
            styles.priceBadgeView,
            {
              transform: [{
                translateY: this._yPosition.interpolate({
                  inputRange: [barInfoTopWithBadge, -height, 0],
                  outputRange: [badgeSize / 2, 0, 0],
                }),
              }],
            },
          ]}
          {...this._panResponder.panHandlers}
        >
          <Image
            source={chooseBeerIcon(bar.post_category)}
            style={styles.priceBadge}
          />
        </Animated.View>
      </Animated.View>
    );
  }
}

export default BarInfo;

// Local Variables:
// mode: js2-jsx
// End:
