import * as types from '../constants/ActionTypes';
import visibility from './visibility';

describe('Visibility Reducers', () => {
  let mock;

  beforeEach(setup);

  it('should return current state for unknown action', () => {
    const result = visibility(mock.initialState, {
      type: 'random'
    });

    expect(result).toEqual(mock.initialState);
  });

  it(`should update appropriate values for ${types.TOGGLE_APPLICATIONS_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.TOGGLE_APPLICATIONS_MENU
    });

    expect(result.applicationsMenuShown).toBe(!mock.updatedState.applicationsMenuShown);
    expect(result.userMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${types.TOGGLE_USER_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.TOGGLE_USER_MENU
    });

    expect(result.userMenuShown).toBe(!mock.updatedState.userMenuShown);
    expect(result.applicationsMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${types.SHOW_BUSINESS_PARTNER_MENU} action type`, () => {
    const result = visibility(mock.initialState, {
      type: types.SHOW_BUSINESS_PARTNER_MENU
    });

    expect(result.businessPartnerMenuShown).toBe(true);
    expect(result.mobileMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${types.HIDE_BUSINESS_PARTNER_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.HIDE_BUSINESS_PARTNER_MENU
    });

    expect(result.businessPartnerMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${types.TOGGLE_BUSINESS_PARTNER_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.TOGGLE_BUSINESS_PARTNER_MENU
    });

    expect(result.businessPartnerMenuShown).toBe(!mock.updatedState.businessPartnerMenuShown);
    expect(result.mobileMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${types.CHANGE_SELECTED_PRODUCT} action type`, () => {
    const result = visibility(mock.initialState, {
      type: types.CHANGE_SELECTED_PRODUCT,
      product: mock.data
    });

    expect(result.selectedProduct).toBe(mock.data);
  });

  it(`should update appropriate values for ${types.RESET_SELECTED_PRODUCT} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.RESET_SELECTED_PRODUCT
    });

    expect(result.selectedProduct).toBeUndefined();
  });

  it(`should update appropriate values for ${types.SET_HELP_WIDGET_AS_LOADED} action type`, () => {
    const result = visibility(mock.initialState, {
      type: types.SET_HELP_WIDGET_AS_LOADED
    });

    expect(result.helpWidgetLoaded).toBe(true);
  });

  it(`should update appropriate values for ${types.HIDE_HELP_WIDGET} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.HIDE_HELP_WIDGET
    });

    expect(result.helpWidgetShown).toBe(false);
  });

  it(`should update appropriate values for ${types.TOGGLE_HELP_WIDGET} action type`, () => {
    const result = visibility(mock.initialState, {
      type: types.TOGGLE_HELP_WIDGET
    });

    expect(result.helpWidgetShown).toBe(!mock.initialState.helpWidgetShown);
  });

  it(`should update appropriate values for ${types.HIDE_ALL_MENUS} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.HIDE_ALL_MENUS
    });

    expect(result.applicationsMenuShown).toBe(false);
    expect(result.userMenuShown).toBe(false);
    expect(result.businessPartnerMenuShown).toBe(false);
    expect(result.helpWidgetShown).toBe(false);
    expect(result.mobileMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${types.TOGGLE_MOBILE_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: types.TOGGLE_MOBILE_MENU
    });

    expect(result.mobileMenuShown).toBe(!mock.updatedState.mobileMenuShown);
    expect(result.businessPartnerMenuShown).toBe(false);
  });

  ////////////////////////////

  function setup() {
    mocks();
  }

  function mocks() {
    mock = {
      initialState: {
        applicationsMenuShown: false,
        userMenuShown: false,
        selectedProduct: undefined,
        businessPartnerMenuShown: false,
        helpWidgetLoaded: false,
        helpWidgetShown: false,
        mobileMenuShown: false
      },
      updatedState: {
        applicationsMenuShown: true,
        userMenuShown: true,
        selectedProduct: {},
        businessPartnerMenuShown: true,
        helpWidgetLoaded: true,
        helpWidgetShown: true,
        mobileMenuShown: true
      },
      data: {
        id: 2,
        name: 'Test'
      }
    };
  }

});
