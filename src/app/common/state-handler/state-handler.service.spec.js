describe('State handler service', () => {
  let $ngRedux;
  let stateHandlerService;

  beforeEach(setup);

  it('should dispatch an action', () => {
    stateHandlerService.dispatch('disableBusinessPartnerMenu', {});
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
      stateHandlerService = $injector.get('stateHandlerService');
    });
  }

  function spies() {
    spyOn($ngRedux, 'dispatch').and.returnValue(true);
  }
});
