import * as types from '../constants/ActionTypes';

import * as actions from '../actions';

describe('actions', () => {

  describe('changeCurrentApplicationId', () => {
    it('should have a type of \"' + types.CHANGE_CURRENT_APPLICATION_ID + '\"', () =>
      expect(actions.changeCurrentApplicationId().type).toEqual(types.CHANGE_CURRENT_APPLICATION_ID)
    );

    it('should pass on the application id passed in', () => {
      let applicationId = 1;
      expect(actions.changeCurrentApplicationId(applicationId).applicationId)
    });
  });

  describe('changeCurrentProductId', () => {
    it('should have a type of \"' + types.CHANGE_CURRENT_PRODUCT_ID + '\"', () =>
      expect(actions.changeCurrentProductId().type).toEqual(types.CHANGE_CURRENT_PRODUCT_ID)
    );

    it('should pass on the product id passed in', () => {
      let productId = 1;
      expect(actions.changeCurrentProductId(productId).productId)
    });
  });

  describe('resetCurrentApplicationId', () => {
    it('should have a type of \"' + types.RESET_CURRENT_APPLICATION_ID + '\"', () =>
      expect(actions.resetCurrentApplicationId().type).toEqual(types.RESET_CURRENT_APPLICATION_ID)
    );
  });

  describe('resetCurrentProductId', () => {
    it('should have a type of \"' + types.RESET_CURRENT_PRODUCT_ID + '\"', () =>
      expect(actions.resetCurrentProductId().type).toEqual(types.RESET_CURRENT_PRODUCT_ID)
    );
  });
});
