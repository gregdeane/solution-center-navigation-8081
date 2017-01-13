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

  return {
    updateAccessibleBusinessPartners,
    updateLastAccessedBusinessPartners
  };
};

export default BusinessPartnerActions;
