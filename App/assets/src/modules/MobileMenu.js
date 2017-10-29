import $ from 'jquery';

class MobileMenu {
  constructor(){
    this.hamburger = $('#hamburger');
    this.menu = $('.nav__menu-container');
    this.closingIcon = $('.nav-icon__closer');
    this.navMain = $('.nav');
    this.events();
  }

  events(){
    this.hamburger.click(this.toggleMenu.bind(this));
  }

  toggleMenu(){
    this.menu.toggleClass('nav__menu-container--expanded');
    this.closingIcon.toggleClass('nav-icon__closer--visible');
    this.hamburger.toggleClass('nav-icon-hidden');
    this.navMain.toggleClass('nav--bg-helper');
  }
}

export default MobileMenu;
