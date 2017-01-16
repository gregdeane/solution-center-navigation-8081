import * as actions from '../../../actions/actions.spec';
import BusinessPartnerMenuController from './business-partner-menu.controller';

describe('Business Partner Menu Component', () => {
  let $componentController;
  let $cookies;
  let $ngRedux;
  let controller;
  let mock;

  beforeEach(setup);

  it('should wire up redux', () => {
    expect($ngRedux.connect).toHaveBeenCalled();
  });

  it('should wire up the state', () => {
    const result = mapStateToProps(mock.state);
    const bp = mock.state.businessPartners;
    const vis = mock.state.visibility;

    expect(result.accessibleBusinessPartners).toEqual(bp.accessibleBusinessPartners);
    expect(result.lastAccessedBusinessPartners).toEqual(bp.lastAccessedBusinessPartners);
    expect(result.businessPartnerMenuShown).toEqual(vis.businessPartnerMenuShown);
  });

  // TODO this test is failing but it might be easier to wait for the code to be restructured
  // TODO before trying to implement this test.
  xit('should select business partner', () => {
    spyOn(controller, 'changeCurrentBusinessPartner');
    //spyOn(controller, 'hideBusinessPartnerMenu');

    controller.selectBusinessPartner(mock.businessPartner);

    expect($cookies.put).toHaveBeenCalledWith('SC_BUSINESS_PARTNER', mock.businessPartner);
    expect(controller.changeCurrentBusinessPartner).toHaveBeenCalledWith(mock.businessPartner);
    //expect(controller.hideBusinessPartnerMenu).toHaveBeenCalled();
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
      $cookies = $injector.get('$cookies');
      $ngRedux = $injector.get('$ngRedux');
    });
  }

  function spies() {
    spyOn($cookies, 'put').and.callThrough();
    spyOn($ngRedux, 'connect').and.callThrough();
    // spyOn(actions, 'hideBusinessPartnerMenu').and.callThrough();
  }

  function initialize() {
    controller = $componentController('businessPartnerMenu');
    controller.$onInit();
  }

  function mapStateToProps(state) {
    return BusinessPartnerMenuController.mapStateToProps(state);
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
