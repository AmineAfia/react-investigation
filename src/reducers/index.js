import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import GitReducer from './reducer-git-list';
import WidgetsReducer from './reducer-widgets';

const rootReducer = combineReducers({
  users: GitReducer,
  widgets: WidgetsReducer,
  form: formReducer
});

export default rootReducer;
