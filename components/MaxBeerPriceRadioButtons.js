import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

import GreyText from './GreyText';
import { BEER_UNDER_30, BEER_UNDER_40, BEER_UNDER_50 } from '../reducers/maxBeerPriceCategory';

const styles = StyleSheet.create({
  option: {
    margin: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    padding: 5,
    backgroundColor: 'transparent',
  },
});

const extractNumber = string => string.match(/\d+/)[0];


const MaxBeerPriceRadioButtons = (props) => {
  function getOptionColor(option, selectedOption) {
    switch (option) {
      case BEER_UNDER_30:
        return '#50B07C';
      case BEER_UNDER_40:
        if (selectedOption !== BEER_UNDER_30) { return '#FABB3C'; }
        return 'transparent';
      default:
      case BEER_UNDER_50:
        if (selectedOption === BEER_UNDER_50) { return '#E45D3E'; }
    }
  }

  const getOptionStyle = (option) => {
    const backgroundColor = getOptionColor(option, props.selectedOption);
    return StyleSheet.flatten([styles.option, { backgroundColor }]);
  };

  const MaxBeerPriceOption = (option, selected, onSelect, index) => (
    <TouchableWithoutFeedback onPress={onSelect} key={index}>
      <View
        style={getOptionStyle(option, selected)}
      >
        <GreyText style={styles.optionText}>{extractNumber(option)}kr</GreyText>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <RadioButtons
      {...props}
      renderOption={MaxBeerPriceOption}
      renderContainer={RadioButtons.getViewContainerRenderer(styles.viewContainer)}
    />
  );
};

MaxBeerPriceRadioButtons.propTypes = {
  selectedOption: PropTypes.string.isRequired,
};

export default MaxBeerPriceRadioButtons;

// Local Variables:
// mode: react
// End:
