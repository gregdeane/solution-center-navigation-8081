class ModuleConnectorService {
  constructor($http, backendConnectorService) {
    this.$http = $http;
    this.backendConnectorService = backendConnectorService;

    this.baseUrl = this.backendConnectorService.getModuleServiceUrl();
  }

  getAccessibleProducts() {
    return this.getTempAccessibleProducts();
    // let url = this.baseUrl + '/products';
    //
    // return this.$http.get(url);
  }

  getTempAccessibleProducts() {
    let url = this.baseUrl + '/products';

    const updateUrls = (products) => {
      products.forEach(product => {
        product.applications.forEach(application => {
          application.url = '';
        });
      });

      return products;
    };

    return this.$http.get(url)
      .then(response => {
        return updateUrls(response.data);
      });
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
