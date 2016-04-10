import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import reducer from 'reducers/reducer';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  reducer,
  routing,
});

export default rootReducer;