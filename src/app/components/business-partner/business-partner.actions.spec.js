import * as constants from './business-partner.constants';

describe('Business Partner Actions', () => {
  let businessPartnerActions;
  let mock;

  beforeEach(setup);

  it(`should create the ${constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS} action`, () => {
    const action = getAction('updateAccessibleBusinessPartners', mock.businessPartners);
    expect(action.type).toEqual(constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS);
    expect(action.accessibleBusinessPartners).toEqual(mock.businessPartners);
  });

  it(`should create the ${constants.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS} action`, () => {
    const action = getAction('updateLastAccessedBusinessPartners', mock.businessPartners);
    expect(action.type).toEqual(constants.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS);
    expect(action.lastAccessedBusinessPartners).toEqual(mock.businessPartners);
  });

  it(`should create the ${constants.CHANGE_CURRENT_BUSINESS_PARTNER} action`, () => {
    const action = getAction('changeCurrentBusinessPartner', mock.businessPartner);
    expect(action.type).toEqual(constants.CHANGE_CURRENT_BUSINESS_PARTNER);
    expect(action.currentBusinessPartner).toEqual(mock.businessPartner);
  });

  it(`should create the ${constants.RESET_CURRENT_BUSINESS_PARTNER} action`, () => {
    const action = getAction('resetCurrentBusinessPartner');
    expect(action.type).toEqual(constants.RESET_CURRENT_BUSINESS_PARTNER);
  });

  ////////////////////////////

  function setup() {
    mocks();
    modules();
    injectors();
  }

  function modules() {
    angular.mock.module('solution-center-navigation');
  }

  function injectors() {
    angular.mock.inject($injector => {
      businessPartnerActions = $injector.get('BusinessPartnerActions');
    });
  }

  function getAction(method, value) {
    return businessPartnerActions[method](value) || {};
  }

  function mocks() {
    mock = {
      businessPartners: [],
      businessPartner: {}
    };
  }
});
