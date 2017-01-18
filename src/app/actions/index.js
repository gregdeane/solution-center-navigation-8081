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

export const changeCurrentProduct = (product) => {
  return {
    type: types.CHANGE_CURRENT_PRODUCT,
    product
  };
};

export const resetCurrentApplicationId = () => {
  return {
    type: types.RESET_CURRENT_APPLICATION_ID
  };
};

export const resetCurrentProduct = () => {
  return {
    type: types.RESET_CURRENT_PRODUCT
  };
};
