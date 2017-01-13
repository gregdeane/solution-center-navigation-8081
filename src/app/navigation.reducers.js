import { combineReducers } from 'redux';

import visibility from './reducers/visibility';
import navigation from './reducers/navigation';
import businessPartners from './reducers/business-partners';

const reducers = combineReducers({
  visibility,
  navigation,
  businessPartners
});

export default reducers;
