import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import beersUnderXReducer from './reducers';
import { fetchBarsIfNeeded } from './actions/bars';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  const store = createStore(
    beersUnderXReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      ),
      autoRehydrate(),
    ),
  );
  persistStore(store, { storage: AsyncStorage },
               () => store.dispatch(fetchBarsIfNeeded));

  return store;
}

// Local Variables:
// mode: js2-jsx
// End:
