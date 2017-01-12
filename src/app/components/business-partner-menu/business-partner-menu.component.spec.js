import BusinessPartnerMenuController from './business-partner-menu.controller';

describe('Business Partner Menu Component', () => {
  let $componentController;
  let $ngRedux;
  let controller;
  let mock;

  beforeEach(setup);

  it('should wire up redux', () => {
    expect($ngRedux.connect).toHaveBeenCalled();
  });

  it('should wire up the state', () => {
    const result = BusinessPartnerMenuController.mapStateToProps(mock.state);
    const bp = mock.state.businessPartners;
    const vis = mock.state.visibility;

    expect(result.accessibleBusinessPartners).toEqual(bp.accessibleBusinessPartners);
    expect(result.lastAccessedBusinessPartners).toEqual(bp.lastAccessedBusinessPartners);
    expect(result.businessPartnerMenuShown).toBe(vis.businessPartnerMenuShown);
  });

  it('should call related menu actions', () => {
    spyOn(controller, 'changeCurrentBusinessPartner');
    spyOn(controller, 'hideBusinessPartnerMenu');

    controller.selectBusinessPartner(mock.bp);

    expect(controller.changeCurrentBusinessPartner).toHaveBeenCalledWith(mock.bp);
    expect(controller.hideBusinessPartnerMenu).toHaveBeenCalled();
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
    controller = $componentController('businessPartnerMenu');
    controller.$onInit();
  }

  function mocks() {
    mock = {
      state: {
        businessPartners: {
          accessibleBusinessPartners: [],
          lastAccessedBusinessPartners: []
        },
        visibility: {
          businessPartnerMenuShown: false
        }
      },
      bp: {}
    };
  }
});
