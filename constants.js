import { Platform } from 'react-native';

export const borderColor = '#BBB';
export const backgroundColor = '#EFEFF2';

export const navBarHeight = Platform.select({
  ios: 64,
  android: 54,
});
