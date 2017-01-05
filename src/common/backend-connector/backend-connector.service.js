import angular from 'angular';

class BackendConnectorService {
  constructor($window, ScEnvironments) {
    this.$window = $window;
    this.ScEnvironments = ScEnvironments;

    this.environment = this.getEnvironment();
  }

  getEnvironment() {
    return (this.isTestEnvironment() && this.ScEnvironments.getSpecificEnvironment('TESTING')) ||
        this.ScEnvironments.getCurrentEnvironment();
  }

  isTestEnvironment() {
    return angular.isObject(this.$window['jasmine']);
  }

  /*
    Backend calls override is only possible in LOCAL and INTEGRATION environments
   */
  isOverridePossible() {
    return this.ScEnvironments.getCurrentEnvironment()
        && (this.ScEnvironments.getCurrentEnvironment().NAME === 'LOCAL' ||
        this.ScEnvironments.getCurrentEnvironment().NAME === 'INTEGRATION');
  }

  getModuleServiceUrl() {
    return this.environment.MODULE_SERVICE;
  }

  getUserServiceUrl() {
    return this.environment.USER_SERVICE;
  }
}

export default BackendConnectorService;
