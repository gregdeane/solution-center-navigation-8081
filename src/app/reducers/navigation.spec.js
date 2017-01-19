import * as types from '../constants/ActionTypes';
import * as constants from '../navigation.constants';
import navigation from './navigation';

describe('Navigation Reducers', () => {
  let mock;

  beforeEach(setup);

  it('should return current state for unknown action', () => {
    const result = navigation(mock.initialState, {
      type: 'random'
    });

    expect(result).toEqual(mock.initialState);
  });

  it(`should update appropriate value for ${types.CHANGE_CURRENT_PRODUCT_ID} action type`, () => {
    const result = navigation(mock.initialState, {
      type: types.CHANGE_CURRENT_PRODUCT_ID,
      productId: mock.data
    });

    expect(result.currentProductId).toEqual(mock.data);
  });

  it(`should update appropriate value for ${types.CHANGE_CURRENT_APPLICATION_ID} action type`, () => {
    const result = navigation(mock.initialState, {
      type: types.CHANGE_CURRENT_APPLICATION_ID,
      applicationId: mock.data
    });

    expect(result.currentApplicationId).toEqual(mock.data);
  });

  it(`should reset appropriate value for ${types.RESET_CURRENT_PRODUCT_ID} action type`, () => {
    const result = navigation(mock.initialState, {
      type: types.RESET_CURRENT_PRODUCT_ID
    });

    expect(result.currentProductId).toBeUndefined();
  });

  it(`should reset appropriate value for ${types.RESET_CURRENT_APPLICATION_ID} action type`, () => {
    const result = navigation(mock.initialState, {
      type: types.RESET_CURRENT_APPLICATION_ID
    });

    expect(result.currentApplicationId).toBeUndefined();
  });

  it(`should update appropriate value for ${constants.UPDATE_ACCESSIBLE_PRODUCTS} action type`, () => {
    const result = navigation(mock.initialState, {
      type: constants.UPDATE_ACCESSIBLE_PRODUCTS,
      accessibleProducts: mock.data
    });

    expect(result.accessibleProducts).toEqual(mock.data);
  });

  ////////////////////////////

  function setup() {
    mocks();
  }

  function mocks() {
    mock = {
      initialState: {},
      data: {
        id: 2,
        name: 'Test'
      }
    };
  }
});
