import * as constants from './visibility.constants';

describe('Visibility Actions', () => {
  let visibilityActions;
  let mock;

  beforeEach(setup);

  it(`should create the ${constants.TOGGLE_APPLICATIONS_MENU} action`, () => {
    const type = getAction('toggleApplicationsMenu').type;
    expect(type).toEqual(constants.TOGGLE_APPLICATIONS_MENU);
  });

  it(`should create the ${constants.SHOW_APPLICATIONS_MENU} action`, () => {
    const type = getAction('showApplicationsMenu').type;
    expect(type).toEqual(constants.SHOW_APPLICATIONS_MENU);
  });

  it(`should create the ${constants.TOGGLE_USER_MENU} action`, () => {
    const type = getAction('toggleUserMenu').type;
    expect(type).toEqual(constants.TOGGLE_USER_MENU);
  });

  it(`should create the ${constants.SHOW_BUSINESS_PARTNER_MENU} action`, () => {
    const type = getAction('showBusinessPartnerMenu').type;
    expect(type).toEqual(constants.SHOW_BUSINESS_PARTNER_MENU);
  });

  it(`should create the ${constants.HIDE_BUSINESS_PARTNER_MENU} action`, () => {
    const type = getAction('hideBusinessPartnerMenu').type;
    expect(type).toEqual(constants.HIDE_BUSINESS_PARTNER_MENU);
  });

  it(`should create the ${constants.TOGGLE_BUSINESS_PARTNER_MENU} action`, () => {
    const type = getAction('toggleBusinessPartnerMenu').type;
    expect(type).toEqual(constants.TOGGLE_BUSINESS_PARTNER_MENU);
  });

  it(`should create the ${constants.DISABLE_BUSINESS_PARTNER_MENU} action`, () => {
    const type = getAction('disableBusinessPartnerMenu').type;
    expect(type).toEqual(constants.DISABLE_BUSINESS_PARTNER_MENU);
  });

  it(`should create the ${constants.CHANGE_SELECTED_PRODUCT} action`, () => {
    const action = getAction('changeSelectedProduct', mock.product);
    expect(action.type).toEqual(constants.CHANGE_SELECTED_PRODUCT);
    expect(action.product).toEqual(mock.product);
  });

  it(`should create the ${constants.RESET_SELECTED_PRODUCT} action`, () => {
    const type = getAction('resetSelectedProduct').type;
    expect(type).toEqual(constants.RESET_SELECTED_PRODUCT);
  });

  it(`should create the ${constants.SET_HELP_WIDGET_AS_LOADED} action`, () => {
    const type = getAction('setHelpWidgetAsLoaded').type;
    expect(type).toEqual(constants.SET_HELP_WIDGET_AS_LOADED);
  });

  it(`should create the ${constants.HIDE_HELP_WIDGET} action`, () => {
    const type = getAction('hideHelpWidget').type;
    expect(type).toEqual(constants.HIDE_HELP_WIDGET);
  });

  it(`should create the ${constants.TOGGLE_HELP_WIDGET} action`, () => {
    const type = getAction('toggleHelpWidget').type;
    expect(type).toEqual(constants.TOGGLE_HELP_WIDGET);
  });

  it(`should create the ${constants.HIDE_ALL_MENUS} action`, () => {
    const type = getAction('hideAllMenus').type;
    expect(type).toEqual(constants.HIDE_ALL_MENUS);
  });

  it(`should create the ${constants.TOGGLE_MOBILE_MENU} action`, () => {
    const type = getAction('toggleMobileMenu').type;
    expect(type).toEqual(constants.TOGGLE_MOBILE_MENU);
  });

  ////////////////////////////

  function setup() {
    mocks();
    modules();
    injectors();
  }

  function modules() {
    angular.mock.module('common');
  }

  function injectors() {
    angular.mock.inject($injector => {
      visibilityActions = $injector.get('VisibilityActions');
    });
  }

  function getAction(method, value) {
    return visibilityActions[method](value) || {};
  }

  function mocks() {
    mock = {
      product: {}
    };
  }
});
