import * as Actions from '../../actions';

class LogoButtonController {
  static mapStateToProps(state) {
    return {
      mobileMenuShown: state.visibility.mobileMenuShown
    };
  }

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.$ngRedux.connect(
      LogoButtonController.mapStateToProps,
      Actions
    )(this);
  }
}

export default LogoButtonController;
