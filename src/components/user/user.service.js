import * as Actions from '../../actions';

class UserService {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToParams, Actions)(this);
  }

  mapStateToParams(state) {
    return {
      userMenuShown: state.visibility.userMenuShown,
    };
  }

  showUserMenu() {
    return this.userMenuShown;
  }
}

export default UserService;