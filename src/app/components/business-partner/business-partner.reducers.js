import * as constants from './business-partner.constants';

const initialState = {
  accessibleBusinessPartners: [],
  lastAccessedBusinessPartners: []
};

const businessPartners = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS:
      return {
        ...state,
        accessibleBusinessPartners: action.accessibleBusinessPartners
      };

    case constants.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS:
      return {
        ...state,
        lastAccessedBusinessPartners: action.lastAccessedBusinessPartners
      };

    default:
      return state
  }
};

export default businessPartners;
