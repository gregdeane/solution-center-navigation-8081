import * as constants from './business-partner.constants';

const initialState = {
  accessibleBusinessPartners: [],
  lastAccessedBusinessPartners: [],
  currentBusinessPartner: undefined
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

    case constants.CHANGE_CURRENT_BUSINESS_PARTNER:
      return {
        ...state,
        currentBusinessPartner: action.currentBusinessPartner
      };

    case constants.RESET_CURRENT_BUSINESS_PARTNER:
      return {
        ...state,
        currentBusinessPartner: undefined
      };

    default:
      return state
  }
};

export default businessPartners;
