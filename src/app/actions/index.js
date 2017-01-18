import * as types from '../constants/ActionTypes';

/*
  NAVIGATION
 */

export const changeCurrentApplication = (application) => {
  return {
    type: types.CHANGE_CURRENT_APPLICATION,
    application
  };
};

export const changeCurrentProduct = (product) => {
  return {
    type: types.CHANGE_CURRENT_PRODUCT,
    product
  };
};

export const resetCurrentApplication = () => {
  return {
    type: types.RESET_CURRENT_APPLICATION
  };
};

export const resetCurrentProduct = () => {
  return {
    type: types.RESET_CURRENT_PRODUCT
  };
};
