/*global Stage, Square, adstage, TweenLite, alert, window, TimelineLite*/
/*global BG, Outline, t1*/

function init(){
  //new main.js file edited -- 04.07.2017
  var stage = new Stage(300,600,'Test Ad'); // our 'stage' instance
  var bg = new BG(); //bg class instance
  // frame 1
  var t1 = new Square({id:'t1',image:'1.png',x:1,y:1,hide:true});
  var t2 = new Square({id:'t2',image:'2.png',x:1,y:1,hide:true});
  var t3 = new Square({id:'t3',image:'3.png',x:1,y:1,hide:true});
  // frame 2
  var t4 = new Square({id:'t4',image:'4.png',x:1,y:1});
  var logo = new Square({id:'logo',image:'logo.png'}); // logo graphic
  var outline = new Outline(); // ad 'outline' overlay -- click area
  //stage.add(bg).add(f1.t1).add(f1.t2).add(f1.t3).add(logo).add(outline); 
  stage.addMult([bg,t1,t2,t3,t4,outline]);
  
  /* ANIMATION */
  // dynamically set animation function to be called from adstage once all images are loaded 
  adstage.stage.animate = function (){
    (function one(){
      var tl;
      function reverse(){
        TweenLite.delayedCall(2, function(){
          tl.reverse();
        });
      }
      tl = stage.tl([t1.tw, t2.tw, t3.tw], '-=.1', reverse);
      
    }());
  };
}

