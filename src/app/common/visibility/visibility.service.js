class VisibilityService {

  constructor($ngRedux, VisibilityActions) {
    this.$ngRedux = $ngRedux;
    this.visibilityActions = VisibilityActions;
  }

  dispatch(action, data) {
    this.$ngRedux.dispatch(this.visibilityActions[action](data));
  }

}

export default VisibilityService;
