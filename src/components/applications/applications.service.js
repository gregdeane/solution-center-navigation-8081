class ApplicationsService {
  getCurrentProduct(products, selectedProductId) {
    return products.filter((product) => {
      return product.id === selectedProductId;
    })[0];
  }

  getCurrentProductApplications(products, selectedProductId) {
    const currentProduct = this.getCurrentProduct(products, selectedProductId);
    return currentProduct ? currentProduct.applications : [];
  }

  getNewContextAfterNavigation(clickedItem, products) {
    let result, nextApplication = '', nextProduct;
    nextProduct = products.filter((product) => {
      result = product.applications.filter((application) => {
        return application.id === clickedItem.id;
      });

      if (result.length > 0) {
        nextApplication = result[0];
        return true;
      }

      return false;
    })[0];

    return {
      nextProduct: nextProduct,
      nextApplication: nextApplication
    }
  }

  getAccessibleBusinessPartnersInApplication(application, userBusinessPartners) {
    if (!application) {
      return [];
    }

    return userBusinessPartners.filter((businessPartner) => {
      return this.isValidBusinessPartnerForApplication(application, businessPartner);
    });
  }

  getLastAccessedBusinessPartnersInApplication(accessibleBusinessPartnersInApplication) {
    // TODO This will be fetched from a backend endpoint
    return accessibleBusinessPartnersInApplication.slice(0, 10);
  }

  isValidBusinessPartnerForApplication(application, businessPartner) {
    // TODO This method will also need to check if the businessPartner has access to that application even if the type is valid
    if (!application || !businessPartner) {
      return false;
    }

    return businessPartner.types.filter((type) => {
          return application.businessPartnerTypes.includes(type);
        }).length > 0;
  }
}

export default ApplicationsService;