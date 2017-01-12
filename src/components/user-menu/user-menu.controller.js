import * as Actions from '../../actions';

class UserMenuController {

  static mapStateToProps(state) {
    return {
      state: state
    };
  }

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.$ngRedux.connect(
      UserMenuController.mapStateToProps,
      Actions)
    (this);
  }
}

export default UserMenuController;
