import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class Menu{
  constructor(){
    this.nav = $('.nav');
    this.navLinks = $('.nav__link');
    this.trigger = $('.header-title__text');
    this.sections = $('section');
    this.navIcon = $('.nav-icon');
    this.navCloser = $('.nav-icon__closer');
    this.addSmoothScroll();
    this.createMatchingLinks();
    this.createWaypoint();
  }
  addSmoothScroll(){
    this.navLinks.smoothScroll();
  }
  createMatchingLinks(){
    this.sections.each(i=>{
      const currentSection = this.sections[i];
      const that = this;
      new Waypoint({
        element: currentSection,
        handler: direction => {
          if(direction==='down'){
            const matchingLink = currentSection.getAttribute('data-matching-link');
            that.navLinks.removeClass('nav__link--current');
            $(matchingLink).addClass('nav__link--current');
          }
        },
        offset: '18%'
      });
      new Waypoint({
        element: currentSection,
        handler: direction => {
          if(direction==='up'){
            const matchingLink = currentSection.getAttribute('data-matching-link');
            if(matchingLink === '#landing-link'){
              that.navLinks.removeClass('nav__link--current');
            }else{
              that.navLinks.removeClass('nav__link--current');
              $(matchingLink).addClass('nav__link--current');
            }
          }
        },
        offset: '-95%'
      });
    });
  }

  createWaypoint(){
    new Waypoint({
      element: this.trigger[0],
      handler: direction => {
        if(direction === "down"){
          this.navLinks.addClass('nav__link--more-visible');
          this.nav.addClass('nav--more-visible');
          if(this.navIcon){
            this.navIcon.addClass('nav-icon--more-visible');
          }
          if(this.navCloser){
            this.navCloser.addClass('nav-icon__closer--more-visible');
          }
        }else{
          this.navLinks.removeClass('nav__link--more-visible');
          this.nav.removeClass('nav--more-visible');
          if(this.navIcon){
            this.navIcon.removeClass('nav-icon--more-visible');
          }
          if(this.navCloser){
            this.navCloser.removeClass('nav-icon__closer--more-visible');
          }
        }
      }
    })
  }
}
export default Menu;
