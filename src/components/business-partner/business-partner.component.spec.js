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
    let result = BusinessPartnerController.mapStateToProps(mock.state);
    expect(result.currentBusinessPartner).toBe(mock.state.navigation.currentBusinessPartner);
    expect(result.currentApplication).toBe(mock.state.navigation.currentApplication);
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
      $componentController = $injector.get('$componentController', null);
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
          currentBusinessPartner: {},
          currentApplication: {}
        }
      }
    };
  }
});
