import * as Actions from '../../actions';

class UserMenuController {

  static mapStateToProps(state) {
    return {
      state: state
    };
  }

  constructor($ngRedux, ScAuthenticationService) {
    this.$ngRedux = $ngRedux;
    this.scAuthenticationService = ScAuthenticationService;
  }

  $onInit() {
    this.$ngRedux.connect(
      UserMenuController.mapStateToProps,
      Actions)
    (this);
  }

  logout() {
    this.scAuthenticationService.logout();
  }
}

export default UserMenuController;
