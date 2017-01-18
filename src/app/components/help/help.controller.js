class HelpController {

  static mapStateToThis(state) {
    return {
      isHelpWidgetLoaded: state.visibility.helpWidgetLoaded,
      isHelpWidgetShown: state.visibility.helpWidgetShown
    };
  }

  constructor($ngRedux, helpService, VisibilityActions) {
    this.$ngRedux = $ngRedux;
    this.helpService = helpService;
    this.visibilityActions = VisibilityActions;
  }

  $onInit() {
    this.$ngRedux.connect(
      HelpController.mapStateToThis,
      this.visibilityActions
    )(this);

    this.helpService.loadHelpWidget(this.products);
  }
}

export default HelpController;
