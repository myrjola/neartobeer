import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import nearToBeerReducer from './reducers';
import { fetchBars } from './actions/bars';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  const middleware = (global.__DEV__) ? [thunkMiddleware, loggerMiddleware] : [thunkMiddleware];
  const store = createStore(
    nearToBeerReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      autoRehydrate(),
    ),
  );
  persistStore(store, { storage: AsyncStorage },
    () => store.dispatch(fetchBars()));

  return store;
}

// Local Variables:
// mode: react
// End:
