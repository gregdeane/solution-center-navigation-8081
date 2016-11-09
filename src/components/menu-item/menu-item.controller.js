class MenuItemController {
  constructor() {
    this.highlightedClass = this.isHighlighted ? ('menu__item__link--' + this.highlightedClass) : '';
  }
}

export default MenuItemController;
