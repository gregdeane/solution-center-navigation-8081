import * as Actions from '../../actions';

import smallLogo from '../../assets/img/logo--no-text.svg';
import logo from '../../assets/img/logo.svg';

class LogoButtonController {
  static mapStateToProps(state) {
    return {
      mobileMenuShown: state.visibility.mobileMenuShown
    };
  }

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;

    this.smallLogo = smallLogo;
    this.logo = logo;
  }

  $onInit() {
    this.$ngRedux.connect(
      LogoButtonController.mapStateToProps,
      Actions
    )(this);
  }
}

export default LogoButtonController;
