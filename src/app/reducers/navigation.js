// TODO remove this once all actions are in their specific locations (non-global)
import * as types from '../constants/ActionTypes';

import * as constants from '../navigation.constants';

const initialState = {
  currentApplication: undefined,
  currentProduct: undefined,
  accessibleProducts: []
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

    case constants.UPDATE_ACCESSIBLE_PRODUCTS:
      return {
        ...state,
        accessibleProducts: action.accessibleProducts
      };

    default:
      return state
  }
};

export default navigation;
