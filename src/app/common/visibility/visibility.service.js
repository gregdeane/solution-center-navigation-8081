class VisibilityService {

  constructor($ngRedux, VisibilityActions) {
    this.$ngRedux = $ngRedux;
    this.visibilityActions = VisibilityActions;
  }

  dispatch(action) {
    this.$ngRedux.dispatch(this.visibilityActions[action]());
  }

}

export default VisibilityService;
