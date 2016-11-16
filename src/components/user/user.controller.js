class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  toggleUserMenu() {
    this.userService.toggleUserMenu();
  }

  showUserMenu() {
    this.userService.showUserMenu();
  }
}

export default UserController;
