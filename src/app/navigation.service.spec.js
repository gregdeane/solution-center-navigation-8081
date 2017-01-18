describe('Navigation Service', () => {
  let navigationService;
  let stateHandlerService;
  let $cookies;
  let mock;

  beforeEach(setup);

  describe('loadCurrentContext', () => {
    it('should dispatch three actions if an application id is provided', () => {
      navigationService.loadCurrentContext(mock.applicationId, mock.productId);

      expect(stateHandlerService.dispatch.calls.count()).toEqual(3);
    });

    it('should dispatch two actions if an application id is not provided', () => {
      navigationService.loadCurrentContext(undefined, mock.productId);

      expect(stateHandlerService.dispatch.calls.count()).toEqual(2);
    });

    it('should dispatch an action to change the current application id', () => {
      navigationService.loadCurrentContext(mock.applicationId, mock.productId);

      expect(stateHandlerService.dispatch.calls.argsFor(0)).toEqual(
        [mock.actions.changeCurrentApplicationId, mock.applicationId]);
    });

    it('should dispatch an action to change the current product id', () => {
      navigationService.loadCurrentContext(mock.applicationId, mock.productId);

      expect(stateHandlerService.dispatch.calls.argsFor(1)).toEqual(
        [mock.actions.changeCurrentProductId, mock.productId])
    });

    it('should dispatch an action to show the applications menu if there is an application id', () => {
      navigationService.loadCurrentContext(mock.applicationId, mock.productId);

      expect(stateHandlerService.dispatch.calls.argsFor(2)).toEqual(
        [mock.actions.showApplicationsMenu]);
    });
  });

  describe('handleBusinessPartner', () => {
    describe('if the user only has access to one business partner', () => {
      beforeEach(() => {
        spyOn(stateHandlerService, 'getProperty').and.returnValue([mock.accessibleBusinessPartners[0]]);
      });

      it('should always dispatch two actions', () => {
        navigationService.handleBusinessPartner();

        expect(stateHandlerService.dispatch.calls.count()).toEqual(2);
      });

      it('should dispatch an action to set the current business partner automatically', () => {
        navigationService.handleBusinessPartner();

        expect(stateHandlerService.dispatch.calls.argsFor(0)).toEqual(
          [mock.actions.changeCurrentBusinessPartnerId, mock.accessibleBusinessPartners[0]]);
      });

      it('should dispatch an action to disable the business partner menu', () => {
        navigationService.handleBusinessPartner();

        expect(stateHandlerService.dispatch.calls.argsFor(1)).toEqual([mock.actions.disableBusinessPartnerMenu]);
      });
    });

    describe('if the user has access to several business partners', () => {
      beforeEach(() => {
        spyOn(stateHandlerService, 'getProperty').and.returnValue(mock.accessibleBusinessPartners);
      });

      it('should check if there is a business partner id stored in the cookie', () => {
        spyOn($cookies, 'get').and.returnValues(mock.businessPartnerId);

        navigationService.handleBusinessPartner();

        expect($cookies.get).toHaveBeenCalled();
      });

      it('should dispatch an action to get business partner information if the business partner id of the cookie is valid', () => {
        spyOn($cookies, 'get').and.returnValues(mock.businessPartnerId);

        navigationService.handleBusinessPartner();

        expect(stateHandlerService.dispatch).toHaveBeenCalledWith(mock.actions.getBusinessPartnerById, mock.businessPartnerId);
      });

      it('should dispatch an action to show the business partner menu if the business partner id of the cookie is not valid', () => {
        spyOn($cookies, 'get').and.returnValues(undefined);

        navigationService.handleBusinessPartner();

        expect(stateHandlerService.dispatch).toHaveBeenCalledWith(mock.actions.showBusinessPartnerMenu);
      });
    });
  });

  describe('isValidBusinessPartnerForApplication', () => {
    it('should consider valid a business partner which is accessible in the application', () => {
      let result = navigationService.isValidBusinessPartnerForApplication(mock.accessibleBusinessPartners, mock.businessPartnerId);

      expect(result).toBeTruthy();
    });

    it('should not consider valid a business partner which is not accessible in the application', () => {
      let result = navigationService.isValidBusinessPartnerForApplication(mock.accessibleBusinessPartners, -10);

      expect(result).toBeFalsy();
    });

    it('should not consider valid a non-existent business partner', () => {
      let result = navigationService.isValidBusinessPartnerForApplication(mock.accessibleBusinessPartners, undefined);

      expect(result).toBeFalsy();
    });
  });

  ////////////////////////////

  function setup() {
    mocks();
    modules();
    injectors();
    spies();
  }

  function modules() {
    angular.mock.module('solution-center-navigation');
  }

  function injectors() {
    angular.mock.inject($injector => {
      navigationService = $injector.get('navigationService');
      stateHandlerService = $injector.get('stateHandlerService');
      $cookies = $injector.get('$cookies');
    });
  }

  function spies() {
    spyOn(stateHandlerService, 'dispatch').and.callThrough();
  }

  function mocks() {
    const MOCKED_ID = 1;
    mock = {
      applicationId: MOCKED_ID,
      productId: MOCKED_ID,
      businessPartnerId: MOCKED_ID,
      actions: {
        changeCurrentApplicationId: 'changeCurrentApplicationId',
        changeCurrentProductId: 'changeCurrentProduct',
        showApplicationsMenu: 'showApplicationsMenu',
        changeCurrentBusinessPartnerId: 'changeCurrentBusinessPartner',
        disableBusinessPartnerMenu: 'disableBusinessPartnerMenu',
        getBusinessPartnerById: 'getBusinessPartnerById',
        showBusinessPartnerMenu: 'showBusinessPartnerMenu'
      },
      accessibleBusinessPartners: [
        {id: MOCKED_ID},
        {id: MOCKED_ID + 1}
      ]
    };
  }
});
