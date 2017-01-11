import * as Actions from '../../actions';

class UserController {
  static mapStateToProps(state) {
    return {
      userMenuShown: state.visibility.userMenuShown,
      mobileMenuShown: state.visibility.mobileMenuShown
    };
  }

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.$ngRedux.connect(
      UserController.mapStateToProps,
      Actions)
    (this);
  }
}

export default UserController;
