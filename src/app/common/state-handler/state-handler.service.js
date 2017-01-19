import * as Actions from '../../actions';

class StateHandlerService {
  constructor($ngRedux, BusinessPartnerActions, NavigationActions, VisibilityActions) {
    this.$ngRedux = $ngRedux;
    this.businessPartnerActions = BusinessPartnerActions;
    this.navigationActions = NavigationActions;
    this.visibilityActions = VisibilityActions;
  }

  dispatch(action, parameter) {
    // TODO after all actions are in their final locations, remove this if and just use `this.businessPartnerActions`
    let dispatchAction = Actions[action]
      || this.businessPartnerActions[action]
      || this.navigationActions[action]
      || this.visibilityActions[action];

    this.$ngRedux.dispatch(dispatchAction(parameter));
  }

  getProperty(type, property) {
    return this.$ngRedux.getState()[type][property];
  }
}

export default StateHandlerService;
