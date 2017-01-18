import * as Actions from '../../actions';

class LogoButtonController {
  static mapStateToThis(state) {
    return {
      mobileMenuShown: state.visibility.mobileMenuShown
    };
  }

  constructor($ngRedux, stateHandlerService) {
    this.$ngRedux = $ngRedux;
    this.stateHandlerService = stateHandlerService;
  }

  $onInit() {
    this.$ngRedux.connect(
      LogoButtonController.mapStateToThis,
      Actions
    )(this);
  }

  toggleMobileMenu() {
    this.stateHandlerService.dispatch('toggleMobileMenu');
  }
}

export default LogoButtonController;
