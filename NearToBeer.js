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
import { width, backgroundColor, borderColor, badgeSize, buttonSize } from './constants';

const store = configureStore();

const buttonRowMargin = 10;

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
  buttonRow: {
    position: 'absolute',
    bottom: buttonRowMargin,
    margin: buttonRowMargin,
    width: width - (buttonRowMargin * 2),
    height: 45,
    backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
  },
  userLocationButton: {
    flex: 0,
    height: badgeSize,
    width: badgeSize,
    elevation: 2,
    borderRadius: 5,
  },
  aboutButton: {
    flex: 0,
    height: buttonSize,
    width: buttonSize,
    borderRadius: 5,
  },
});

const MainView = () => (
  <View style={styles.appView}>
    <StatusBar hidden={true} />
    <FilteredBarMap />
    <View style={styles.buttonRow}>
      <AboutButton style={styles.aboutButton} />
      <MaxBeerPriceSelector />
      <ZoomToUserLocationButton style={styles.userLocationButton} />
    </View>
    <BarInfoContainer />
  </View>
);

const NearToBeer = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="mainView" component={MainView} hideNavBar={true} initial={true} />
        <Scene key="aboutView" title="Feedback" component={AboutView} />
      </Scene>
    </Router>
  </Provider>
);

export default NearToBeer;

// Local Variables:
// mode: react
// End:
