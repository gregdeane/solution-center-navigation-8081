import BusinessPartnerController from './business-partner.controller';

describe('Business Partner Component', () => {
  let $componentController;
  let $ngRedux;
  let controller;
  let mock;

  beforeEach(setup);

  it('should wire up redux', () => {
    expect($ngRedux.connect).toHaveBeenCalled();
  });

  it('should wire up the state', () => {
    const result = BusinessPartnerController.mapStateToThis(mock.state);

    expect(result.currentBusinessPartner).toEqual(mock.state.businessPartners.currentBusinessPartner);
    expect(result.currentApplication).toEqual(mock.state.navigation.currentApplication);
    expect(result.businessPartnerMenuDisabled).toEqual(mock.state.visibility.businessPartnerMenuDisabled);
  });

  ////////////////////////////

  function setup() {
    mocks();
    modules();
    injectors();
    spies();
    initialize();
  }

  function modules() {
    angular.mock.module('solution-center-navigation');
  }

  function injectors() {
    angular.mock.inject($injector => {
      $componentController = $injector.get('$componentController');
      $ngRedux = $injector.get('$ngRedux');
    });
  }

  function spies() {
    spyOn($ngRedux, 'connect').and.callThrough();
  }

  function initialize() {
    controller = $componentController('businessPartner');
    controller.$onInit();
  }

  function mocks() {
    mock = {
      state: {
        navigation: {
          currentApplication: {}
        },
        businessPartners: {
          currentBusinessPartner: {}
        },
        visibility: {
          businessPartnerMenuDisabled: {}
        }
      }
    };
  }
});
