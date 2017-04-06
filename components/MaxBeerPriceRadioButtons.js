import React from 'react';
import { RadioButtons } from 'react-native-radio-buttons';

const MaxBeerPriceRadioButtons = props => (
  <RadioButtons
    {...props}
    renderContainer={RadioButtons.renderHorizontalContainer}
  />
);

export default MaxBeerPriceRadioButtons;

// Local Variables:
// mode: js2-jsx
// End:
