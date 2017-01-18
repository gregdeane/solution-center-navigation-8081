import * as constants from './navigation.constants';

const NavigationActions = (moduleConnectorService) => {

  /**
   * Performs a call to the backend endpoint to retrieve the list of business partner that the user
   * has access to in the current application
   */
  const getUserBusinessPartnersInApplication = () => {
    return (dispatch, getState) => {
      const {navigation} = getState();

      return moduleConnectorService
        .getUserBusinessPartnersInApplication(navigation.currentProduct, navigation.currentApplicationId)
        .then(response => dispatch({
          type: constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS,
          accessibleBusinessPartners: response.data
        }))
        .catch(() => dispatch({
          // TODO Log error
          type: constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS,
          accessibleBusinessPartners: []
        }));
    };
  };

  const getAccessibleProducts = () => {
    return (dispatch) => {
      moduleConnectorService.getAccessibleProducts()
        .then(response => dispatch({
          type: constants.UPDATE_ACCESSIBLE_PRODUCTS,
          accessibleProducts: response.data
        }))
        .catch(() => dispatch({
          // TODO Log error
          type: constants.UPDATE_ACCESSIBLE_PRODUCTS,
          accessibleProducts: []
        }));
    };
  };

  return {
    getUserBusinessPartnersInApplication,
    getAccessibleProducts
  };
};

export default NavigationActions;
