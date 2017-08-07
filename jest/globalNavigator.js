// Mocking the global.navigator included in React Native
global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn(),
  },
};

// Helper to mock a success (only once)
navigator.mockSuccess = (position) => {
  navigator.geolocation.getCurrentPosition.mockImplementationOnce(successFunc => successFunc(position));
};

// Helper to mock a success (only once)
navigator.mockFailure = (error) => {
  navigator.geolocation.getCurrentPosition.mockImplementationOnce((_, errorFunc) => errorFunc(error));
};

// Local Variables:
// mode: react
// End:
