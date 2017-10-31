import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class EduExp{
  constructor(){
      this.expButton = $('.icon-exp');
      this.eduButton = $('.icon-edu');
      this.eduExpContainers = $('.eduexp-container');
      this.iconLink = $('.icon-link');
      this.toggleClasses = this.toggleClasses.bind(this);
      this.createSmoothScroll();
      this.events();
  }

  createSmoothScroll(){
    this.iconLink.smoothScroll();
  }
  events(){
    this.expButton.click(this.toggleClasses);
    this.eduButton.click(this.toggleClasses);
  }
  toggleClasses(){
    const button = $(event.target);
    //check if the exp icon is clicked and if experience (first in arr) has hidden class.
    if(button[0].classList[0] === 'icon-exp' && this.eduExpContainers[0].classList[1]){
      this.eduExpContainers.toggleClass('eduexp-container--hidden');
    }
    //check if the exp icon is clicked and if experience (first in arr) has hidden class. 3rd item, because of absolute rule added.
    if(button[0].classList[0] === 'icon-edu' && this.eduExpContainers[1].classList[2]){
      this.eduExpContainers.toggleClass('eduexp-container--hidden');
    }
  }
}

export default EduExp;
