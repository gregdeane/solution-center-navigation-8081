import { combineReducers } from 'redux';

import visibility from './common/visibility/visibility.reducers';
import navigation from './reducers/navigation';
import businessPartners from './components/business-partner/business-partner.reducers';

const reducers = combineReducers({
  visibility,
  navigation,
  businessPartners
});

export default reducers;
