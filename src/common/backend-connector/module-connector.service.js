class ModuleConnectorService {
  constructor($http, backendConnectorService) {
    this.$http = $http;
    this.backendConnectorService = backendConnectorService;

    this.baseUrl = this.backendConnectorService.getModuleServiceUrl();
  }

  getProducts() {
    let url = this.baseUrl + '/products';

    return this.$http.get(url);
  }
}

export default ModuleConnectorService;
