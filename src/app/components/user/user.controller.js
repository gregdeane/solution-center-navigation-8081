class UserController {

  static mapStateToThis(state) {
    return {
      userMenuShown: state.visibility.userMenuShown,
      mobileMenuShown: state.visibility.mobileMenuShown
    };
  }

  constructor($ngRedux, VisibilityActions) {
    this.$ngRedux = $ngRedux;
    this.visibilityActions = VisibilityActions;
  }

  $onInit() {
    this.$ngRedux.connect(
      UserController.mapStateToThis,
      this.visibilityActions
    )(this);
  }
}

export default UserController;
