/*global Stage, Square, adstage*/
/*global BG, Outline, t1*/

function init(){
  //new main.js file started -- 04.06.2017
  var stage = new Stage();
  //add 'bg' -- a custom class defined by user
  var bg = new BG();
  //stage.add(bg);
  //text block 01
  var t1 = new Square({id:'t1',image:'1.png',x:1,y:1});
  //logo
  var logo = new Square({id:'logo',image:'logo.png'});
  //ad 'outline' overlayed on top -- doubles as clickTag click area
  var outline = new Outline();
  //chain add all elements! 
  stage.add(bg).add(t1).add(logo).add(outline);
  
  //set all animation functions here 
  function animate(){
    function two(){
      t1.to(2, {scale:1.3,x:32,y:40});
    }
    (function one(){
      t1.from(0.75,{alpha:0, x:-50, onComplete:two});
    }());
  }
  // dynamically set animation function to be called from adstage once all images are loaded 
  adstage.stage.animate = animate;
}

