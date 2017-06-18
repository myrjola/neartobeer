import { Dimensions, Platform } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const borderColor = '#BBB';
export const backgroundColor = 'white';

export const navBarHeight = Platform.select({
  ios: 64,
  android: 54,
});

export const badgeSize = height / 15;
export const buttonSize = 40;
export const badgeXPosition = width * (4 / 5);
