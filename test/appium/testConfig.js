export const IS_TRAVIS = process.env.TRAVIS;
process.env.IOS_VERSION = process.env.IOS_VERSION || '10.2';
process.env.DEVICE_NAME = process.env.DEVICE_NAME || 'iPhone 7';

export const WEBDRIVER_CAPS_IOS = {
  newCommandTimeout: 60,
  platformName: 'iOS',
  platformVersion: process.env.IOS_VERSION,
  automationName: 'XCUITest',
  deviceName: process.env.DEVICE_NAME,
  app: 'ios/build/Build/Products/Debug-iphonesimulator/beersunderx.app',
  locale: 'en_US',
  language: 'en',
  autoAcceptAlerts: true,
};

export const WEBDRIVER_CAPS_ANDROID = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/app-release.apk',
};

export const APPIUM_PORT = 4723;
