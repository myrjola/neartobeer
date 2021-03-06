jest.mock(
  'react-native-maps', () => {
    const React = require.requireActual('React');
    class MockMapView extends React.Component {
      static Marker = props => React.createElement('Marker', props);
      static Polyline = props => React.createElement('Polyline', props);
      static Callout = props => React.createElement('Callout', props);
      render() {
        return React.createElement('MapView', this.props);
      }
    }
    return MockMapView;
  },
);

// Local Variables:
// mode: react
// End:
