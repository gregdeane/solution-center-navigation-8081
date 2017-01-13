import * as constants from './business-partner.constants';

const BusinessPartnerActions = () => {

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

  const changeCurrentBusinessPartner = (businessPartner) => {
    return {
      type: constants.CHANGE_CURRENT_BUSINESS_PARTNER,
      businessPartner
    };
  };

  const resetCurrentBusinessPartner = () => {
    return {
      type: constants.RESET_CURRENT_BUSINESS_PARTNER
    };
  };

  return {
    updateAccessibleBusinessPartners,
    updateLastAccessedBusinessPartners,
    changeCurrentBusinessPartner,
    resetCurrentBusinessPartner
  };
};

export default BusinessPartnerActions;
