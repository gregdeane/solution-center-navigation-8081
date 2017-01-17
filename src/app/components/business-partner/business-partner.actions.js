import * as constants from './business-partner.constants';

const BusinessPartnerActions = (moduleConnectorService) => {

  const updateAccessibleBusinessPartners = (accessibleBusinessPartners) => {
    return {
      type: constants.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS,
      accessibleBusinessPartners
    };
  };

  const updateLastAccessedBusinessPartners = (lastAccessedBusinessPartners) => {
    return {
      type: constants.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS,
      lastAccessedBusinessPartners
    };
  };

  const changeCurrentBusinessPartner = (currentBusinessPartner) => {
    return {
      type: constants.CHANGE_CURRENT_BUSINESS_PARTNER,
      currentBusinessPartner
    };
  };

  const resetCurrentBusinessPartner = () => {
    return {
      type: constants.RESET_CURRENT_BUSINESS_PARTNER
    };
  };

  const getBusinessPartnerById = (businessPartnerId) => {
    return (dispatch) => {
      moduleConnectorService.getBusinessPartnerById(businessPartnerId)
        .then((response) => dispatch({
          type: constants.CHANGE_CURRENT_BUSINESS_PARTNER,
          currentBusinessPartner: response.data
        }))
        .catch(() => dispatch({
          // TODO Log error
          type: constants.CHANGE_CURRENT_BUSINESS_PARTNER,
          currentBusinessPartner: undefined
        }));
    };
  };

  return {
    updateAccessibleBusinessPartners,
    updateLastAccessedBusinessPartners,
    changeCurrentBusinessPartner,
    resetCurrentBusinessPartner,
    getBusinessPartnerById
  };
};

export default BusinessPartnerActions;
