// TODO remove this once all actions are in their specific locations (non-global)
import * as types from '../constants/ActionTypes';

import * as constants from '../navigation.constants';

const initialState = {
  currentApplicationId: undefined,
  currentProductId: undefined,
  accessibleProducts: []
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_APPLICATION_ID:
      return {
        ...state,
        currentApplicationId: action.applicationId
      };

    case types.CHANGE_CURRENT_PRODUCT_ID:
      return {
        ...state,
        currentProductId: action.productId
      };

    case types.RESET_CURRENT_APPLICATION_ID:
      return {
        ...state,
        currentApplicationId: undefined
      };

    case types.RESET_CURRENT_PRODUCT_ID:
      return {
        ...state,
        currentProductId: undefined
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
