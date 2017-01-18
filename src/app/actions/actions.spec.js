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

  describe('changeCurrentProduct', () => {
    it('should have a type of \"' + types.CHANGE_CURRENT_PRODUCT + '\"', () =>
      expect(actions.changeCurrentProduct().type).toEqual(types.CHANGE_CURRENT_PRODUCT)
    );

    it('should pass on the product passed in', () => {
      let product = {id: 1, name: 'PRODUCT'};
      expect(actions.changeCurrentProduct(product).product)
    });
  });

  describe('resetCurrentApplicationId', () => {
    it('should have a type of \"' + types.RESET_CURRENT_APPLICATION_ID + '\"', () =>
      expect(actions.resetCurrentApplicationId().type).toEqual(types.RESET_CURRENT_APPLICATION_ID)
    );
  });

  describe('resetCurrentProduct', () => {
    it('should have a type of \"' + types.RESET_CURRENT_PRODUCT + '\"', () =>
      expect(actions.resetCurrentProduct().type).toEqual(types.RESET_CURRENT_PRODUCT)
    );
  });
});
