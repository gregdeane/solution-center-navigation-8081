import HelpService from './help.service';

describe('Help Service', () => {
  let helpService;
  let mock;

  beforeEach(setup);

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
  }

  function modules() {
    angular.mock.module('solution-center-navigation');
  }

  function injectors() {
    angular.mock.inject($injector => {
      helpService = $injector.get('helpService');
    });
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
