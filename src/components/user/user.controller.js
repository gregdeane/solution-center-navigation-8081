import * as Actions from '../../actions';

class UserController {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      state: state
    };
  }
}

export default UserController;
