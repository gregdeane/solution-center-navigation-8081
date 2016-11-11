import * as Actions from '../../actions';

class HelpController {
  constructor($ngRedux, helpService) {
    this.helpService = helpService;

    $ngRedux.connect(this.mapStateToParams, Actions)(this);

    this.helpService.loadHelpWidget(this.products);

    this.setHelpWidgetAsLoaded();
  }

  mapStateToParams(state) {
    return {
      isHelpWidgetLoaded: state.visibility.helpWidgetLoaded,
      isHelpWidgetShown: state.visibility.helpWidgetShown
    };
  }
}

export default HelpController;
