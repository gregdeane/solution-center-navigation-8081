import * as Actions from '../../actions';

class AppHeaderService {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      businessPartnerMenuShown: state.visibility.businessPartnerMenuShown,
    };
  }
}

export default AppHeaderService;