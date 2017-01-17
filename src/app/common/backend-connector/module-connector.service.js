class ModuleConnectorService {
  constructor($http, backendConnectorService) {
    this.$http = $http;
    this.backendConnectorService = backendConnectorService;

    this.baseUrl = this.backendConnectorService.getModuleServiceUrl();
  }

  getAccessibleProducts() {
    let url = this.baseUrl + '/products';

    return this.$http.get(url);
  }

  getUserBusinessPartnersInApplication(productId, applicationId) {
    let url = this.baseUrl + '/products/' + productId + '/applications/' + applicationId + '/business-partners';

    return this.$http.get(url);
  }

  getBusinessPartnerById(businessPartnerId) {
    let url = this.baseUrl + '/business-partners/' + businessPartnerId;

    return this.$http.get(url);
  }
}

export default ModuleConnectorService;
