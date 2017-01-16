import { combineReducers } from 'redux';

import visibility from './visibility';
import navigation from './navigation';

const reducers = combineReducers({
  visibility,
  navigation
});

export default reducers;
