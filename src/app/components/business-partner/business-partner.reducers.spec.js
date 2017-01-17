import * as constants from './business-partner.constants';
import businessPartners from './business-partner.reducers';

describe('Business Partner Reducers', () => {
  let mock;

  beforeEach(setup);

  it('should return current state for unknown action', () => {
    const result = businessPartners(mock.initialState, {
      type: 'random'
    });

    expect(result).toEqual(mock.initialState);
  });

  it(`should update appropriate value for ${constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS} action type`, () => {
    const result = businessPartners(mock.initialState, {
      type: constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS,
      accessibleBusinessPartners: mock.data
    });

    expect(result.accessibleBusinessPartners).toEqual(mock.data);
  });

  it(`should update appropriate value for ${constants.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS} action type`, () => {
    const result = businessPartners(mock.initialState, {
      type: constants.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS,
      lastAccessedBusinessPartners: mock.data
    });

    expect(result.lastAccessedBusinessPartners).toEqual(mock.data);
  });

  it(`should update appropriate value for ${constants.CHANGE_CURRENT_BUSINESS_PARTNER} action type`, () => {
    const result = businessPartners(mock.initialState, {
      type: constants.CHANGE_CURRENT_BUSINESS_PARTNER,
      currentBusinessPartner: mock.data
    });

    expect(result.currentBusinessPartner).toEqual(mock.data);
  });

  it(`should update appropriate value for ${constants.RESET_CURRENT_BUSINESS_PARTNER} action type`, () => {
    const result = businessPartners(mock.initialState, {
      type: constants.RESET_CURRENT_BUSINESS_PARTNER,
      currentBusinessPartner: mock.data
    });

    expect(result.currentBusinessPartner).toBeUndefined();
  });

  ////////////////////////////

  function setup() {
    mocks();
  }

  function mocks() {
    mock = {
      initialState: {},
      data: [{
        id: 2,
        name: 'Test'
      }]
    };
  }
});
