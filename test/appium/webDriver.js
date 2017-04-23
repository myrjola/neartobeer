/* eslint no-console:0 */

import wd from 'wd';
import { spawn } from 'child_process';
import net from 'net';
import { APPIUM_PORT, WEBDRIVER_CAPS_ANDROID, WEBDRIVER_CAPS_IOS, IS_TRAVIS } from './testConfig';

let driver;

export function getDriver() {
  return driver;
}

export function stop() {
  return driver && driver.quit()
    .catch();
}

function logsHandler(_driver) {
  _driver.on('status', info => console.log(info));
  _driver.on('command', (meth, path, data) => console.log(` > ${meth || ''} ${path || ''} ${data || ''}`));
  _driver.on('http', (meth, path, data) => console.log(` > ${meth || ''} ${path || ''} ${data || ''}`));
}

function checkPort(port) {
  return new Promise((resolve, reject) => {
    const client = net.connect(port, resolve);
    client.on('error', () => {
      client.destroy();
      reject();
    });
  });
}

function startAppium() {
  return checkPort(APPIUM_PORT).catch(() => new Promise((resolve) => {
    const p = spawn('appium');
    process.on('exit', () => {
      p.kill('SIGHUP');
    });
    p.stderr.pipe(process.stderr);
    resolve();
  }));
}

function waitPort(port) {
  return checkPort(port).catch(() => new Promise((resolve, reject) => {
    setTimeout(() => waitPort(port).then(resolve, reject));
  }));
}

function createWebDriver() {
  const serverConfig = {
    host: 'localhost',
    port: 4723,
  };
  driver = wd.promiseChainRemote(serverConfig);
  logsHandler(driver);

  driver = driver.init(IS_TRAVIS ? WEBDRIVER_CAPS_IOS : WEBDRIVER_CAPS_ANDROID);

  return driver.setImplicitWaitTimeout(1200000);
}

export function createDriver() {
  if (driver) {
    return Promise.resolve(driver);
  }
  return startAppium()
    .then(() => waitPort(APPIUM_PORT))
    .then(createWebDriver);
}
