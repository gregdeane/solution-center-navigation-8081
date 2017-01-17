import * as types from '../constants/ActionTypes';

/*
 VISIBILITY
 */

export const toggleApplicationsMenu = () => {
  return {
    type: types.TOGGLE_APPLICATIONS_MENU
  };
};

// export const showApplicationsMenu = () => {
//   return {
//     type: types.SHOW_APPLICATIONS_MENU
//   };
// };

export const toggleUserMenu = () => {
  return {
    type: types.TOGGLE_USER_MENU
  };
};

// export const showBusinessPartnerMenu = () => {
//   return {
//     type: types.SHOW_BUSINESS_PARTNER_MENU
//   }
// };

export const hideBusinessPartnerMenu = () => {
  return {
    type: types.HIDE_BUSINESS_PARTNER_MENU
  }
};

export const toggleBusinessPartnerMenu = () => {
  return {
    type: types.TOGGLE_BUSINESS_PARTNER_MENU
  }
};

// export const disableBusinessPartnerMenu = () => {
//   return {
//     type: types.DISABLE_BUSINESS_PARTNER_MENU
//   }
// };

export const changeSelectedProduct = (product) => {
  return {
    type: types.CHANGE_SELECTED_PRODUCT,
    product
  }
};

export const resetSelectedProduct = () => {
  return {
    type: types.RESET_SELECTED_PRODUCT
  }
};

export const setHelpWidgetAsLoaded = () => {
  return {
    type: types.SET_HELP_WIDGET_AS_LOADED
  }
};

export const hideHelpWidget = () => {
  return {
    type: types.HIDE_HELP_WIDGET
  }
};

export const toggleHelpWidget = () => {
  return {
    type: types.TOGGLE_HELP_WIDGET
  }
};

export const hideAllMenus = () => {
  return {
    type: types.HIDE_ALL_MENUS
  }
};

export const toggleMobileMenu = () => {
  return {
    type: types.TOGGLE_MOBILE_MENU
  }
};

/*
  NAVIGATION
 */

export const changeCurrentApplication = (application) => {
  return {
    type: types.CHANGE_CURRENT_APPLICATION,
    application
  };
};

export const changeCurrentProduct = (product) => {
  return {
    type: types.CHANGE_CURRENT_PRODUCT,
    product
  };
};

export const resetCurrentApplication = () => {
  return {
    type: types.RESET_CURRENT_APPLICATION
  };
};

export const resetCurrentProduct = () => {
  return {
    type: types.RESET_CURRENT_PRODUCT
  };
};
