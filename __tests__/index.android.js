import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import BeersUnderX from '../index.android.js';

it('renders correctly', () => {
  renderer.create(
    <BeersUnderX />,
  );
});

// Local Variables:
// mode: js2-jsx
// End:
