// Used for error handling
const checkStatus = function (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};
export default checkStatus;

// Local Variables:
// mode: js2-jsx
// End:
