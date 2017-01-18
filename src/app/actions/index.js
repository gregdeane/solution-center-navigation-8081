import * as types from '../constants/ActionTypes';

/*
  NAVIGATION
 */

export const changeCurrentApplicationId = (applicationId) => {
  return {
    type: types.CHANGE_CURRENT_APPLICATION_ID,
    applicationId
  };
};

export const changeCurrentProductId = (productId) => {
  return {
    type: types.CHANGE_CURRENT_PRODUCT_ID,
    productId
  };
};

export const resetCurrentApplicationId = () => {
  return {
    type: types.RESET_CURRENT_APPLICATION_ID
  };
};

export const resetCurrentProductId = () => {
  return {
    type: types.RESET_CURRENT_PRODUCT_ID
  };
};
