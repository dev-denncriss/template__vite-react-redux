import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

// ==========convine-reducers=========//

import TodosReducer from './reducers/TodosReducer'

const rootReducer = combineReducers({
  quoteWally: TodosReducer
});

// ==========config-redux-devtools=========//

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ==========create-store=========//
const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
export default generateStore;
