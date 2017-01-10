import UserController from './user.controller';

describe('User Component', () => {
  let $componentController;
  let $ngRedux;
  let controller;
  let mock;

  beforeEach(setup);

  it('should wire up redux', () => {
    expect($ngRedux.connect).toHaveBeenCalled();
  });

  it('should wire up the state', () => {
    const result = UserController.mapStateToProps(mock.state);
    expect(result.userMenuShown).toEqual(mock.state.visibility.userMenuShown);
    expect(result.mobileMenuShown).toEqual(mock.state.visibility.mobileMenuShown);
  });

  it('should use passed bindings', () => {
    expect(controller.user).toEqual(mock.props);
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
    controller = $componentController('user', null, {
      user: mock.props
    });
    controller.$onInit();
  }

  function mocks() {
    mock = {
      state: {
        visibility: {
          userMenuShown: {},
          mobileMenuShown: {}
        }
      },
      props: {
        user: {}
      }
    };
  }
});
