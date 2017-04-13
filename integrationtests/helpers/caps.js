exports.ios10_2 = {
  browserName: '',
  'appium-version': '1.6',
  platformName: 'iOS',
  platformVersion: '10.2',
  deviceName: 'iPhone 7',
  automationName: 'XCUITest',
  app: './ios/build/Build/Products/Debug-iphonesimulator/beersunderx.app/',
};

exports.android = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/app-release.apk',
};
