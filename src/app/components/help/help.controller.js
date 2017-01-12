import * as Actions from '../../actions';

class HelpController {

  static mapStateToProps(state) {
    return {
      isHelpWidgetLoaded: state.visibility.helpWidgetLoaded,
      isHelpWidgetShown: state.visibility.helpWidgetShown
    };
  }

  constructor(helpService, $ngRedux) {
    this.helpService = helpService;
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.$ngRedux.connect(
      HelpController.mapStateToProps,
      Actions
    )(this);

    this.helpService.loadHelpWidget(this.products);
  }
}

export default HelpController;
