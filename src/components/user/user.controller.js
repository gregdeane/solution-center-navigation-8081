import * as Actions from '../../actions';

class UserController {
  mapStateToParams(state) {
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
      this.mapStateToParams,
      Actions)
    (this);
  }
}

export default UserController;
