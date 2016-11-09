import { combineReducers } from 'redux';

import visibility from './visibility';
import navigation from './navigation';
import businessPartners from './business-partners';

const reducers = combineReducers({
  visibility,
  navigation,
  businessPartners
});

export default reducers;
