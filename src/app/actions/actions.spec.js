import * as types from '../constants/ActionTypes';

import * as actions from '../actions';

describe('actions', () => {

  describe('changeCurrentApplication', () => {
    it('should have a type of \"' + types.CHANGE_CURRENT_APPLICATION + '\"', () =>
      expect(actions.changeCurrentApplication().type).toEqual(types.CHANGE_CURRENT_APPLICATION)
    );

    it('should pass on the application passed in', () => {
      let application = {id: 1, name: 'APPLICATION'};
      expect(actions.changeCurrentApplication(application).application)
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

  describe('resetCurrentApplication', () => {
    it('should have a type of \"' + types.RESET_CURRENT_APPLICATION + '\"', () =>
      expect(actions.resetCurrentApplication().type).toEqual(types.RESET_CURRENT_APPLICATION)
    );
  });

  describe('resetCurrentProduct', () => {
    it('should have a type of \"' + types.RESET_CURRENT_PRODUCT + '\"', () =>
      expect(actions.resetCurrentProduct().type).toEqual(types.RESET_CURRENT_PRODUCT)
    );
  });
});
