class HelpController {
  constructor(helpService) {
    this.helpService = helpService;

    this.helpService.loadHelpWidget(this.products);
  }

  isHelpWidgetLoaded() {
    return this.helpService.isHelpWidgetLoaded;
  }

  isHelpWidgetShown() {
    return this.helpService.isHelpWidgetShown;
  }

  toggleHelpWidget() {
    this.helpService.toggleHelpWidget();
  }

  hideHelpWidget() {
    this.helpService.hideHelpWidget();
  }
}

export default HelpController;
