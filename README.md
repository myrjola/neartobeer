# BeersUnderX [![Build Status](https://travis-ci.com/myrjola/beersunderx.svg?token=KHU5jpVYXyXbWhN3y83W&branch=master)](https://travis-ci.com/myrjola/beersunderx) [![Circle CI](https://circleci.com/gh/myrjola/beersunderx/tree/master.svg?style=shield&circle-token=24a0c268702e9277c48e0970a7fca373d9fb2447)](https://circleci.com/gh/myrjola/beersunderx)

## Getting started ##

1. Install https://nodejs.org/en/ and https://yarnpkg.com/en/.
2. Run `yarn install` to install dependencies.
3. Set up [React Native](https://facebook.github.io/react-native/docs/getting-started.html).
4. Run tests with `npm test`.

## Integration tests ##

1. Set up http://appium.io/
2. Start the Android emulator, you can check .circleci/config.yml how the
   Android emulator is set up
3. Run integration tests with `npm run test:integration`
