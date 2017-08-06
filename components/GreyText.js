import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const color = 'black';

const styles = StyleSheet.create({
  primary: {
    color,
    opacity: 0.87,
  },
  secondary: {
    color,
    opacity: 0.54,
  },
  disabled: {
    color,
    opacity: 0.38,
  },
});

const GreyText = (props) => {
  var style = styles[props.textType];
  const mergedProps = {
    ...props,
    style: StyleSheet.flatten([style, props.style]),
  };
  return (<Text {...mergedProps} />);
};

GreyText.propTypes = {
  style: Text.propTypes.style,
  textType: PropTypes.oneOf(['primary', 'secondary', 'disabled']),
};

GreyText.defaultProps = {
  style: {},
  textType: 'primary',
};

export default GreyText;

// Local Variables:
// mode: js2-jsx
// End:
