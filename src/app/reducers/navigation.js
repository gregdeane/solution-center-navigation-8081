// TODO remove this once all actions are in their specific locations (non-global)
import * as types from '../constants/ActionTypes';

import * as constants from '../navigation.constants';

const initialState = {
  currentApplication: undefined,
  currentProduct: undefined,
  currentBusinessPartner: undefined,
  products: []
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_APPLICATION:
      return {
        ...state,
        currentApplication: action.application
      };

    case types.CHANGE_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.product
      };

    case types.CHANGE_CURRENT_BUSINESS_PARTNER:
      return {
        ...state,
        currentBusinessPartner: action.businessPartner
      };

    case types.RESET_CURRENT_APPLICATION:
      return {
        ...state,
        currentApplication: undefined
      };

    case types.RESET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: undefined
      };

    case types.RESET_CURRENT_BUSINESS_PARTNER:
      return {
        ...state,
        currentBusinessPartner: undefined
      };

    case constants.GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };

    default:
      return state
  }
};

export default navigation;
