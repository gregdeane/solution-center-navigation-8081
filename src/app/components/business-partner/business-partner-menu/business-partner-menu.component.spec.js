import BusinessPartnerMenuController from './business-partner-menu.controller';

describe('Business Partner Menu Component', () => {
  let $componentController;
  let $cookies;
  let $ngRedux;
  let visibilityService;
  let controller;
  let mock;

  beforeEach(setup);

  it('should wire up redux', () => {
    expect($ngRedux.connect).toHaveBeenCalled();
  });

  it('should wire up the state', () => {
    const result = mapStateToThis(mock.state);
    const bp = mock.state.businessPartners;
    const vis = mock.state.visibility;

    expect(result.accessibleBusinessPartners).toEqual(bp.accessibleBusinessPartners);
    expect(result.lastAccessedBusinessPartners).toEqual(bp.lastAccessedBusinessPartners);
    expect(result.businessPartnerMenuShown).toEqual(vis.businessPartnerMenuShown);
  });

  it('should select business partner', () => {
    spyOn(controller, 'changeCurrentBusinessPartner');

    controller.selectBusinessPartner(mock.businessPartner);

    expect($cookies.put).toHaveBeenCalledWith('SC_BUSINESS_PARTNER', mock.businessPartner);
    expect(controller.changeCurrentBusinessPartner).toHaveBeenCalledWith(mock.businessPartner);
    expect(visibilityService.dispatch).toHaveBeenCalled();
  });

  it('should hide last accessed section', () => {
    const showSection = controller.showLastAccessedSection();
    expect(showSection).toBe(false);
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
      $cookies = $injector.get('$cookies');
      visibilityService = $injector.get('VisibilityService');
    });
  }

  function spies() {
    spyOn($ngRedux, 'connect').and.callThrough();
    spyOn($cookies, 'put');
    spyOn(visibilityService, 'dispatch');
  }

  function initialize() {
    controller = $componentController('businessPartnerMenu');
    controller.$onInit();
  }

  function mapStateToThis(state) {
    return BusinessPartnerMenuController.mapStateToThis(state);
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
      businessPartner: {}
    };
  }
});
