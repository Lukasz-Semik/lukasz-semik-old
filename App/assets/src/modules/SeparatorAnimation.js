import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class SeparatorAnimation{
  constructor(){
    this.sections = $('.title--section');
    this.titles = $('.my-stack-separator');
    this.createWaypoint();
  }

  createWaypoint(){
    const that = this;
    this.titles.each(i=>{
      const currentTitle = that.titles[i];
      new Waypoint({
        element: currentTitle,
        handler: direction=>{
          if(direction === 'down'){
            $(currentTitle).addClass('my-stack-separator--visible');
          }else{
            $(currentTitle).removeClass('my-stack-separator--visible');
          }
        },
        offset: '90%'
      })
    })
  }
}

export default SeparatorAnimation;
