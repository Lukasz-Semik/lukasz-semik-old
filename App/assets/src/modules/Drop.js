import $ from 'jquery';

class Drop{
  constructor(){
    this.createDrops();
    this.drops = $('.drop');
    this.generateEvents();
  }

  createDrops(){
    const randomDelaysArr = [];
      while(randomDelaysArr.length<10){
        const randNum = Math.floor(Math.random()*10+1);
        if(randomDelaysArr.indexOf(randNum) === -1){
          randomDelaysArr.push(randNum);
        }
      }
    const header = $(`.drops-container`);
    header.html('');
    const randomPosition = [];
    while(randomPosition.length<10){
      const randNum = Math.floor(Math.random()*10+1);
      if(randomPosition.indexOf(randNum) === -1){
        randomPosition.push(randNum);
      }
    }
    for(let i=0; i<10; i++){
      const dropTxt = `<div class="drop drop--pos-${randomPosition[i]} drop--ani-${randomDelaysArr[i]}"><div class="drop__efx"></div></div>`;
      header.append(dropTxt);
    }
  }
  generateEvents(){
    this.drops.click(this.dropsClickAnimation.bind(this));
  }
  dropsClickAnimation(event){
    const drop = $(event.target);
    drop.addClass('drop--crashed');
    setTimeout(()=>{
      drop.removeClass('drop--crashed');
    },3000);
  }
};

export default Drop;
