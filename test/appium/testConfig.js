export const IS_TRAVIS = process.env.TRAVIS;
process.env.DEVICE_NAME = process.env.DEVICE_NAME || 'iPhone 7';

export const WEBDRIVER_CAPS_IOS = {
  newCommandTimeout: 60,
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: process.env.DEVICE_NAME,
  app: 'ios/build/Build/Products/Debug-iphonesimulator/neartobeer.app',
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
