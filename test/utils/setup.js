import chai from 'chai';
import * as appiumUtils from '../appium/appiumUtils';
import * as testConfig from '../appium/testConfig';

global.expect = chai.expect;
global.appiumUtils = appiumUtils;
global.testConfig = testConfig;
