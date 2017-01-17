import { hideBusinessPartnerMenu } from '../../actions';

class BusinessPartnerService {

  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  hideBusinessPartnerMenu() {
    this.$ngRedux.dispatch(hideBusinessPartnerMenu());
  }

}

export default BusinessPartnerService;
