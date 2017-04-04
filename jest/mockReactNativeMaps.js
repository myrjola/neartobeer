jest.mock(
  'react-native-maps', () => {
    const React = require.requireActual('React');
    class MockMapView extends React.Component {
      static Marker = props => React.createElement('Marker', props);
      static Polyline = props => React.createElement('Polyline', props);
      render() {
        return React.createElement('MapView', this.props);
      }
    }
    return MockMapView;
  },
);

// Local Variables:
// mode: js2-jsx
// End:
