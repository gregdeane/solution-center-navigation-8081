import HelpService from './help.service';

describe('Help Service', () => {
  let $ngRedux;
  let helpService;
  let mock;

  beforeEach(setup);

  it('should dispatch call to action', () => {
    helpService.dispatch('setHelpWidgetAsLoaded');
    expect($ngRedux.dispatch).toHaveBeenCalledWith({ type: 'SET_HELP_WIDGET_AS_LOADED' });
  });

  it('should return empty array', () => {
    const apps = HelpService.getUserApplications();
    expect(apps).toEqual([]);
  });

  it('should return user applications', () => {
    const apps = HelpService.getUserApplications(mock.products);
    expect(apps).toEqual(['Test'])
  });

  ////////////////////////////

  function setup() {
    mocks();
    modules();
    injectors();
    spies();
  }

  function modules() {
    angular.mock.module('solution-center-navigation');
  }

  function injectors() {
    angular.mock.inject($injector => {
      helpService = $injector.get('helpService');
      $ngRedux = $injector.get('$ngRedux');
    });
  }

  function spies() {
    spyOn($ngRedux, 'dispatch').and.callThrough();
  }

  function mocks() {
    mock = {
      products: [{
        applications: [
          { name: 'Test' }
        ]
      }],
      action: { type: 'SET_HELP_WIDGET_AS_LOADED' }
    };
  }
});
