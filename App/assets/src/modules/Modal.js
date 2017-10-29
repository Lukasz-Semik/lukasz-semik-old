import $ from 'jquery';

class Modal{
  constructor(){
    this.clickers = $('.modal-clicker');
    this.modal = $('.modal__overlay');
    this.closer = $('.modal__x');
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalOverlay = this.closeModalOverlay.bind(this);
    this.closeModalKeyboard = this.closeModalKeyboard.bind(this);
    this.events();
  }
  events(){
    this.clickers.on("click", this.openModal)
    this.closer.on("click", this.closeModal);
    this.modal.on("click", this.closeModalOverlay);
    $(document).on("keyup", this.closeModalKeyboard);
  }
  closeModalKeyboard(event){
    if(event.keyCode == 27){
      this.closeModal();
    }
  }
  closeModalOverlay(event){
    if(event.currentTarget === event.target){
      this.modal.removeClass('modal__overlay--visible')
    }
  }
  openModal(event){
    event.preventDefault();
    this.modal.addClass('modal__overlay--visible')
  }
  closeModal(){
    this.modal.removeClass('modal__overlay--visible')
  }
}

export default Modal;
