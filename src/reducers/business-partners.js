import * as types from '../constants/ActionTypes';

const initialState = {
  accessibleBusinessPartners: [],
  lastAccessedBusinessPartners: []
};

const businessPartners = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS:
      return {
        ...state,
        accessibleBusinessPartners: action.accessibleBusinessPartners
      };

      case types.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS:
      return {
        ...state,
        lastAccessedBusinessPartners: action.lastAccessedBusinessPartners
      };

    default:
      return state
  }
};

export default businessPartners;
