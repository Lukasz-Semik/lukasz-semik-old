import $ from 'jquery';

class MonitorText{
  constructor(){
    this.mainText = [
      'c','o','n','s','t ','l','u','k','a','s','z ','= ', '{<br/>&nbsp;&nbsp;&nbsp;&nbsp;','s','k','i',
      'l','l',': ','\'','J','a','v','a','S','c','r','i','p','t','\'',
      ',<br/>&nbsp;&nbsp;&nbsp;&nbsp;','g','o','o','d','C','h','o','i','c','e',
      ': ','t','r','u','e<br/>','}',';','','','','','','','','','','',''
    ];
    console.log(this.mainText);
    this.tempText = '';
    this.counter = -1;
    this.areaToInject = $('.about-me__monitor-text');
    this.injecting = this.injecting.bind(this);
    setInterval(this.injecting, 100);
  }
  injecting(){
    this.counter++;
    if(this.counter >= this.mainText.length){
      this.areaToInject.html('');
      this.tempText = '';
      this.counter = 0;
    }
    this.tempText += this.mainText[this.counter];
    this.areaToInject.html(this.tempText);
  }

}

export default MonitorText;
