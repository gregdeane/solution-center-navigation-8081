import * as constants from './visibility.constants';

const initialState = {
  applicationsMenuShown: false,
  userMenuShown: false,
  selectedProductId: undefined,
  businessPartnerMenuShown: false,
  businessPartnerMenuDisabled: false,
  helpWidgetLoaded: false,
  helpWidgetShown: false,
  mobileMenuShown: false
};

const visibility = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_APPLICATIONS_MENU:
      return {
        ...state,
        applicationsMenuShown: true,
        userMenuShown: false
      };

    case constants.TOGGLE_USER_MENU:
      return {
        ...state,
        userMenuShown: !state.userMenuShown,
        applicationsMenuShown: false
      };

    case constants.SHOW_BUSINESS_PARTNER_MENU:
      return {
        ...state,
        businessPartnerMenuShown: true,
        mobileMenuShown: false // In mobile view both cannot be displayed at the same time
      };

    case constants.HIDE_BUSINESS_PARTNER_MENU:
      return {
        ...state,
        businessPartnerMenuShown: false
      };

    case constants.TOGGLE_BUSINESS_PARTNER_MENU:
      return {
        ...state,
        businessPartnerMenuShown: !state.businessPartnerMenuShown,
        mobileMenuShown: false // In mobile view both cannot be displayed at the same time
      };

    case constants.DISABLE_BUSINESS_PARTNER_MENU:
      return {
        ...state,
        businessPartnerMenuDisabled: true
      };

    case constants.CHANGE_SELECTED_PRODUCT_ID:
      return {
        ...state,
        selectedProductId: action.productId
      };

    case constants.RESET_SELECTED_PRODUCT_ID:
      return {
        ...state,
        selectedProductId: undefined
      };

    case constants.SET_HELP_WIDGET_AS_LOADED:
      return {
        ...state,
        helpWidgetLoaded: true
      };

    case constants.HIDE_HELP_WIDGET:
      return {
        ...state,
        helpWidgetShown: false
      };

    case constants.TOGGLE_HELP_WIDGET:
      return {
        ...state,
        helpWidgetShown: !state.helpWidgetShown
      };

    case constants.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        mobileMenuShown: !state.mobileMenuShown,
        businessPartnerMenuShown: false // In mobile view both cannot be displayed at the same time
      };

    default:
      return state
  }
};

export default visibility;
