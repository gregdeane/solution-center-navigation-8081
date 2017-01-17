import HelpController from './help.controller';

describe('Help Component', () => {
  let $componentController;
  let $ngRedux;
  let controller;
  let mock;

  beforeEach(setup);

  it('should wire up redux', () => {
    expect($ngRedux.connect).toHaveBeenCalled();
  });

  it('should wire up the state', () => {
    const result = HelpController.mapStateToThis(mock.state);
    expect(result.isHelpWidgetLoaded).toEqual(mock.state.visibility.helpWidgetLoaded);
    expect(result.isHelpWidgetShown).toEqual(mock.state.visibility.helpWidgetShown);
  });

  it('should use passed bindings', () => {
    expect(controller.products).toEqual(mock.products);
  });

  it('should load help widget', () => {
    expect(mock.helpService.loadHelpWidget).toHaveBeenCalledWith(mock.products);
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
    mock.helpService.loadHelpWidget.and.callThrough();
  }

  function initialize() {
    controller = $componentController('help', { helpService: mock.helpService }, {
      products: mock.products
    });
    controller.$onInit();
  }

  function mocks() {
    mock = {
      state: {
        visibility: {
          helpWidgetLoaded: {},
          helpWidgetShown: {}
        }
      },
      products: [],
      helpService: jasmine.createSpyObj('HelpService', ['loadHelpWidget'])
    };
  }
});
