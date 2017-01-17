import * as types from '../constants/ActionTypes';

import {
    toggleApplicationsMenu,
    showApplicationsMenu,
    toggleUserMenu,
    showBusinessPartnerMenu,
    hideBusinessPartnerMenu,
    toggleBusinessPartnerMenu,
    disableBusinessPartnerMenu,
    changeSelectedProduct,
    resetSelectedProduct,
    setHelpWidgetAsLoaded,
    hideHelpWidget,
    toggleHelpWidget,
    hideAllMenus,
    changeCurrentApplication,
    changeCurrentProduct,
    resetCurrentApplication,
    resetCurrentProduct,
} from '../actions';

describe('actions', () => {
  describe('toggleApplicationsMenu', () => {
    it('should have a type of \"' + types.TOGGLE_APPLICATIONS_MENU + '\"', () =>
        expect(toggleApplicationsMenu().type).toEqual(types.TOGGLE_APPLICATIONS_MENU)
    );
  });

  describe('showApplicationsMenu', () => {
    it('should have a type of \"' + types.SHOW_APPLICATIONS_MENU + '\"', () =>
      expect(showApplicationsMenu().type).toEqual(types.SHOW_APPLICATIONS_MENU)
    );
  });

  describe('toggleUserMenu', () => {
    it('should have a type of \"' + types.TOGGLE_USER_MENU + '\"', () =>
        expect(toggleUserMenu().type).toEqual(types.TOGGLE_USER_MENU)
    );
  });

  describe('showBusinessPartnerMenu', () => {
    it('should have a type of \"' + types.SHOW_BUSINESS_PARTNER_MENU + '\"', () =>
        expect(showBusinessPartnerMenu().type).toEqual(types.SHOW_BUSINESS_PARTNER_MENU)
    );
  });

  describe('hideBusinessPartnerMenu', () => {
    it('should have a type of \"' + types.HIDE_BUSINESS_PARTNER_MENU + '\"', () =>
        expect(hideBusinessPartnerMenu().type).toEqual(types.HIDE_BUSINESS_PARTNER_MENU)
    );
  });

  describe('toggleBusinessPartnerMenu', () => {
    it('should have a type of \"' + types.TOGGLE_BUSINESS_PARTNER_MENU + '\"', () =>
        expect(toggleBusinessPartnerMenu().type).toEqual(types.TOGGLE_BUSINESS_PARTNER_MENU)
    );
  });

  describe('disableBusinessPartnerMenu', () => {
    it('should have a type of \"' + types.DISABLE_BUSINESS_PARTNER_MENU + '\"', () =>
      expect(disableBusinessPartnerMenu().type).toEqual(types.DISABLE_BUSINESS_PARTNER_MENU)
    );
  });

  describe('changeSelectedProduct', () => {
    it('should have a type of \"' + types.CHANGE_SELECTED_PRODUCT + '\"', () =>
      expect(changeSelectedProduct().type).toEqual(types.CHANGE_SELECTED_PRODUCT)
    );

    it('should pass on the product passed in', () => {
      let product = {id: 1, name: 'PRODUCT'};
        expect(changeSelectedProduct(product).product)
    });
  });

  describe('resetSelectedProduct', () => {
    it('should have a type of \"' + types.RESET_SELECTED_PRODUCT + '\"', () =>
        expect(resetSelectedProduct().type).toEqual(types.RESET_SELECTED_PRODUCT)
    );
  });

  describe('setHelpWidgetAsLoaded', () => {
    it('should have a type of \"' + types.SET_HELP_WIDGET_AS_LOADED + '\"', () =>
        expect(setHelpWidgetAsLoaded().type).toEqual(types.SET_HELP_WIDGET_AS_LOADED)
    );
  });

  describe('hideHelpWidget', () => {
    it('should have a type of \"' + types.HIDE_HELP_WIDGET + '\"', () =>
        expect(hideHelpWidget().type).toEqual(types.HIDE_HELP_WIDGET)
    );
  });

  describe('toggleHelpWidget', () => {
    it('should have a type of \"' + types.TOGGLE_HELP_WIDGET + '\"', () =>
        expect(toggleHelpWidget().type).toEqual(types.TOGGLE_HELP_WIDGET)
    );
  });

  describe('hideAllMenus', () => {
    it('should have a type of \"' + types.HIDE_ALL_MENUS + '\"', () =>
        expect(hideAllMenus().type).toEqual(types.HIDE_ALL_MENUS)
    );
  });

  describe('changeCurrentApplication', () => {
    it('should have a type of \"' + types.CHANGE_CURRENT_APPLICATION + '\"', () =>
        expect(changeCurrentApplication().type).toEqual(types.CHANGE_CURRENT_APPLICATION)
    );

    it('should pass on the application passed in', () => {
      let application = {id: 1, name: 'APPLICATION'};
      expect(changeCurrentApplication(application).application)
    });
  });

  describe('changeCurrentProduct', () => {
    it('should have a type of \"' + types.CHANGE_CURRENT_PRODUCT + '\"', () =>
        expect(changeCurrentProduct().type).toEqual(types.CHANGE_CURRENT_PRODUCT)
    );

    it('should pass on the product passed in', () => {
      let product = {id: 1, name: 'PRODUCT'};
      expect(changeCurrentProduct(product).product)
    });
  });

  describe('resetCurrentApplication', () => {
    it('should have a type of \"' + types.RESET_CURRENT_APPLICATION + '\"', () =>
        expect(resetCurrentApplication().type).toEqual(types.RESET_CURRENT_APPLICATION)
    );
  });

  describe('resetCurrentProduct', () => {
    it('should have a type of \"' + types.RESET_CURRENT_PRODUCT + '\"', () =>
        expect(resetCurrentProduct().type).toEqual(types.RESET_CURRENT_PRODUCT)
    );
  });
});
