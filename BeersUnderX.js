import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import configureStore from './configureStore';
import AboutButton from './components/AboutButton';
import AboutView from './components/AboutView';
import FilteredBarMap from './containers/FilteredBarMap';
import MaxBeerPriceSelector from './containers/MaxBeerPriceSelector';
import BarInfoContainer from './containers/BarInfoContainer';
import ZoomToUserLocationButton from './components/ZoomToUserLocationButton';
import { backgroundColor, borderColor } from './constants';

const store = configureStore();

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
  buttonRow: {
    padding: 10,
    backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const MainView = () => (
  <View style={styles.appView}>
    <StatusBar hidden={true} />
    <View style={styles.buttonRow}>
      <AboutButton />
      <MaxBeerPriceSelector />
      <ZoomToUserLocationButton />
    </View>
    <FilteredBarMap />
    <BarInfoContainer />
  </View>
);

const BeersUnderX = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="mainView" component={MainView} initial={true} />
        <Scene key="aboutView" title="About us" hideNavBar={false} component={AboutView} />
      </Scene>
    </Router>
  </Provider>
);

export default BeersUnderX;

// Local Variables:
// mode: js2-jsx
// End:
