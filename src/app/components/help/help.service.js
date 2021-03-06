class HelpService {

  static getHelpSections(products) {
    return ['General'].concat(HelpService.getUserApplications(products));
  }

  static getUserApplications(products) {
    if (!products) {
      return [];
    }

    // TODO This will be fetched from a backend endpoint
    let userApplications = [];
    products.forEach(product => {
      userApplications.push(...product.applications.map(application => application.name));
    });

    return userApplications;
  }

  constructor($ngRedux, stateHandlerService) {
    this.$ngRedux = $ngRedux;
    this.stateHandlerService = stateHandlerService;
  }

  loadHelpWidget(products) {
    // NANOREP EMBEDDED WIDGET
    // Generated at my.nanorep.com > Guided Journeys > Touchpoints > Embedded Widget > get the code

    let _nRepData = window._nRepData || [];
    _nRepData['kb'] = '70732382';
    _nRepData['customParams'] = {
      product: HelpService.getHelpSections(products)
    };
    _nRepData['embed'] = {
      account: 'zalandobrands',
      container: 'nanoRepEmbedContainer',
      width: 400,
      maxHeight: 500,
      dynamicSize: true,
      cdcFrame: '',
      cdcVersion: 3,
      scriptVersion: '2.74.7.3'
    };

    (() => {
      let windowLoadFunc = () => {
        let _nRepData = window._nRepData || [];
        _nRepData['windowLoaded'] = true;
        if (typeof(_nRepData['windowOnload']) === 'function') {
          _nRepData['windowOnload']();
        }
      };

      if (window.attachEvent) {
        window.attachEvent('onload', windowLoadFunc);
      }
      else if (window.addEventListener) {
        window.addEventListener('load', windowLoadFunc, false);
      }

      let sc = document.createElement('script');
      sc.type = 'text/javascript';
      sc.async = true;
      sc.defer = true;
      sc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') +
          'my.nanorep.com/widget/scripts/embed.js?account=zalandobrands';

      let _head = document.getElementsByTagName('head')[0];
      _head.appendChild(sc);
    })();

    // added this to generate code so we can run this outside the global scope
    window._nRepData = _nRepData;

    this.stateHandlerService.dispatch('setHelpWidgetAsLoaded');
  }
}

export default HelpService;
