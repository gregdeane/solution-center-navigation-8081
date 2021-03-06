import * as constants from './visibility.constants';

const VisibilityActions = () => {

  const showApplicationsMenu = () => {
    return {
      type: constants.SHOW_APPLICATIONS_MENU
    };
  };

  const toggleUserMenu = () => {
    return {
      type: constants.TOGGLE_USER_MENU
    };
  };

  const showBusinessPartnerMenu = () => {
    return {
      type: constants.SHOW_BUSINESS_PARTNER_MENU
    }
  };

  const hideBusinessPartnerMenu = () => {
    return {
      type: constants.HIDE_BUSINESS_PARTNER_MENU
    }
  };

  const toggleBusinessPartnerMenu = () => {
    return {
      type: constants.TOGGLE_BUSINESS_PARTNER_MENU
    }
  };

  const disableBusinessPartnerMenu = () => {
    return {
      type: constants.DISABLE_BUSINESS_PARTNER_MENU
    }
  };

  const changeSelectedProductId = (productId) => {
    return {
      type: constants.CHANGE_SELECTED_PRODUCT_ID,
      productId
    }
  };

  const resetSelectedProductId = () => {
    return {
      type: constants.RESET_SELECTED_PRODUCT_ID
    }
  };

  const setHelpWidgetAsLoaded = () => {
    return {
      type: constants.SET_HELP_WIDGET_AS_LOADED
    }
  };

  const hideHelpWidget = () => {
    return {
      type: constants.HIDE_HELP_WIDGET
    }
  };

  const toggleHelpWidget = () => {
    return {
      type: constants.TOGGLE_HELP_WIDGET
    }
  };

  const toggleMobileMenu = () => {
    return {
      type: constants.TOGGLE_MOBILE_MENU
    }
  };

  return {
    showApplicationsMenu,
    toggleUserMenu,
    showBusinessPartnerMenu,
    hideBusinessPartnerMenu,
    toggleBusinessPartnerMenu,
    disableBusinessPartnerMenu,
    changeSelectedProductId,
    resetSelectedProductId,
    setHelpWidgetAsLoaded,
    hideHelpWidget,
    toggleHelpWidget,
    toggleMobileMenu
  };
};

export default VisibilityActions;
