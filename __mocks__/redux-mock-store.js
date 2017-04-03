import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

export default mockStore;

// Local Variables:
// mode: js2-jsx
// End:
