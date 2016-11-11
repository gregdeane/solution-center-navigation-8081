import * as Actions from '../../actions';

class UserMenuController {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      state: state
    };
  }
}

export default UserMenuController;
