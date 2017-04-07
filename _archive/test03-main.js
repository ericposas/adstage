/*global Stage, Square, adstage, TweenLite*/
/*global BG, Outline, t1*/

function init(){
  //new main.js file edited -- 04.07.2017
  var stage = new Stage(300,250,'Test Ad'); // our 'stage' instance
  var bg = new BG(); //bg class instance
  var t1 = new Square({id:'t1',image:'1.png',x:1,y:1}); // text 01
  var logo = new Square({id:'logo',image:'logo.png'}); // logo graphic
  var outline = new Outline(); // ad 'outline' overlay -- click area
  stage.add(bg).add(t1).add(logo).add(outline); // chaining! 
  
  /* ANIMATION */
  // dynamically set animation function to be called from adstage once all images are loaded 
  adstage.stage.animate = function (){
    (function one(){
      
    }());
  };
}

