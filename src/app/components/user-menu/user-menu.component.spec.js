import UserMenuController from './user-menu.controller';

describe('User Menu Component', () => {
  let $componentController;
  let $ngRedux;
  let controller;
  let mock;

  beforeEach(setup);

  it('should wire up redux', () => {
    expect($ngRedux.connect).toHaveBeenCalled();
  });

  it('should wire up the state', () => {
    const result = UserMenuController.mapStateToProps(mock.state);
    expect(result.state).toEqual(mock.state);
  });

  it('should log out', () => {
    controller.logout();
    expect(mock.scAuthenticationService.logout).toHaveBeenCalled();
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
    angular.mock.module('solution-center-navigation', $provide => {
      $provide.value('ScAuthenticationService', mock.scAuthenticationService);
    });
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
    controller = $componentController('userMenu');
    controller.$onInit();
  }

  function mocks() {
    mock = {
      state: {},
      scAuthenticationService: jasmine.createSpyObj('ScAuthenticationService', [
        'logout'
      ])
    };
  }
});
