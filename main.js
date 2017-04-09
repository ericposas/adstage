/*global Stage, Square, adstage, TweenLite*/
/*global BG, Outline, t1*/

function init(){
  //new main.js file edited -- 04.07.2017
  var stage = new Stage(300,600,'Test Ad'); // our 'stage' instance
  var bg = new BG(); //bg class instance
  //var t1 = new Square({id:'t1',image:'1.png',x:1,y:1}); 
  var f1 = {
    t1: new Square({id:'t1',image:'1.png',x:1,y:1}),
    t2: new Square({id:'t2',image:'2.png',x:1,y:1,hide:true}),
    t3: new Square({id:'t3',image:'3.png',x:1,y:1,hide:true})
  };
  var f2 = {
    t4: new Square({id:'t4',image:'4.png',x:1,y:1})
  };
  var logo = new Square({id:'logo',image:'logo.png'}); // logo graphic
  var outline = new Outline(); // ad 'outline' overlay -- click area
  //stage.add(bg).add(f1.t1).add(f1.t2).add(f1.t3).add(logo).add(outline); 
  stage.addMult([bg,f1.t1,f1.t2,f1.t3,outline]);
  
  /* ANIMATION */
  // dynamically set animation function to be called from adstage once all images are loaded 
  adstage.stage.animate = function (){
    (function one(){
      f1.t1.from(0.5, {x:-20,alpha:0});
      
    }());
  };
}

