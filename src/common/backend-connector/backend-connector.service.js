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

  isIntegrationEnvironment() {
    return this.ScEnvironments.getCurrentEnvironment()
        && this.ScEnvironments.getCurrentEnvironment().NAME === 'INTEGRATION';
  }

  getModuleServiceUrl() {
    return this.environment.MODULE_SERVICE;
  }

  getUserServiceUrl() {
    return this.environment.USER_SERVICE;
  }
}

export default BackendConnectorService;
