import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

import { BEER_UNDER_30, BEER_UNDER_40, BEER_UNDER_50 } from '../reducers/maxBeerPriceCategory';

const styles = StyleSheet.create({
  option: {
  },
});

const extractNumber = string => string.match(/\d+/)[0];

function getOptionColor(option) {
  switch (option) {
    case BEER_UNDER_30:
      return '#50B07C';
    case BEER_UNDER_40:
      return '#FABB3C';
    default:
    case BEER_UNDER_50:
      return '#E45D3E';
  }
}

const getOptionStyle = (option, selected) => {
  const backgroundColor = selected ? getOptionColor(option) : 'transparent';
  return StyleSheet.flatten([styles.option, { backgroundColor }]);
};

const MaxBeerPriceOption = (option, selected, onSelect, index) => (
  <TouchableWithoutFeedback onPress={onSelect} key={index}>
    <View
      style={getOptionStyle(option, selected)}
    >
      <Text>{extractNumber(option)}kr</Text>
    </View>
  </TouchableWithoutFeedback>
);

const MaxBeerPriceRadioButtons = props => (
  <RadioButtons
    {...props}
    renderOption={MaxBeerPriceOption}
    renderContainer={RadioButtons.renderHorizontalContainer}
  />
);

export default MaxBeerPriceRadioButtons;

// Local Variables:
// mode: js2-jsx
// End:
