class UserController {

  static mapStateToProps(state) {
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
      UserController.mapStateToProps,
      this.visibilityActions
    )(this);
  }
}

export default UserController;
