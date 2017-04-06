import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

const extractNumber = string => string.match(/\d+/)[0];

const MaxBeerPriceOption = (option, selected, onSelect, index) => (
  <TouchableWithoutFeedback onPress={onSelect} key={index}>
    <View>
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
