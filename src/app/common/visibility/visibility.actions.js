import * as constants from './visibility.constants';

const VisibilityActions = () => {

  const toggleApplicationsMenu = () => {
    return {
      type: constants.TOGGLE_APPLICATIONS_MENU
    };
  };

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

  const changeSelectedProduct = (product) => {
    return {
      type: constants.CHANGE_SELECTED_PRODUCT,
      product
    }
  };

  const resetSelectedProduct = () => {
    return {
      type: constants.RESET_SELECTED_PRODUCT
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

  const hideAllMenus = () => {
    return {
      type: constants.HIDE_ALL_MENUS
    }
  };

  const toggleMobileMenu = () => {
    return {
      type: constants.TOGGLE_MOBILE_MENU
    }
  };

  return {
    toggleApplicationsMenu,
    showApplicationsMenu,
    toggleUserMenu,
    showBusinessPartnerMenu,
    hideBusinessPartnerMenu,
    toggleBusinessPartnerMenu,
    changeSelectedProduct,
    resetSelectedProduct,
    setHelpWidgetAsLoaded,
    hideHelpWidget,
    toggleHelpWidget,
    hideAllMenus,
    toggleMobileMenu
  };
};

export default VisibilityActions;
