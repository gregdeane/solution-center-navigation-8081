describe('Visibility Service', () => {
  let $ngRedux;
  let visibilityService;

  beforeEach(setup);

  it('should dispatch an action', () => {
    visibilityService.dispatch('disableBusinessPartnerMenu', {});
    expect($ngRedux.dispatch).toHaveBeenCalledWith({
      type: 'DISABLE_BUSINESS_PARTNER_MENU'
    });
  });

  ////////////////////////////

  function setup() {
    modules();
    injectors();
    spies();
  }

  function modules() {
    angular.mock.module('solution-center-navigation');
  }

  function injectors() {
    angular.mock.inject($injector => {
      $ngRedux = $injector.get('$ngRedux');
      visibilityService = $injector.get('VisibilityService');
    });
  }

  function spies() {
    spyOn($ngRedux, 'dispatch').and.returnValue(true);
  }
});
