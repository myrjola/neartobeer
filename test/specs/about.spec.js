const { runApp, getDriver } = appiumUtils;

describe('about', () => {
  runApp();

  it('opens and renders about page', () =>
     getDriver()
     .elementByAccessibilityId('About button')
     .catch()
     .click()
     .waitForElementByAccessibilityId('About the service'),
    );
});
