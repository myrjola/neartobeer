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
import { height, backgroundColor, borderColor, navBarHeight,
         badgeSize, badgeXPosition, buttonSize } from './constants';

const store = configureStore();

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
  buttonRow: {
    padding: 10,
    height: navBarHeight,
    backgroundColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: borderColor,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  userLocationButton: {
    flex: 0,
    position: 'absolute',
    left: badgeXPosition,
    top: height * (8 / 11),
    height: badgeSize,
    width: badgeSize,
    elevation: 2,
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 50,
  },
  aboutButton: {
    flex: 0,
    position: 'absolute',
    left: 10,
    top: 10,
    height: buttonSize,
    width: buttonSize,
    elevation: 2,
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 5,
  },
});

const MainView = () => (
  <View style={styles.appView}>
    <StatusBar hidden={true} />
    <FilteredBarMap />
    <AboutButton style={styles.aboutButton} />
    <ZoomToUserLocationButton style={styles.userLocationButton} />
    <View style={styles.buttonRow}>
      <MaxBeerPriceSelector />
    </View>
    <BarInfoContainer />
  </View>
);

const NearToBeer = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="mainView" component={MainView} initial={true} />
        <Scene key="aboutView" title="About us" hideNavBar={false} component={AboutView} />
      </Scene>
    </Router>
  </Provider>
);

export default NearToBeer;

// Local Variables:
// mode: js2-jsx
// End:
