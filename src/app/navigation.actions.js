import * as constants from './navigation.constants';

const NavigationActions = (moduleConnectorService) => {

  /**
   * Performs a call to the backend endpoint to retrieve the list of business partner that the user
   * has access to in the current application
   */
  const getUserBusinessPartnersInApplication = () => {
    return (dispatch, getState) => {
      const { navigation } = getState();

      moduleConnectorService
        .getUserBusinessPartnersInApplication(navigation.currentProduct, navigation.currentApplication)
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

  return {
    getUserBusinessPartnersInApplication
  };
};

export default NavigationActions;
