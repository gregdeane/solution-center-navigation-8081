import * as constants from './visibility.constants';
import visibility from './visibility.reducers';

describe('Visibility Reducers', () => {
  let mock;

  beforeEach(setup);

  it('should return current state for unknown action', () => {
    const result = visibility(mock.initialState, {
      type: 'random'
    });

    expect(result).toEqual(mock.initialState);
  });

  it(`should update appropriate values for ${constants.SHOW_APPLICATIONS_MENU} action type`, () => {
    const result = visibility(mock.initialState, {
      type: constants.SHOW_APPLICATIONS_MENU
    });

    expect(result.applicationsMenuShown).toBe(true);
    expect(result.userMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${constants.TOGGLE_USER_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: constants.TOGGLE_USER_MENU
    });

    expect(result.userMenuShown).toBe(!mock.updatedState.userMenuShown);
    expect(result.applicationsMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${constants.SHOW_BUSINESS_PARTNER_MENU} action type`, () => {
    const result = visibility(mock.initialState, {
      type: constants.SHOW_BUSINESS_PARTNER_MENU
    });

    expect(result.businessPartnerMenuShown).toBe(true);
    expect(result.mobileMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${constants.HIDE_BUSINESS_PARTNER_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: constants.HIDE_BUSINESS_PARTNER_MENU
    });

    expect(result.businessPartnerMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${constants.TOGGLE_BUSINESS_PARTNER_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: constants.TOGGLE_BUSINESS_PARTNER_MENU
    });

    expect(result.businessPartnerMenuShown).toBe(!mock.updatedState.businessPartnerMenuShown);
    expect(result.mobileMenuShown).toBe(false);
  });

  it(`should update appropriate values for ${constants.DISABLE_BUSINESS_PARTNER_MENU} action type`, () => {
    const result = visibility(mock.initialState, {
      type: constants.DISABLE_BUSINESS_PARTNER_MENU
    });

    expect(result.businessPartnerMenuDisabled).toBe(true);
  });

  it(`should update appropriate values for ${constants.CHANGE_SELECTED_PRODUCT_ID} action type`, () => {
    const result = visibility(mock.initialState, {
      type: constants.CHANGE_SELECTED_PRODUCT_ID,
      productId: mock.data
    });

    expect(result.selectedProductId).toBe(mock.data);
  });

  it(`should update appropriate values for ${constants.RESET_SELECTED_PRODUCT_ID} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: constants.RESET_SELECTED_PRODUCT_ID
    });

    expect(result.selectedProductId).toBeUndefined();
  });

  it(`should update appropriate values for ${constants.SET_HELP_WIDGET_AS_LOADED} action type`, () => {
    const result = visibility(mock.initialState, {
      type: constants.SET_HELP_WIDGET_AS_LOADED
    });

    expect(result.helpWidgetLoaded).toBe(true);
  });

  it(`should update appropriate values for ${constants.HIDE_HELP_WIDGET} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: constants.HIDE_HELP_WIDGET
    });

    expect(result.helpWidgetShown).toBe(false);
  });

  it(`should update appropriate values for ${constants.TOGGLE_HELP_WIDGET} action type`, () => {
    const result = visibility(mock.initialState, {
      type: constants.TOGGLE_HELP_WIDGET
    });

    expect(result.helpWidgetShown).toBe(!mock.initialState.helpWidgetShown);
  });

  it(`should update appropriate values for ${constants.TOGGLE_MOBILE_MENU} action type`, () => {
    const result = visibility(mock.updatedState, {
      type: constants.TOGGLE_MOBILE_MENU
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
        selectedProductId: undefined,
        businessPartnerMenuShown: false,
        helpWidgetLoaded: false,
        helpWidgetShown: false,
        mobileMenuShown: false
      },
      updatedState: {
        applicationsMenuShown: true,
        userMenuShown: true,
        selectedProductId: 1,
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
